import { Header } from "@/components/landing/Header";
import { OmnichannelBenefits } from "@/components/landing/OmnichannelBenefits";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const OmnichannelPageContent = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <OmnichannelBenefits />
      </div>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const OmnichannelPage = () => {
  return (
    <ContactModalProvider>
      <OmnichannelPageContent />
    </ContactModalProvider>
  );
};

export default OmnichannelPage;
