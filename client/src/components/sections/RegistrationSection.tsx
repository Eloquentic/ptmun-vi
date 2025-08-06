import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Users, CheckCircle } from 'lucide-react';

export const RegistrationSection = () => {
  const [registrationType, setRegistrationType] = React.useState<'individual' | 'delegation' | null>(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    grade: '',
    committee: '',
    experience: '',
    dietary: '',
    emergencyContact: '',
    emergencyPhone: '',
    terms: false
  });

  const [submitted, setSubmitted] = React.useState(false);

  const committees = [
    "UN Commission on the Status of Women (UNCSW)",
    "UN Security Council (UNSC)", 
    "UN General Assembly (UNGA)",
    "International Court of Justice x Crisis (ICJ x CRISIS)",
    "Pakistan National Assembly (PNA)",
    "UN Human Rights Council (UNHRC)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', { registrationType, ...formData });
    setSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section id="registration" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-green-200">
            <CardContent className="pt-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-green-800 mb-4">Registration Successful!</h2>
              <p className="text-green-700 mb-4">
                Thank you for registering for PTMUN VI 2025. You will receive a confirmation 
                email shortly with payment instructions and further details.
              </p>
              <p className="text-sm text-green-600">
                Reference Number: PTMUN2025-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Registration</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your spot at PTMUN VI 2025. Choose between individual delegate 
            registration or school delegation registration.
          </p>
        </div>

        {!registrationType && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card 
                className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-500"
                onClick={() => setRegistrationType('individual')}
              >
                <CardHeader className="text-center">
                  <User className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <CardTitle className="text-2xl">Individual Delegate</CardTitle>
                  <p className="text-gray-600">Register as a single participant</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Personal registration</li>
                    <li>• Choose your preferred committee</li>
                    <li>• Early bird discounts available</li>
                    <li>• Perfect for independent delegates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card 
                className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-purple-500"
                onClick={() => setRegistrationType('delegation')}
              >
                <CardHeader className="text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                  <CardTitle className="text-2xl">School Delegation</CardTitle>
                  <p className="text-gray-600">Register multiple delegates from your school</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Group discounts</li>
                    <li>• Bulk registration process</li>
                    <li>• Special delegation packages</li>
                    <li>• Faculty advisor support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {registrationType && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {registrationType === 'individual' ? <User className="w-5 h-5 mr-2" /> : <Users className="w-5 h-5 mr-2" />}
                  {registrationType === 'individual' ? 'Individual Delegate' : 'School Delegation'} Registration
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setRegistrationType(null)}
                  className="w-fit"
                >
                  Change Registration Type
                </Button>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="school">School/Institution *</Label>
                      <Input 
                        id="school"
                        required
                        value={formData.school}
                        onChange={(e) => handleInputChange('school', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="grade">Grade/Year *</Label>
                      <Input 
                        id="grade"
                        required
                        value={formData.grade}
                        onChange={(e) => handleInputChange('grade', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="committee">Preferred Committee *</Label>
                      <Select onValueChange={(value) => handleInputChange('committee', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select committee" />
                        </SelectTrigger>
                        <SelectContent>
                          {committees.map((committee) => (
                            <SelectItem key={committee} value={committee}>
                              {committee}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Previous MUN Experience</Label>
                    <Select onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No previous experience</SelectItem>
                        <SelectItem value="beginner">1-2 conferences</SelectItem>
                        <SelectItem value="intermediate">3-5 conferences</SelectItem>
                        <SelectItem value="advanced">5+ conferences</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="dietary">Dietary Restrictions</Label>
                    <Input 
                      id="dietary"
                      placeholder="Please specify any dietary requirements"
                      value={formData.dietary}
                      onChange={(e) => handleInputChange('dietary', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                      <Input 
                        id="emergencyContact"
                        required
                        value={formData.emergencyContact}
                        onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                      <Input 
                        id="emergencyPhone"
                        required
                        value={formData.emergencyPhone}
                        onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions, code of conduct, and understand 
                      that payment is required to confirm my registration *
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={!formData.terms}
                  >
                    Submit Registration
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};