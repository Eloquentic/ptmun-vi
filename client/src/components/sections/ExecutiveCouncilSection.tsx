
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

export const ExecutiveCouncilSection = () => {
  const council = [
    {
      name: "Muhammad Saad Qureshi",
      role: "President",
    },
    {
      name: "Eeshan Ahmed",
      role: "Secretary General",
    },
    {
      name: "Affan Ghani",
      role: "Director General",
    },
    {
      name: "Ahmed Ikram",
      role: "Under Secretary General",
    },
    {
      name: "M. Qasim",
      role: "Advisor to Council",
    }
  ];

  return (
    <section id="executive-council" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Executive Council</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the core leadership team steering PTMUN VI 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {council.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
