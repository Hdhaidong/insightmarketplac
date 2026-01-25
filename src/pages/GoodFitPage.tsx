import { Header } from "@/components/landing/Header";
import { GoodFit } from "@/components/landing/GoodFit";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const GoodFitPageContent = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <GoodFit />
      </div>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const GoodFitPage = () => {
  return (
    <ContactModalProvider>
      <GoodFitPageContent />
    </ContactModalProvider>
  );
};

export default GoodFitPage;
