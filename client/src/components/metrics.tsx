export default function Metrics() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-primary mb-2">98%</div>
            <div className="text-gray-600">Recovery Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-primary mb-2">&gt;99%</div>
            <div className="text-gray-600">Purity Level</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-primary mb-2">6</div>
            <div className="text-gray-600">Precious Metals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-primary mb-2">2022</div>
            <div className="text-gray-600">E-Waste Rules Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
}
