import { Header } from "@/components/landing/Header";
import { Results } from "@/components/landing/Results";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const ResultsPageContent = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Results />
      </div>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const ResultsPage = () => {
  return (
    <ContactModalProvider>
      <ResultsPageContent />
    </ContactModalProvider>
  );
};

export default ResultsPage;
