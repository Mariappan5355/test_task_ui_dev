import { Facebook, Twitter, Instagram, Linkedin,  Globe, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="bg-gray-200 mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center text-blue-900">
      <div className="flex space-x-6 text-sm">
        <a href="#" className="hover:underline">Privacy policy</a>
        <a href="#" className="hover:underline">Terms & conditions</a>
        <a href="#" className="hover:underline">Contact us</a>
      </div>
      <div className="font-bold text-sm">
        All copyrights Reserved @MAI
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-blue-900">Social networks :</span>
        <a href="#" className="hover:text-blue-600"><Facebook className="w-5 h-5" /></a>
        <a href="#" className="hover:text-blue-600"><Twitter className="w-5 h-5" /></a>
        <a href="#" className="hover:text-blue-600"><Globe className="w-5 h-5" /></a> 
        <a href="#" className="hover:text-blue-600"><Instagram className="w-5 h-5" /></a>
        <a href="#" className="hover:text-blue-600"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="hover:text-blue-600"><Phone className="w-5 h-5" /></a>
      </div>
    </div>
  </footer>
);
