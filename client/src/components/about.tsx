import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">About GreenByte Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading India's transition to sustainable e-waste management through cutting-edge technology and ethical practices.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Electronic waste sorting facility" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-dark mb-6">Pioneering Sustainable Technology</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              GreenByte Solutions is at the forefront of India's e-waste revolution, combining advanced hydrometallurgical 
              processes with ethical sourcing practices. Our state-of-the-art facility processes electronic waste and 
              lithium-ion batteries to recover precious metals with unprecedented efficiency.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="text-green-primary mr-3 h-5 w-5" />
                <span>Compliance with India's E-Waste (Management) Rules 2022</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-primary mr-3 h-5 w-5" />
                <span>Extended Producer Responsibility (EPR) framework integration</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-primary mr-3 h-5 w-5" />
                <span>Partnership with OEM and bulk consumer networks</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-primary mr-3 h-5 w-5" />
                <span>Integration of informal sector collection networks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
