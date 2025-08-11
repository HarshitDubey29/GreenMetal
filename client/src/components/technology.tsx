import { Settings, FlaskConical, Filter, Zap, Coins, Medal, Cpu, Battery, Atom, Circle } from "lucide-react";

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">Advanced Hydrometallurgical Technology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge process flow ensures maximum recovery rates while maintaining environmental responsibility.
          </p>
        </div>

        {/* Process Flow Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-green-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Settings className="text-green-primary h-8 w-8" />
            </div>
            <h3 className="font-semibold text-gray-dark mb-2">Mechanical Pre-treatment</h3>
            <p className="text-gray-600 text-sm">Dismantling and size reduction of electronic components</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FlaskConical className="text-blue-primary h-8 w-8" />
            </div>
            <h3 className="font-semibold text-gray-dark mb-2">Leaching Process</h3>
            <p className="text-gray-600 text-sm">Chemical dissolution of target metals from waste materials</p>
          </div>
          <div className="text-center">
            <div className="bg-green-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Filter className="text-green-primary h-8 w-8" />
            </div>
            <h3 className="font-semibold text-gray-dark mb-2">Solvent Extraction</h3>
            <p className="text-gray-600 text-sm">Selective separation and purification of metal solutions</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="text-blue-primary h-8 w-8" />
            </div>
            <h3 className="font-semibold text-gray-dark mb-2">Electrowinning</h3>
            <p className="text-gray-600 text-sm">Final recovery of pure metals through electrochemical processes</p>
          </div>
        </div>

        {/* Process Visualization */}
        <div className="bg-gradient-to-r from-green-primary/5 to-blue-primary/5 rounded-xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://pixabay.com/get/g54aa56194857326a3d907a10593102c9db87a2ad505f66263be740c967244837cc2c03a943ffb0c7ed2eee07f413389423427e25f6922cdc403b12304f8d634b_1280.jpg" 
                alt="Clean technology equipment" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-dark mb-6">Metals We Recover</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Coins className="text-orange-accent mb-2 h-6 w-6" />
                  <div className="font-semibold">Gold</div>
                  <div className="text-sm text-gray-600">High-value recovery</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Medal className="text-gray-400 mb-2 h-6 w-6" />
                  <div className="font-semibold">Silver</div>
                  <div className="text-sm text-gray-600">Electronic contacts</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Cpu className="text-orange-600 mb-2 h-6 w-6" />
                  <div className="font-semibold">Copper</div>
                  <div className="text-sm text-gray-600">Wiring & circuits</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Battery className="text-blue-primary mb-2 h-6 w-6" />
                  <div className="font-semibold">Lithium</div>
                  <div className="text-sm text-gray-600">Battery materials</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Atom className="text-purple-600 mb-2 h-6 w-6" />
                  <div className="font-semibold">Cobalt</div>
                  <div className="text-sm text-gray-600">Battery cathodes</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Circle className="text-green-600 mb-2 h-6 w-6" />
                  <div className="font-semibold">Nickel</div>
                  <div className="text-sm text-gray-600">Alloys & batteries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
