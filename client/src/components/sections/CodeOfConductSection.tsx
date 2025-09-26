
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Gavel, AlertTriangle } from 'lucide-react';

export const CodeOfConductSection = () => {
  const principles = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Respectful Behavior",
      description: "All participants must maintain dignity and respect in all interactions"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Professional Conduct",
      description: "Delegates should embody the spirit of diplomatic professionalism"
    },
    {
      icon: <Gavel className="w-6 h-6 text-primary" />,
      title: "Academic Integrity",
      description: "All research and positions must be original and properly attributed"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-primary" />,
      title: "Zero Tolerance",
      description: "No harassment, discrimination, or inappropriate behavior will be tolerated"
    }
  ];

  const disciplinaryActions = [
    "Verbal warning from Chair or Secretariat member",
    "Written warning with documentation",
    "Removal from committee session",
    "Disqualification from awards consideration",
    "Complete removal from conference"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Code of Conduct</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            PTMUN VI 2025 is committed to providing a safe, respectful, and 
            educational environment for all participants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-8">Core Principles</h3>
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{principle.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-2">{principle.title}</h4>
                        <p className="text-muted-foreground">{principle.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card className="bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-red-800 dark:text-red-300 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Disciplinary Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 dark:text-red-400 mb-4">
                  Violations of the code of conduct will result in the following 
                  progressive disciplinary measures:
                </p>
                <ol className="space-y-2 text-red-700 dark:text-red-400">
                  {disciplinaryActions.map((action, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-semibold mr-2 min-w-[1.5rem]">{index + 1}.</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/50 rounded-lg">
                  <p className="text-sm text-red-800 dark:text-red-300 font-medium">
                    <strong>Important:</strong> Any form of harassment, discrimination, 
                    or inappropriate behavior may result in immediate removal from the 
                    conference without refund.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-secondary border-border">
              <CardHeader>
                <CardTitle className="text-primary">Reporting Violations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-3">
                  If you witness or experience any violation of this code of conduct, 
                  please report it immediately to:
                </p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Your committee Chair</li>
                  <li>• Any Secretariat member</li>
                  <li>• Conference organizers</li>
                  <li>• Email: conduct@ptmun2025.com</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
