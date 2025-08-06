import * as React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CommitteesSection } from '@/components/sections/CommitteesSection';
import { SecretariatSection } from '@/components/sections/SecretariatSection';
import { CodeOfConductSection } from '@/components/sections/CodeOfConductSection';
import { SocialEventsSection } from '@/components/sections/SocialEventsSection';
import { FeeStructureSection } from '@/components/sections/FeeStructureSection';
import { RegistrationSection } from '@/components/sections/RegistrationSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CommitteesSection />
      <SecretariatSection />
      <CodeOfConductSection />
      <SocialEventsSection />
      <FeeStructureSection />
      <RegistrationSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};