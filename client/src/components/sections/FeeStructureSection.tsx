import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, Users, User } from 'lucide-react';

export const FeeStructureSection = () => {
  const delegateFees = [
    {
      type: "Early Bird",
      price: "PKR 3,500",
      deadline: "October 15, 2025",
      icon: <Clock className="w-6 h-6 text-green-600" />,
      savings: "Save PKR 1,000",
      popular: true
    },
    {
      type: "Regular",
      price: "PKR 4,500",
      deadline: "November 15, 2025",
      icon: <User className="w-6 h-6 text-indigo-950" />,
      savings: null,
      popular: false
    }
  ];

  const delegationFees = [
    {
      type: "Small Delegation",
      subtitle: "(2-3 delegates)",
      price: "PKR 3,200 per delegate",
      perDelegate: "Save PKR 300 per delegate",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      totalPrice: "Total: PKR 6,400 - 9,600"
    },
    {
      type: "Medium Delegation", 
      subtitle: "(4-5 delegates)",
      price: "PKR 3,000 per delegate",
      perDelegate: "Save PKR 500 per delegate",
      icon: <Users className="w-6 h-6 text-orange-600" />,
      totalPrice: "Total: PKR 12,000 - 15,000"
    },
    {
      type: "Full Delegation",
      subtitle: "(6 delegates - Maximum)",
      price: "PKR 2,800 per delegate",
      perDelegate: "Save PKR 700 per delegate",
      icon: <Users className="w-6 h-6 text-red-600" />,
      totalPrice: "Total: PKR 16,800"
    }
  ];

  const inclusions = [
    "All committee sessions",
    "Opening and closing ceremonies",
    "Welcome kit with conference materials",
    "Lunch and refreshments",
    "Social events participation",
    "Certificate of participation",
    "Access to networking sessions",
    "Digital conference resources"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Fee Structure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Competitive pricing with early bird discounts and moderate group rates 
            for school delegations to support our quality social events program.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Individual Delegate Fees */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Individual Delegates</h3>
            <div className="space-y-6">
              {delegateFees.map((fee, index) => (
                <Card key={index} className={`relative ${fee.popular ? 'border-green-500 border-2' : ''}`}>
                  {fee.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-2">{fee.icon}</div>
                    <CardTitle className="text-xl">{fee.type} Registration</CardTitle>
                    <div className="text-3xl font-bold text-indigo-950">{fee.price}</div>
                    {fee.savings && (
                      <Badge variant="outline" className="w-fit mx-auto text-green-600 border-green-600">
                        {fee.savings}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">Deadline: {fee.deadline}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Delegation Fees */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">School Delegations</h3>
            <div className="space-y-6">
              {delegationFees.map((fee, index) => (
                <Card key={index}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-2">{fee.icon}</div>
                    <CardTitle className="text-lg">{fee.type}</CardTitle>
                    <p className="text-sm text-gray-600">{fee.subtitle}</p>
                    <div className="text-xl font-bold text-indigo-950">{fee.price}</div>
                    <p className="text-sm text-green-600 font-medium">{fee.perDelegate}</p>
                    <p className="text-xs text-gray-500">{fee.totalPrice}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-8">
          <Card className="max-w-4xl mx-auto bg-yellow-50 border-yellow-300">
            <CardHeader>
              <CardTitle className="text-yellow-800 text-center">Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
                <ul className="space-y-2">
                  <li>• Maximum 6 delegates per school delegation</li>
                  <li>• Each committee can accommodate 1 delegate per school</li>
                  <li>• Delegation rates apply only to registered schools</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Early bird discounts available until October 15</li>
                  <li>• All prices include social events and meals</li>
                  <li>• Payment required within 7 days of registration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What's Included */}
        <Card className="max-w-4xl mx-auto bg-blue-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-950">What's Included</CardTitle>
            <p className="text-indigo-950">All registration fees include:</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inclusions.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Card className="max-w-2xl mx-auto border-blue-300 bg-blue-50">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-blue-950 mb-2">Payment Terms</h4>
              <p className="text-sm text-blue-950">
                • Full payment required to confirm registration<br/>
                • Bank transfer and online payment options available<br/>
                • No refunds after November 15, 2025<br/>
                • School purchase orders accepted for delegations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
