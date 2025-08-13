import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Users, CheckCircle, AlertCircle } from 'lucide-react';

export const RegistrationSection = () => {
  const [registrationType, setRegistrationType] = React.useState<'individual' | 'delegation' | null>(null);
  const [individualFormData, setIndividualFormData] = React.useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    preferredCommittee: '',
    munExperience: '',
    dietaryRestrictions: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    terms: false
  });

  const [delegationFormData, setDelegationFormData] = React.useState({
    institution: '',
    delegationName: '',
    headDelegateName: '',
    headDelegateEmail: '',
    headDelegateWhatsApp: '',
    delegate2Name: '',
    delegate3Name: '',
    delegate4Name: '',
    delegate5Name: '',
    delegate6Name: '',
    terms: false
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState<string[]>([]);

  const committees = [
    "UN Commission on the Status of Women (UNCSW)",
    "UN Security Council (UNSC)", 
    "UN General Assembly (UNGA)",
    "International Court of Justice x Crisis (ICJ x CRISIS)",
    "Pakistan National Assembly (PNA)",
    "UN Human Rights Council (UNHRC)"
  ];

  const experienceLevels = [
    "No previous experience",
    "1-2 conferences",
    "3-5 conferences",
    "5+ conferences"
  ];

  const validateIndividualForm = () => {
    const newErrors: string[] = [];
    
    if (!individualFormData.fullName.trim()) newErrors.push("Full Name is required");
    if (!individualFormData.email.trim()) newErrors.push("Email Address is required");
    if (!individualFormData.whatsappNumber.trim()) newErrors.push("WhatsApp Number is required");
    if (!individualFormData.preferredCommittee) newErrors.push("Preferred Committee is required");
    if (!individualFormData.munExperience) newErrors.push("MUN Experience is required");
    if (!individualFormData.emergencyContactName.trim()) newErrors.push("Emergency Contact Name is required");
    if (!individualFormData.emergencyContactPhone.trim()) newErrors.push("Emergency Contact Phone is required");
    if (!individualFormData.terms) newErrors.push("You must agree to the terms and conditions");

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const validateDelegationForm = () => {
    const newErrors: string[] = [];
    
    if (!delegationFormData.institution.trim()) newErrors.push("Institution is required");
    if (!delegationFormData.delegationName.trim()) newErrors.push("Delegation Name is required");
    if (!delegationFormData.headDelegateName.trim()) newErrors.push("Head Delegate Name is required");
    if (!delegationFormData.headDelegateEmail.trim()) newErrors.push("Head Delegate Email is required");
    if (!delegationFormData.headDelegateWhatsApp.trim()) newErrors.push("Head Delegate WhatsApp is required");
    if (!delegationFormData.terms) newErrors.push("You must agree to the terms and conditions");

    // Count non-empty delegate names (head delegate + others)
    const delegateCount = 1 + [
      delegationFormData.delegate2Name,
      delegationFormData.delegate3Name,
      delegationFormData.delegate4Name,
      delegationFormData.delegate5Name,
      delegationFormData.delegate6Name
    ].filter(name => name.trim()).length;

    if (delegateCount < 2) newErrors.push("At least 2 delegates are required for a school delegation");

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleIndividualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateIndividualForm()) return;

    // Create mailto link
    const subject = encodeURIComponent("PTMUN VI 2025 - Individual Delegate Registration");
    const body = encodeURIComponent(`
Individual Delegate Registration - PTMUN VI 2025

Full Name: ${individualFormData.fullName}
Email Address: ${individualFormData.email}
WhatsApp Number: ${individualFormData.whatsappNumber}
Preferred Committee: ${individualFormData.preferredCommittee}
Previous MUN Experience: ${individualFormData.munExperience}
Dietary Restrictions: ${individualFormData.dietaryRestrictions || 'None'}
Emergency Contact Name: ${individualFormData.emergencyContactName}
Emergency Contact Phone: ${individualFormData.emergencyContactPhone}

Submitted on: ${new Date().toLocaleString()}
`);

    window.location.href = `mailto:faseehfayyaz@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleDelegationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateDelegationForm()) return;

    // Get all delegate names
    const delegates = [
      `Head Delegate: ${delegationFormData.headDelegateName}`,
      delegationFormData.delegate2Name ? `Delegate 2: ${delegationFormData.delegate2Name}` : '',
      delegationFormData.delegate3Name ? `Delegate 3: ${delegationFormData.delegate3Name}` : '',
      delegationFormData.delegate4Name ? `Delegate 4: ${delegationFormData.delegate4Name}` : '',
      delegationFormData.delegate5Name ? `Delegate 5: ${delegationFormData.delegate5Name}` : '',
      delegationFormData.delegate6Name ? `Delegate 6: ${delegationFormData.delegate6Name}` : ''
    ].filter(delegate => delegate).join('\n');

    // Create mailto link
    const subject = encodeURIComponent("PTMUN VI 2025 - School Delegation Registration");
    const body = encodeURIComponent(`
School Delegation Registration - PTMUN VI 2025

Institution: ${delegationFormData.institution}
Delegation Name: ${delegationFormData.delegationName}
Head Delegate Name: ${delegationFormData.headDelegateName}
Head Delegate Email: ${delegationFormData.headDelegateEmail}
Head Delegate WhatsApp: ${delegationFormData.headDelegateWhatsApp}

Delegates:
${delegates}

Note: Additional information will be requested from the head delegate if needed.

Submitted on: ${new Date().toLocaleString()}
`);

    window.location.href = `mailto:faseehfayyaz@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleIndividualInputChange = (field: string, value: string | boolean) => {
    setIndividualFormData(prev => ({ ...prev, [field]: value }));
    setErrors([]);
  };

  const handleDelegationInputChange = (field: string, value: string | boolean) => {
    setDelegationFormData(prev => ({ ...prev, [field]: value }));
    setErrors([]);
  };

  if (submitted) {
    return (
      <section id="registration" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-green-200">
            <CardContent className="pt-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-green-800 mb-4">Registration Submitted!</h2>
              <p className="text-green-700 mb-4">
                Your registration form has been opened in your email client. Please send the email 
                to complete your registration for PTMUN VI 2025.
              </p>
              <p className="text-sm text-green-600 mb-4">
                You will receive a confirmation email with payment instructions and further details.
              </p>
              <Button 
                onClick={() => {
                  setSubmitted(false);
                  setRegistrationType(null);
                  setIndividualFormData({
                    fullName: '', email: '', whatsappNumber: '', preferredCommittee: '',
                    munExperience: '', dietaryRestrictions: '', emergencyContactName: '',
                    emergencyContactPhone: '', terms: false
                  });
                  setDelegationFormData({
                    institution: '', delegationName: '', headDelegateName: '',
                    headDelegateEmail: '', headDelegateWhatsApp: '', delegate2Name: '',
                    delegate3Name: '', delegate4Name: '', delegate5Name: '',
                    delegate6Name: '', terms: false
                  });
                }}
                variant="outline"
              >
                Submit Another Registration
              </Button>
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
                    <li>• Group discounts available</li>
                    <li>• Maximum 6 delegates per school</li>
                    <li>• Bulk registration process</li>
                    <li>• Faculty advisor support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {registrationType === 'individual' && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Individual Delegate Registration
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    setRegistrationType(null);
                    setErrors([]);
                  }}
                  className="w-fit"
                >
                  Change Registration Type
                </Button>
              </CardHeader>
              <CardContent>
                {errors.length > 0 && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Please fix the following errors:</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          {errors.map((error, index) => (
                            <li key={index}>• {error}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                <form onSubmit={handleIndividualSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input 
                      id="fullName"
                      value={individualFormData.fullName}
                      onChange={(e) => handleIndividualInputChange('fullName', e.target.value)}
                      className={errors.some(e => e.includes('Full Name')) ? 'border-red-500' : ''}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={individualFormData.email}
                      onChange={(e) => handleIndividualInputChange('email', e.target.value)}
                      className={errors.some(e => e.includes('Email')) ? 'border-red-500' : ''}
                    />
                  </div>

                  <div>
                    <Label htmlFor="whatsappNumber">WhatsApp Number *</Label>
                    <Input 
                      id="whatsappNumber"
                      placeholder="+92 300 1234567"
                      value={individualFormData.whatsappNumber}
                      onChange={(e) => handleIndividualInputChange('whatsappNumber', e.target.value)}
                      className={errors.some(e => e.includes('WhatsApp')) ? 'border-red-500' : ''}
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredCommittee">Preferred Committee *</Label>
                    <Select onValueChange={(value) => handleIndividualInputChange('preferredCommittee', value)}>
                      <SelectTrigger className={errors.some(e => e.includes('Committee')) ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select your preferred committee" />
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

                  <div>
                    <Label htmlFor="munExperience">Previous MUN Experience *</Label>
                    <Select onValueChange={(value) => handleIndividualInputChange('munExperience', value)}>
                      <SelectTrigger className={errors.some(e => e.includes('Experience')) ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                    <Input 
                      id="dietaryRestrictions"
                      placeholder="Please specify any dietary requirements (optional)"
                      value={individualFormData.dietaryRestrictions}
                      onChange={(e) => handleIndividualInputChange('dietaryRestrictions', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emergencyContactName">Emergency Contact Name *</Label>
                      <Input 
                        id="emergencyContactName"
                        value={individualFormData.emergencyContactName}
                        onChange={(e) => handleIndividualInputChange('emergencyContactName', e.target.value)}
                        className={errors.some(e => e.includes('Emergency Contact Name')) ? 'border-red-500' : ''}
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyContactPhone">Emergency Contact Phone *</Label>
                      <Input 
                        id="emergencyContactPhone"
                        value={individualFormData.emergencyContactPhone}
                        onChange={(e) => handleIndividualInputChange('emergencyContactPhone', e.target.value)}
                        className={errors.some(e => e.includes('Emergency Contact Phone')) ? 'border-red-500' : ''}
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms"
                      checked={individualFormData.terms}
                      onCheckedChange={(checked) => handleIndividualInputChange('terms', checked as boolean)}
                      className={errors.some(e => e.includes('terms')) ? 'border-red-500' : ''}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to the terms and conditions, code of conduct, and understand 
                      that payment is required to confirm my registration *
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Individual Registration
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {registrationType === 'delegation' && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  School Delegation Registration
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    setRegistrationType(null);
                    setErrors([]);
                  }}
                  className="w-fit"
                >
                  Change Registration Type
                </Button>
                <p className="text-sm text-gray-600">
                  Maximum 6 delegates per school. Additional information will be requested 
                  from head delegates privately if needed.
                </p>
              </CardHeader>
              <CardContent>
                {errors.length > 0 && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Please fix the following errors:</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          {errors.map((error, index) => (
                            <li key={index}>• {error}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                <form onSubmit={handleDelegationSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="institution">Institution *</Label>
                    <Input 
                      id="institution"
                      placeholder="Name of your school/institution"
                      value={delegationFormData.institution}
                      onChange={(e) => handleDelegationInputChange('institution', e.target.value)}
                      className={errors.some(e => e.includes('Institution')) ? 'border-red-500' : ''}
                    />
                  </div>

                  <div>
                    <Label htmlFor="delegationName">Delegation Name *</Label>
                    <Input 
                      id="delegationName"
                      placeholder="e.g., LGS Delegation, Beaconhouse Team"
                      value={delegationFormData.delegationName}
                      onChange={(e) => handleDelegationInputChange('delegationName', e.target.value)}
                      className={errors.some(e => e.includes('Delegation Name')) ? 'border-red-500' : ''}
                    />
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-4">Head Delegate Information</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="headDelegateName">Head Delegate Name *</Label>
                        <Input 
                          id="headDelegateName"
                          value={delegationFormData.headDelegateName}
                          onChange={(e) => handleDelegationInputChange('headDelegateName', e.target.value)}
                          className={errors.some(e => e.includes('Head Delegate Name')) ? 'border-red-500' : ''}
                        />
                      </div>

                      <div>
                        <Label htmlFor="headDelegateEmail">Head Delegate Email *</Label>
                        <Input 
                          id="headDelegateEmail"
                          type="email"
                          value={delegationFormData.headDelegateEmail}
                          onChange={(e) => handleDelegationInputChange('headDelegateEmail', e.target.value)}
                          className={errors.some(e => e.includes('Head Delegate Email')) ? 'border-red-500' : ''}
                        />
                      </div>

                      <div>
                        <Label htmlFor="headDelegateWhatsApp">Head Delegate WhatsApp Number *</Label>
                        <Input 
                          id="headDelegateWhatsApp"
                          placeholder="+92 300 1234567"
                          value={delegationFormData.headDelegateWhatsApp}
                          onChange={(e) => handleDelegationInputChange('headDelegateWhatsApp', e.target.value)}
                          className={errors.some(e => e.includes('Head Delegate WhatsApp')) ? 'border-red-500' : ''}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-4">Additional Delegates (Optional - Up to 5 more)</h4>
                    
                    <div className="space-y-3">
                      {[2, 3, 4, 5, 6].map((num) => (
                        <div key={num}>
                          <Label htmlFor={`delegate${num}Name`}>Delegate {num} Name</Label>
                          <Input 
                            id={`delegate${num}Name`}
                            placeholder={`Name of delegate ${num} (optional)`}
                            value={delegationFormData[`delegate${num}Name` as keyof typeof delegationFormData] as string}
                            onChange={(e) => handleDelegationInputChange(`delegate${num}Name`, e.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 border-t pt-4">
                    <Checkbox 
                      id="delegationTerms"
                      checked={delegationFormData.terms}
                      onCheckedChange={(checked) => handleDelegationInputChange('terms', checked as boolean)}
                      className={errors.some(e => e.includes('terms')) ? 'border-red-500' : ''}
                    />
                    <Label htmlFor="delegationTerms" className="text-sm leading-relaxed">
                      I agree to the terms and conditions, code of conduct on behalf of our delegation, 
                      and understand that payment is required to confirm our registration. Additional 
                      information may be requested from the head delegate if needed. *
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit School Delegation Registration
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