import { Recycle, Leaf, Tag, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive e-waste management solutions tailored for modern businesses and regulatory compliance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Recycle className="text-green-primary h-6 w-6" />
            </div>
            <h3 className="font-semibold text-gray-dark mb-3">Metal Recovery</h3>
            <p className="text-gray-600 text-sm mb-4">Advanced extraction of precious metals from electronic waste with industry-leading recovery rates.</p>
            <Button 
              variant="ghost" 
              className="text-green-primary font-semibold text-sm hover:underline p-0 h-auto"
              onClick={scrollToContact}
            >
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Leaf className="text-blue-primary h-6 w-6" />
            </div>
            <h3 className="font-semibold text-gray-dark mb-3">Recycled Plastics</h3>
            <p className="text-gray-600 text-sm mb-4">High-quality plastic material recovery for sustainable manufacturing applications.</p>
            <Button 
              variant="ghost" 
              className="text-blue-primary font-semibold text-sm hover:underline p-0 h-auto"
              onClick={scrollToContact}
            >
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-accent/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Tag className="text-orange-accent h-6 w-6" />
            </div>
            <h3 className="font-semibold text-gray-dark mb-3">EPR Certificates</h3>
            <p className="text-gray-600 text-sm mb-4">Extended Producer Responsibility compliance and certification services for manufacturers.</p>
            <Button 
              variant="ghost" 
              className="text-orange-accent font-semibold text-sm hover:underline p-0 h-auto"
              onClick={scrollToContact}
            >
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gray-600/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="text-gray-600 h-6 w-6" />
            </div>
            <h3 className="font-semibold text-gray-dark mb-3">Data Destruction</h3>
            <p className="text-gray-600 text-sm mb-4">Secure data wiping and certified destruction services for sensitive electronic devices.</p>
            <Button 
              variant="ghost" 
              className="text-gray-600 font-semibold text-sm hover:underline p-0 h-auto"
              onClick={scrollToContact}
            >
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
