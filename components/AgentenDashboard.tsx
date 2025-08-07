import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const agentTree = [
  {
    name: "LifeOps",
    subagents: [
      {
        name: "Ernährungsberater",
        description: "Plant Mahlzeiten & Einkaufslisten",
        prompts: ["Was soll ich heute essen?"],
        tools: ["MealGPT", "SupermarktAPI"]
      },
      {
        name: "Haushaltsplaner",
        description: "Erstellt Putz- und Einkaufspläne",
        prompts: ["Plane den Putzplan für die Woche"],
        tools: ["HausManager"]
      }
    ]
  },
  {
    name: "BizOps",
    subagents: [
      {
        name: "HR Agent",
        description: "Hilft bei Recruiting und Onboarding",
        prompts: ["Erstelle eine Stellenausschreibung"],
        tools: ["GPT-JD", "BewerbungsParser"]
      },
      {
        name: "Legal Bot",
        description: "Generiert Verträge & prüft Klauseln",
        prompts: ["Prüfe diesen Vertrag"],
        tools: ["LexAI", "VertragsChecker"]
      }
    ]
  }
];

export default function AgentenDashboard() {
  const [activeSubagent, setActiveSubagent] = useState(null);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {agentTree.map((saule, index) => (
        <Card key={index} className="rounded-2xl shadow-md">
          <CardContent>
            <h2 className="text-xl font-bold mb-2">{saule.name}</h2>
            {saule.subagents.map((agent, i) => (
              <div key={i} className="mb-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => setActiveSubagent(agent)}
                >
                  {agent.name}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      {activeSubagent && (
        <Card className="col-span-1 md:col-span-2 mt-4 bg-gray-50">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">{activeSubagent.name}</h3>
            <p className="mb-1 text-sm text-gray-600">{activeSubagent.description}</p>
            <p className="text-sm font-medium">Prompts:</p>
            <ul className="list-disc list-inside mb-2">
              {activeSubagent.prompts.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
            <p className="text-sm font-medium">Tools:</p>
            <ul className="list-disc list-inside">
              {activeSubagent.tools.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
