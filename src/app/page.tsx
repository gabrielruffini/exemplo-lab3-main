import { Header } from "@/components/ui/header-2";
import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import EventManagement from "@/components/sections/EventManagement";
import WhyLab3 from "@/components/sections/WhyLab3";
import Plans from "@/components/sections/Plans";
import ConnectionDivider from "@/components/sections/ConnectionDivider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-x-clip selection:bg-[#ffd7a0]/30 selection:text-white relative bg-[#0a0c16] text-white"
    >
      <Header />
      <Hero />
      <Solutions />

      {/* Animated Connection Divider */}
      <ConnectionDivider />

      <EventManagement />
      <WhyLab3 />
      <Plans />
      <Footer />
    </main>
  );
}
