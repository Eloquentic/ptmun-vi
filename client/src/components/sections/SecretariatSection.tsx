import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail } from 'lucide-react';

export const SecretariatSection = () => {
  const secretariat = [
    {
      name: "Ahmad Hassan",
      role: "Secretary General",
      phone: "+92 300 1234567",
      email: "sg@ptmun2025.com",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Fatima Khan",
      role: "Deputy Secretary General",
      phone: "+92 301 2345678",
      email: "dsg@ptmun2025.com",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Ali Rehman",
      role: "Director General",
      phone: "+92 302 3456789",
      email: "dg@ptmun2025.com",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Ayesha Ahmed",
      role: "Deputy Director General",
      phone: "+92 303 4567890",
      email: "ddg@ptmun2025.com",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Hassan Ali",
      role: "Charge d'Affaires",
      phone: "+92 304 5678901",
      email: "cda@ptmun2025.com",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Zara Sheikh",
      role: "Under Secretary General",
      phone: "+92 305 6789012",
      email: "usg@ptmun2025.com",
      image: "/api/placeholder/150/150"
    }
  ];

  return (
    <section id="secretariat" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Secretariat Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of experienced leaders who will guide 
            PTMUN VI 2025 to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secretariat.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-indigo-950 font-medium mb-4">{member.role}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {member.phone}
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {member.email}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
