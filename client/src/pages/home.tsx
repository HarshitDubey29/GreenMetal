import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Metrics from "@/components/metrics";
import About from "@/components/about";
import Technology from "@/components/technology";
import Services from "@/components/services";
import Impact from "@/components/impact";
import Partnerships from "@/components/partnerships";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Metrics />
      <About />
      <Technology />
      <Services />
      <Impact />
      <Partnerships />
      <Contact />
      <Footer />
    </div>
  );
}
