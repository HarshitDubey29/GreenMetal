import { Handshake, Truck, TrendingUp, Users, GraduationCap, Heart } from "lucide-react";

export default function Partnerships() {
  return (
    <section id="partnerships" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">Strategic Partnerships</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with industry leaders to build a sustainable e-waste ecosystem across India.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-dark mb-6">OEM Partnerships</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We work directly with original equipment manufacturers to provide comprehensive take-back programs 
              and EPR compliance solutions, ensuring responsible end-of-life management for electronic products.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Handshake className="text-green-primary mr-3 h-5 w-5" />
                <span>Direct manufacturer partnerships</span>
              </div>
              <div className="flex items-center">
                <Truck className="text-green-primary mr-3 h-5 w-5" />
                <span>Comprehensive logistics solutions</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="text-green-primary mr-3 h-5 w-5" />
                <span>Real-time tracking and reporting</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Sustainable recycling partnership collaboration" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <h3 className="text-2xl font-bold text-gray-dark mb-6">Community Integration</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our inclusive approach integrates informal sector collection networks, providing training, 
              fair compensation, and formal employment opportunities to create a more equitable recycling ecosystem.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Users className="text-blue-primary mr-3 h-5 w-5" />
                <span>Informal sector integration</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="text-blue-primary mr-3 h-5 w-5" />
                <span>Skills training programs</span>
              </div>
              <div className="flex items-center">
                <Heart className="text-blue-primary mr-3 h-5 w-5" />
                <span>Fair trade practices</span>
              </div>
            </div>
          </div>
          <div className="lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Community integration in recycling processes" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
