import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      school: "Lahore Grammar School",
      year: "PTMUN V 2024",
      rating: 5,
      quote: "PTMUN was a life-changing experience. The quality of debates and the professionalism of the secretariat made it unforgettable. I learned so much about diplomacy and made friends from all over Pakistan.",
      committee: "UNSC"
    },
    {
      name: "Hassan Ali",
      school: "Karachi American School",
      year: "PTMUN IV 2023",
      rating: 5,
      quote: "The cultural events at PTMUN were incredible! The Qawwali night was a beautiful celebration of our heritage. The conference perfectly balanced serious committee work with amazing social experiences.",
      committee: "UNGA"
    },
    {
      name: "Fatima Khan",
      school: "International School of Islamabad",
      year: "PTMUN V 2024",
      rating: 5,
      quote: "As a first-time delegate, I was nervous, but the chairs were so supportive. PTMUN helped me discover my passion for international relations. I'm already excited for PTMUN VI!",
      committee: "UNHRC"
    },
    {
      name: "Ahmed Raza",
      school: "Beaconhouse School System",
      year: "PTMUN III 2022",
      rating: 5,
      quote: "Three years later, I still cherish the memories from PTMUN. It taught me public speaking, critical thinking, and gave me confidence. The secretariat's dedication to excellence shows in every detail.",
      committee: "ICJ"
    },
    {
      name: "Ayesha Malik",
      school: "The City School",
      year: "PTMUN V 2024", 
      rating: 5,
      quote: "The Press and Media experience at PTMUN was fantastic. Covering the conference from a journalist's perspective gave me unique insights into both media and diplomacy. Highly recommended!",
      committee: "PNA"
    },
    {
      name: "Omar Sheikh",
      school: "Aitchison College",
      year: "PTMUN IV 2023",
      rating: 5,
      quote: "PTMUN's commitment to authenticity and educational value is unmatched. The research required, the quality of debate, and the networking opportunities make it a must-attend conference.",
      committee: "UNCSW"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Delegates Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from past PTMUN participants about their transformative experiences 
            and the lasting impact of our conferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardContent className="pt-6 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-600 mb-6 flex-1 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.school}</div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-blue-600 font-medium">{testimonial.year}</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {testimonial.committee}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16">
          <Card className="bg-blue-600 text-white">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-blue-100">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4.9/5</div>
                  <div className="text-blue-100">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-blue-100">Would Recommend</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">85%</div>
                  <div className="text-blue-100">Return Delegates</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Ready to Create Your Own PTMUN Story?</h3>
          <p className="text-gray-600 mb-6">
            Join hundreds of students who have transformed their perspectives through PTMUN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Register for PTMUN VI
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};