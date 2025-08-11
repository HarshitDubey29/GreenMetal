import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-green-primary/10 to-blue-primary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-6">
              Advanced E-Waste Recycling & 
              <span className="text-green-primary"> Precious Metal Recovery</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Recovering gold, silver, copper, cobalt, nickel, and lithium from electronic waste with 
              <strong className="text-blue-primary"> 98% recovery rates</strong> and 
              <strong className="text-blue-primary"> {'>'} 99% purity</strong> using advanced hydrometallurgical methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-orange-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-accent/90 transition-colors"
                onClick={() => scrollToSection('contact')}
              >
                Get EPR Certificate
              </Button>
              <Button 
                variant="outline"
                className="border border-green-primary text-green-primary px-8 py-3 rounded-lg font-semibold hover:bg-green-primary hover:text-white transition-colors"
                onClick={() => scrollToSection('technology')}
              >
                View Our Process
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Advanced e-waste recycling facility" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-primary/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
