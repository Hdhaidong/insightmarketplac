import { Header } from "@/components/landing/Header";
import { Services } from "@/components/landing/Services";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const ServicesPageContent = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const ServicesPage = () => {
  return (
    <ContactModalProvider>
      <ServicesPageContent />
    </ContactModalProvider>
  );
};

export default ServicesPage;
