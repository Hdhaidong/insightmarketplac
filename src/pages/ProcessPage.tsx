import { Header } from "@/components/landing/Header";
import { Process } from "@/components/landing/Process";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const ProcessPageContent = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Process />
      </div>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const ProcessPage = () => {
  return (
    <ContactModalProvider>
      <ProcessPageContent />
    </ContactModalProvider>
  );
};

export default ProcessPage;
