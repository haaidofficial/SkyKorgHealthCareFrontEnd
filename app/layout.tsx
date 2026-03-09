import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import QuoteDrawer from '@/components/QuoteDrawer';
import { QuoteDrawerProvider } from '@/components/QuoteDrawerContext';

export const metadata = {
  title: "Medical Billing Company & Revenue Cycle Management (RCM) Services | SkyKorg HealthCare",
  description: "Looking for expert medical billing services? SkyKorg HealthCare offers comprehensive RCM solutions, coding, credentialing, AR recovery, and denial management to maximize your practice revenue.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QuoteDrawerProvider>          
          <NavBar />
          <main className="container-responsive">
            {children}
          </main>
          <Footer />
          <QuoteDrawer />
        </QuoteDrawerProvider>
      </body>
    </html>
  );
}
