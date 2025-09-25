import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Globe, Award } from 'lucide-react';

export const AboutSection = () => {
  const values = [
    {
      icon: <Globe className="w-8 h-8 text-indigo-950" />,
      title: "Global Education",
      description: "Fostering international understanding through diplomatic simulation"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-950" />,
      title: "Mutual Respect",
      description: "Building bridges across cultures and promoting peaceful dialogue"
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-950" />,
      title: "Excellence in Diplomacy",
      description: "Developing future leaders through Model United Nations experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About PTMUN</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pak-Turk Maarif International Schools Model United Nations has been a beacon of 
            diplomatic education since its inception, fostering international understanding 
            and developing future global leaders in Lahore, Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Our Legacy</h3>
            <p className="text-lg text-gray-600 mb-6">
              For five consecutive years, PTMUN has provided students with an immersive 
              experience in international relations, diplomacy, and global governance. 
              Our conferences have welcomed delegates from across Lahore and the broader 
              region, creating a platform for meaningful dialogue and cultural exchange.
            </p>
            <p className="text-lg text-gray-600">
              Building on our rich tradition, PTMUN VI 2025 promises to be our most 
              impactful conference yet, bringing together young minds to tackle the 
              world's most pressing challenges through the lens of the United Nations.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-950 mb-2">5+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-950 mb-2">500+</div>
                <div className="text-sm text-gray-600">Delegates Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-950 mb-2">6</div>
                <div className="text-sm text-gray-600">Committees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-950 mb-2">30+</div>
                <div className="text-sm text-gray-600">Schools Participated</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
