import Logo from "./logo";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo variant="dark" className="h-8 w-auto mb-4" />
            <p className="text-gray-300 mb-4">
              Leading India's sustainable e-waste revolution through advanced technology and ethical practices.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="text-green-primary hover:text-white cursor-pointer h-6 w-6" />
              <Twitter className="text-green-primary hover:text-white cursor-pointer h-6 w-6" />
              <Instagram className="text-green-primary hover:text-white cursor-pointer h-6 w-6" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-green-primary">Metal Recovery</a></li>
              <li><a href="#services" className="hover:text-green-primary">EPR Certificates</a></li>
              <li><a href="#services" className="hover:text-green-primary">Data Destruction</a></li>
              <li><a href="#services" className="hover:text-green-primary">Recycled Plastics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-green-primary">About Us</a></li>
              <li><a href="#technology" className="hover:text-green-primary">Technology</a></li>
              <li><a href="#partnerships" className="hover:text-green-primary">Partnerships</a></li>
              <li><a href="#contact" className="hover:text-green-primary">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-primary">Compliance Guide</a></li>
              <li><a href="#technology" className="hover:text-green-primary">Process Documentation</a></li>
              <li><a href="#impact" className="hover:text-green-primary">Sustainability Report</a></li>
              <li><a href="#contact" className="hover:text-green-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 GreenByte Solutions. All rights reserved. | Compliant with India's E-Waste (Management) Rules 2022</p>
        </div>
      </div>
    </footer>
  );
}
