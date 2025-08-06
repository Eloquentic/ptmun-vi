import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Users, Star, Calendar } from 'lucide-react';

export const SocialEventsSection = () => {
  const events = [
    {
      icon: <Music className="w-8 h-8 text-purple-600" />,
      title: "Qawwali Night",
      date: "November 28, 2025 - 7:00 PM",
      description: "Experience the soulful melodies of traditional Qawwali music performed by renowned artists. A cultural evening celebrating South Asian heritage.",
      highlights: ["Live Qawwali performance", "Traditional refreshments", "Cultural networking"]
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Delegates Concert",
      date: "November 30, 2025 - 8:00 PM",
      description: "Showcase your talents! An evening where delegates can perform, from musical acts to poetry, celebrating the diverse talents of our participants.",
      highlights: ["Open mic performances", "Talent showcase", "Awards ceremony"]
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Cultural Exchange Fair",
      date: "November 29, 2025 - 12:00 PM",
      description: "Explore different cultures through interactive booths, traditional foods, and cultural displays set up by participating schools.",
      highlights: ["International cuisine", "Cultural displays", "Traditional games"]
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Social Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond the committee sessions, enjoy a rich program of cultural and 
            social events designed to enhance your PTMUN experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{event.icon}</div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Highlights:</h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Networking Opportunities</h3>
              <p className="text-gray-600 mb-4">
                All social events are designed to facilitate meaningful connections 
                between delegates, chairs, and international guests. These informal 
                settings provide the perfect opportunity to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2 text-gray-600">
                  <li>• Build lasting friendships</li>
                  <li>• Practice diplomatic skills</li>
                  <li>• Share cultural experiences</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• Expand your global network</li>
                  <li>• Learn about different perspectives</li>
                  <li>• Celebrate achievements together</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};