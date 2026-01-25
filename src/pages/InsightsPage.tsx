import { Header } from "@/components/landing/Header";
import { Insights } from "@/components/landing/Insights";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const InsightsPageContent = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Insights />
      </div>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const InsightsPage = () => {
  return (
    <ContactModalProvider>
      <InsightsPageContent />
    </ContactModalProvider>
  );
};

export default InsightsPage;
