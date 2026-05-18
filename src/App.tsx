import Hero from "./components/landing/Hero";
import Pain from "./components/landing/Pain";
import BehaviorShift from "./components/landing/BehaviorShift";
import Help from "./components/landing/Help";
import SocialProof from "./components/landing/SocialProof";
import Market from "./components/landing/Market";
import Faq from "./components/landing/Faq";
import FinalCta from "./components/landing/FinalCta";
import FloatingWhatsApp from "./components/landing/FloatingWhatsApp";
import { useAnalytics } from "./hooks/use-analytics";

export default function App() {
  useAnalytics();
  return (
    <main className="bg-bg text-ink">
      <Hero />
      <Pain />
      <BehaviorShift />
      <Help />
      <SocialProof />
      <Market />
      <Faq />
      <FinalCta />
      <FloatingWhatsApp />
      <footer className="border-t border-line py-8 text-center text-xs tracking-wider text-ink-muted uppercase">
        © {new Date().getFullYear()} — Todos os direitos reservados
      </footer>
    </main>
  );
}
