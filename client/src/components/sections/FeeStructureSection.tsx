
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, Users, User } from 'lucide-react';

export const FeeStructureSection = () => {
  const delegateFees = [
    {
      type: "Early Bird",
      price: "PKR 3,500",
      deadline: "September 30, 2025",
      icon: <Clock className="w-6 h-6 text-green-600" />,
      savings: "Save PKR 1,000",
      popular: true
    },
    {
      type: "Regular",
      price: "PKR 4,500",
      deadline: "October 20, 2025",
      icon: <User className="w-6 h-6 text-primary" />,
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white dark:text-black">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-2">{fee.icon}</div>
                    <CardTitle className="text-xl">{fee.type} Registration</CardTitle>
                    <div className="text-3xl font-bold text-primary">{fee.price}</div>
                    {fee.savings && (
                      <Badge variant="outline" className="w-fit mx-auto text-green-600 border-green-600 dark:text-green-400 dark:border-green-400">
                        {fee.savings}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">Deadline: {fee.deadline}</p>
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
                    <p className="text-sm text-muted-foreground">{fee.subtitle}</p>
                    <div className="text-xl font-bold text-primary">{fee.price}</div>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">{fee.perDelegate}</p>
                    <p className="text-xs text-muted-foreground">{fee.totalPrice}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-8">
          <Card className="max-w-4xl mx-auto bg-yellow-50 dark:bg-yellow-950/30 border-yellow-300 dark:border-yellow-700">
            <CardHeader>
              <CardTitle className="text-yellow-800 dark:text-yellow-300 text-center">Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700 dark:text-yellow-400">
                <ul className="space-y-2">
                  <li>• Maximum 6 delegates per school delegation</li>
                  <li>• Each committee can accommodate 1 delegate per school</li>
                  <li>• Delegation rates apply only to registered schools</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Early bird discounts available until September 30</li>
                  <li>• All prices include social events and meals</li>
                  <li>• Payment required within 7 days of registration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What's Included */}
        <Card className="max-w-4xl mx-auto bg-secondary">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">What's Included</CardTitle>
            <p className="text-primary/80">All registration fees include:</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inclusions.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Card className="max-w-2xl mx-auto border-border bg-secondary">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-primary mb-2">Payment Terms</h4>
              <p className="text-sm text-muted-foreground">
                • Full payment required to confirm registration<br/>
                • Bank transfer and online payment options available<br/>
                • No refunds after October 20, 2025<br/>
                • School purchase orders accepted for delegations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
