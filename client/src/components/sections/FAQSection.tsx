import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      question: "What is the dress code for PTMUN VI 2025?",
      answer: "The dress code is formal business attire. For men: suit and tie or traditional formal wear. For women: business suit, formal dress, or traditional formal wear with modest coverage. All attire should be professional and respectful of the diplomatic setting."
    },
    {
      category: "Eligibility",
      question: "Who can participate in PTMUN?",
      answer: "PTMUN is open to high school students (grades 9-12) and first-year university students. Participants must be enrolled in an educational institution and should have a genuine interest in international relations and diplomacy."
    },
    {
      category: "Registration",
      question: "How do I register for the conference?",
      answer: "You can register either as an individual delegate or as part of a school delegation using our online registration form. After submitting your form, you'll receive payment instructions and confirmation details via email."
    },
    {
      category: "Committees",
      question: "Can I choose my committee preference?",
      answer: "Yes, you can indicate your preferred committee during registration. However, committee assignments are made based on experience level, preferences, and availability. We'll do our best to accommodate your first choice."
    },
    {
      category: "Experience",
      question: "Do I need prior MUN experience to participate?",
      answer: "No prior MUN experience is required. We welcome beginners and provide resources to help you prepare. Our beginner-friendly committees like UNGA are perfect for first-time delegates."
    },
    {
      category: "Sessions",
      question: "How long are the committee sessions?",
      answer: "Committee sessions typically run for 2.5-3 hours each, with breaks. The full conference spans two days with multiple sessions, opening and closing ceremonies, plus social events."
    },
    {
      category: "Preparation",
      question: "What research materials will be provided?",
      answer: "After registration confirmation, you'll receive a study guide with background information, position paper guidelines, and committee-specific resources. Additional materials will be available on our conference portal."
    },
    {
      category: "Awards",
      question: "What awards are given at PTMUN?",
      answer: "We recognize outstanding delegates with awards including Best Delegate, Outstanding Delegate, Honorable Mention, and Best Position Paper. Special awards are also given for diplomacy and research excellence."
    },
    {
      category: "Logistics",
      question: "Is accommodation provided?",
      answer: "Accommodation is not included in the registration fee, but we can provide a list of recommended hotels near the venue with special rates for PTMUN participants."
    },
    {
      category: "Food",
      question: "Are meals included in the registration?",
      answer: "Yes, registration includes lunch and refreshments during both conference days, plus snacks during break periods. Special dietary requirements can be accommodated with advance notice."
    },
    {
      category: "Technology",
      question: "Can I bring electronic devices?",
      answer: "Yes, laptops and tablets are allowed for research and note-taking during sessions. However, mobile phones should be silenced during committee sessions. WiFi will be provided at the venue."
    },
    {
      category: "Payment",
      question: "What payment methods are accepted?",
      answer: "We accept bank transfers, online payments, and school purchase orders for delegations. Payment must be completed within 7 days of registration to confirm your spot."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about PTMUN VI 2025. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
            {categories.map((category) => (
              <div key={category} className="text-center">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  {category}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <CardTitle className="flex items-center justify-between text-lg">
                    <div className="flex items-center">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-3">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </CardTitle>
                </CardHeader>
                {openIndex === index && (
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Contact for More Questions */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Still Have Questions?
              </h3>
              <p className="text-blue-700 mb-4">
                Our team is here to help! Reach out to us for any additional 
                information about PTMUN VI 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </button>
                <a 
                  href="mailto:info@ptmun2025.com"
                  className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};