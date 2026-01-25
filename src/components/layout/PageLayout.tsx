import { ReactNode } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

interface PageLayoutProps {
  children: ReactNode;
  /** Whether to add top padding for fixed header (default: true) */
  withHeaderPadding?: boolean;
  /** Whether to include the header (default: true) */
  withHeader?: boolean;
  /** Whether to include the footer (default: true) */
  withFooter?: boolean;
  /** Custom className for the main wrapper */
  className?: string;
}

const PageLayoutContent = ({ 
  children, 
  withHeaderPadding = true,
  withHeader = true,
  withFooter = true,
  className = ""
}: PageLayoutProps) => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className={`min-h-screen ${className}`}>
      {withHeader && <Header />}
      <div className={withHeaderPadding && withHeader ? "pt-20" : ""}>
        {children}
      </div>
      {withFooter && <Footer />}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export const PageLayout = ({ 
  children, 
  withHeaderPadding = true,
  withHeader = true,
  withFooter = true,
  className = ""
}: PageLayoutProps) => {
  return (
    <ContactModalProvider>
      <PageLayoutContent 
        withHeaderPadding={withHeaderPadding}
        withHeader={withHeader}
        withFooter={withFooter}
        className={className}
      >
        {children}
      </PageLayoutContent>
    </ContactModalProvider>
  );
};

/** 
 * Hook to access the contact modal from within PageLayout.
 * Use this in child components to open/close the contact modal.
 */
export { useContactModal } from "@/contexts/ContactModalContext";
