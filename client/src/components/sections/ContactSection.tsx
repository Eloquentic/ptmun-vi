import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, MessageSquare, Clock, CheckCircle } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone Numbers",
      details: [
        "Main Office: +92 51 XXX XXXX",
        "WhatsApp: +92 300 XXXXXXX",
        "Emergency: +92 301 XXXXXXX"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Addresses",
      details: [
        "General: info@ptmun2025.com",
        "Registration: register@ptmun2025.com",
        "Secretariat: secretariat@ptmun2025.com"
      ]
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Campus Location",
      details: [
        "PakTürk Maarif International Schools",
        "Islamabad Campus",
        "G-10/4, Islamabad, Pakistan"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 4:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const subjects = [
    "General Inquiry",
    "Registration Support",
    "Committee Information",
    "Payment Issues", 
    "Accommodation Help",
    "Technical Support",
    "Media and Press",
    "Sponsorship Opportunities"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about PTMUN VI 2025? We're here to help! 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <Card className="mt-6 bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">WhatsApp Chat</span>
                  </a>
                  <button 
                    onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors w-full text-left"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-800 font-medium">Register Now</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thank you for contacting us. We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input 
                          id="contact-name"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-email">Email Address *</Label>
                        <Input 
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-phone">Phone Number</Label>
                        <Input 
                          id="contact-phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-subject">Subject *</Label>
                        <Select onValueChange={(value) => handleInputChange('subject', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea 
                        id="contact-message"
                        required
                        rows={5}
                        placeholder="Please describe your inquiry in detail..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card>
          <CardHeader>
            <CardTitle>Find Us</CardTitle>
            <p className="text-gray-600">PakTürk Maarif International Schools, Islamabad Campus</p>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm">Interactive map would be embedded here</p>
                <p className="text-xs">G-10/4, Islamabad, Pakistan</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};