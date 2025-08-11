import { Globe, Users, Scale, Leaf, Droplets, Sun, Infinity } from "lucide-react";

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">ESG Impact & Sustainability</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving positive environmental, social, and governance outcomes through responsible e-waste management.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-green-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Globe className="text-green-primary h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-dark mb-4">Environmental</h3>
            <p className="text-gray-600 mb-4">Reducing electronic waste in landfills and minimizing environmental toxicity through responsible processing.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-primary">50,000+</div>
              <div className="text-sm text-gray-600">Tons of E-Waste Processed</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Users className="text-blue-primary h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-dark mb-4">Social</h3>
            <p className="text-gray-600 mb-4">Integrating informal sector workers and creating sustainable livelihoods in the circular economy.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-primary">2,500+</div>
              <div className="text-sm text-gray-600">Jobs Created</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-orange-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Scale className="text-orange-accent h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-dark mb-4">Governance</h3>
            <p className="text-gray-600 mb-4">Maintaining highest standards of compliance, transparency, and ethical business practices.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-accent">100%</div>
              <div className="text-sm text-gray-600">Regulatory Compliance</div>
            </div>
          </div>
        </div>
        
        {/* Sustainability Commitments */}
        <div className="bg-gradient-to-r from-green-primary/5 to-blue-primary/5 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-dark mb-8 text-center">Our Sustainability Commitments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Leaf className="text-green-primary h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Carbon Neutral</div>
              <div className="text-sm text-gray-600">Operations by 2025</div>
            </div>
            <div className="text-center">
              <Droplets className="text-blue-primary h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Zero Discharge</div>
              <div className="text-sm text-gray-600">Water treatment systems</div>
            </div>
            <div className="text-center">
              <Sun className="text-orange-accent h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Renewable Energy</div>
              <div className="text-sm text-gray-600">100% by 2026</div>
            </div>
            <div className="text-center">
              <Infinity className="text-green-primary h-8 w-8 mx-auto mb-3" />
              <div className="font-semibold">Circular Economy</div>
              <div className="text-sm text-gray-600">Closed-loop systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
