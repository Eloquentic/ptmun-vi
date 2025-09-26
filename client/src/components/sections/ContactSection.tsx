
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
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone Numbers",
      details: [
        "Main Office: +92 42 XXX XXXX",
        "WhatsApp: +92 300 XXXXXXX",
        "Emergency: +92 301 XXXXXXX"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Addresses",
      details: [
        "General: info@ptmun2025.com",
        "Registration: register@ptmun2025.com",
        "Secretariat: secretariat@ptmun2025.com"
      ]
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Campus Location",
      details: [
        "Pak-Turk Maarif International Schools",
        "Raiwind Rd, Block D OPF Housing Scheme",
        "Lahore, 54000, Pakistan"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
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
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                            <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <Card className="mt-6 bg-secondary border-border">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
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
                    className="flex items-center p-3 bg-green-100 dark:bg-green-900/50 rounded-lg hover:bg-green-200 dark:hover:bg-green-900 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-green-800 dark:text-green-300 font-medium">WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors w-full text-left"
                  >
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    <span className="text-primary font-medium">Register Now</span>
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
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">Message Sent!</h3>
                    <p className="text-green-700 dark:text-green-400">Thank you for contacting us. We'll respond within 24 hours.</p>
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
            <p className="text-muted-foreground">Pak-Turk Maarif International Schools, Raiwind Rd, Block D OPF Housing Scheme, Lahore, 54000</p>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.7454903694297!2d74.23012377472196!3d31.421137552039713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901ce803df415%3A0x31fe5d4357ddb410!2sPak-Turk%20Maarif%20International%20Schools%20and%20Colleges%20Lahore%20Boys%20Campus!5e0!3m2!1sen!2s!4v1755097658403!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pak-Turk Maarif International Schools Location"
                className="dark:grayscale dark:invert"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
