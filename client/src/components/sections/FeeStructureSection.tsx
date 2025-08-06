import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, Users, User } from 'lucide-react';

export const FeeStructureSection = () => {
  const delegateFees = [
    {
      type: "Early Bird",
      price: "PKR 3,500",
      deadline: "February 15, 2025",
      icon: <Clock className="w-6 h-6 text-green-600" />,
      savings: "Save PKR 1,000",
      popular: true
    },
    {
      type: "Regular",
      price: "PKR 4,500",
      deadline: "March 1, 2025",
      icon: <User className="w-6 h-6 text-blue-600" />,
      savings: null,
      popular: false
    }
  ];

  const delegationFees = [
    {
      type: "Small Delegation",
      subtitle: "(3-5 delegates)",
      price: "PKR 12,000",
      perDelegate: "PKR 2,400 per delegate",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      savings: "Save up to PKR 6,500"
    },
    {
      type: "Medium Delegation", 
      subtitle: "(6-10 delegates)",
      price: "PKR 20,000",
      perDelegate: "PKR 2,000 per delegate",
      icon: <Users className="w-6 h-6 text-orange-600" />,
      savings: "Save up to PKR 15,000"
    },
    {
      type: "Large Delegation",
      subtitle: "(11+ delegates)",
      price: "PKR 1,800 per delegate",
      perDelegate: "Best value for large groups",
      icon: <Users className="w-6 h-6 text-red-600" />,
      savings: "Maximum savings"
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
            Competitive and transparent pricing with early bird discounts and 
            special rates for school delegations.
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
                    <div className="text-3xl font-bold text-blue-600">{fee.price}</div>
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
                    <div className="text-2xl font-bold text-blue-600">{fee.price}</div>
                    <p className="text-sm text-gray-600">{fee.perDelegate}</p>
                    <Badge variant="outline" className="w-fit mx-auto text-green-600 border-green-600">
                      {fee.savings}
                    </Badge>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* What's Included */}
        <Card className="max-w-4xl mx-auto bg-blue-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-800">What's Included</CardTitle>
            <p className="text-blue-600">All registration fees include:</p>
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
          <Card className="max-w-2xl mx-auto border-yellow-300 bg-yellow-50">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-yellow-800 mb-2">Payment Terms</h4>
              <p className="text-sm text-yellow-700">
                • Full payment required to confirm registration<br/>
                • Bank transfer and online payment options available<br/>
                • No refunds after March 1, 2025<br/>
                • School purchase orders accepted for delegations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};