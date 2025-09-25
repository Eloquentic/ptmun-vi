import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Image as ImageIcon } from 'lucide-react';

export const GallerySection = () => {
  const galleryItems = [
    {
      type: 'image',
      title: 'PTMUN V Opening Ceremony',
      description: 'Grand opening with international guests',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      type: 'video',
      title: 'PTMUN V Highlights',
      description: '2024 conference highlights reel',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      type: 'image',
      title: 'Committee Sessions in Action',
      description: 'Delegates engaging in heated debates',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      type: 'image',
      title: 'Cultural Night Celebrations',
      description: 'Traditional performances and cultural exchange',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      type: 'video',
      title: 'Delegate Testimonials',
      description: 'Hear from past PTMUN participants',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      type: 'image',
      title: 'Awards Ceremony',
      description: 'Recognizing outstanding delegates',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      type: 'image',
      title: 'Networking Sessions',
      description: 'Building connections across borders',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      type: 'image',
      title: 'Secretariat Team in Action',
      description: 'Behind the scenes of conference organization',
      thumbnail: '/api/placeholder/400/300'
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<'all' | 'images' | 'videos'>('all');

  const filteredItems = galleryItems.filter(item => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'images') return item.type === 'image';
    if (selectedCategory === 'videos') return item.type === 'video';
    return true;
  });

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relive the memorable moments from past PTMUN conferences through 
            our collection of photos and videos.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
            >
              All Media
            </Button>
            <Button 
              variant={selectedCategory === 'images' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory('images')}
            >
              Photos
            </Button>
            <Button 
              variant={selectedCategory === 'videos' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory('videos')}
            >
              Videos
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image Placeholder</span>
                </div>
                
                {/* Overlay for videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                )}

                {/* Media Type Badge */}
                <div className="absolute top-2 right-2">
                  {item.type === 'video' ? (
                    <div className="bg-red-500 text-white p-1 rounded">
                      <Play className="w-3 h-3" />
                    </div>
                  ) : (
                    <div className="bg-indigo-950 text-white p-1 rounded">
                      <ImageIcon className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold text-blue-950 mb-4">
                Be Part of PTMUN VI 2025
              </h3>
              <p className="text-blue-950 mb-4">
                Create your own memorable moments at our upcoming conference. 
                Join hundreds of delegates from across Pakistan and beyond.
              </p>
              <Button 
                size="lg"
                onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Register Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Instagram Feed Notice */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full">
            <span className="mr-2">📸</span>
            <span className="font-medium">Follow @ptmun_official for live updates!</span>
          </div>
        </div>
      </div>
    </section>
  );
};
