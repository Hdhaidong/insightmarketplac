import { Header } from "@/components/landing/Header";
import { Timeline } from "@/components/landing/Timeline";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const TimelinePageContent = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Timeline />
      </div>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const TimelinePage = () => {
  return (
    <ContactModalProvider>
      <TimelinePageContent />
    </ContactModalProvider>
  );
};

export default TimelinePage;
