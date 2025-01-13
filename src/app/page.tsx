import App from "@/components/App";
import Cars from "@/components/Cars";
import FeatureCar from "@/components/FeatureCar";
import Footer from "@/components/Footer";
import Header from "@/components/Header"
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import Sell from "@/components/Sell";


export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-t to-[#000812] from-[#013777] text-white">
    <Header />
    <Hero />
    </div>
    <Sell />
    <Cars />
    <FeatureCar />
    <Logo />
    <App />
    <Footer />
    </>
  );
}
