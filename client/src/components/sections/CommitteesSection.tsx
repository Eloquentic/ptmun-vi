
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const CommitteesSection = () => {
  const committees = [
    {
      name: "UN Commission on the Status of Women",
      abbreviation: "UNCSW",
      agenda: "Addressing Gender-Based Violence in Conflict Zones",
      description: "Focusing on women's rights and gender equality in international contexts",
      level: "Intermediate"
    },
    {
      name: "UN Security Council",
      abbreviation: "UNSC",
      agenda: "Maintaining International Peace and Security in the Middle East",
      description: "Addressing global security challenges and peacekeeping operations",
      level: "Advanced"
    },
    {
      name: "UN General Assembly",
      abbreviation: "UNGA",
      agenda: "Sustainable Development and Climate Action",
      description: "Deliberating on global issues affecting all member nations",
      level: "Beginner"
    },
    {
      name: "International Court of Justice x Crisis",
      abbreviation: "ICJ x CRISIS",
      agenda: "Maritime Boundary Disputes and International Law",
      description: "Judicial proceedings with dynamic crisis elements",
      level: "Advanced"
    },
    {
      name: "Pakistan National Assembly",
      abbreviation: "PNA",
      agenda: "Domestic Policy and Legislative Proceedings",
      description: "Simulating Pakistan's national legislative body and parliamentary procedures",
      level: "All Levels"
    },
    {
      name: "UN Human Rights Council",
      abbreviation: "UNHRC",
      agenda: "Protection of Human Rights in Digital Age",
      description: "Addressing contemporary human rights challenges",
      level: "Intermediate"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
      default: return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300";
    }
  };

  return (
    <section id="committees" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Committees</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six diverse committees offering delegates the opportunity to engage with 
            various aspects of international relations and global governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getLevelColor(committee.level)}>
                    {committee.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{committee.abbreviation}</CardTitle>
                <h4 className="text-sm text-muted-foreground font-medium">{committee.name}</h4>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h5 className="font-semibold text-sm mb-2">Agenda:</h5>
                  <p className="text-sm text-foreground/80">{committee.agenda}</p>
                </div>
                <p className="text-sm text-muted-foreground">{committee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
