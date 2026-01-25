import { Header } from "@/components/landing/Header";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const FAQPageContent = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <FAQ />
      </div>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const FAQPage = () => {
  return (
    <ContactModalProvider>
      <FAQPageContent />
    </ContactModalProvider>
  );
};

export default FAQPage;
