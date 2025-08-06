import * as React from 'react';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/ui/CountdownTimer';

export const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-white/90 text-sm">PakTürk Maarif International Schools</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            PTMUN <span className="text-yellow-400">VI</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-2">
            Model United Nations 2025
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Empowering Youth Through Diplomacy, Education, and Global Understanding
          </p>
        </div>

        <div className="mb-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <p className="text-white/90 text-lg mb-2">Event Dates</p>
            <p className="text-2xl font-bold text-yellow-400">March 15-16, 2025</p>
          </div>
        </div>

        <CountdownTimer targetDate="2025-03-15T09:00:00" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8"
            onClick={scrollToRegistration}
          >
            Register Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-900"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};