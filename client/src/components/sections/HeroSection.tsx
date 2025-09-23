
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/ui/CountdownTimer';

export const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full py-16">
        <div className="mb-6">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 max-w-full">
            <span className="text-white/90 text-sm">Pak-Turk Maarif International Schools - Lahore</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
            PTMUN <span className="text-yellow-400">VI</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-200 mb-2">
            Model United Nations 2025
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto px-4">
            Empowering Youth Through Diplomacy, Education, and Global Understanding
          </p>
        </div>

        <div className="mb-6">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-full">
            <p className="text-white/90 text-lg mb-2">Event Dates</p>
            <p className="text-xl sm:text-2xl font-bold text-yellow-400">November 28-30, 2025</p>
            <p className="text-sm text-white/70 mt-1">(Tentative - Final dates to be confirmed)</p>
          </div>
        </div>

        <div className="mb-6 overflow-x-auto">
          <CountdownTimer targetDate="2025-11-28T09:00:00" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
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
            className="border-white text-white bg-transparent hover:bg-white hover:text-blue-900 transition-colors"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
