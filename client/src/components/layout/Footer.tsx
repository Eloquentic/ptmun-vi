
import * as React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/assets/logo.png" alt="PTMUN VI Logo" className="h-12 w-12" />
              <div>
                <h3 className="font-bold">PTMUN VI 2025</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Pak-Turk Maarif International Schools Model United Nations
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white">About PTMUN</a></li>
              <li><a href="#committees" className="hover:text-white">Committees</a></li>
              <li><a href="#registration" className="hover:text-white">Registration</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +92 42 XXX XXXX
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                ptmun@maarif.edu.pk
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Raiwind Rd, Block D OPF Housing Scheme, Lahore</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Pak-Turk Maarif International Schools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
