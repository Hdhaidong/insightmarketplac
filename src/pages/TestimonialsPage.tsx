import { Header } from "@/components/landing/Header";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const TestimonialsPageContent = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Testimonials />
      </div>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const TestimonialsPage = () => {
  return (
    <ContactModalProvider>
      <TestimonialsPageContent />
    </ContactModalProvider>
  );
};

export default TestimonialsPage;
