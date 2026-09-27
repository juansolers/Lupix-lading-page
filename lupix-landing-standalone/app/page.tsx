import Benefits from "./components/Benefits";
import CtaBanner from "./components/CtaBanner";
import Explainer from "./components/Explainer";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <CtaBanner />
        <SocialProof />
        <Explainer />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
