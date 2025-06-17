import Banner from "./components/Banner";
import BenefitsOfUsing from "./components/BenefitsOfUsing";
import CardSection from "./components/CardSection";
import CustomerPanel from "./components/CustomerPanel";
import Footer from "./components/Footer";
import MobileOptimized from "./components/MobileOptimized";
import OrderSection from "./components/OrderSection";
import SEOSection from "./components/SEOSection";
import TestimonialSlider from "./components/TestimonialSlider";

export default function Home() {
  return (
    <section>
      <header>
        <Banner />
      </header>
      <main>
        <section>
          <CustomerPanel />
        </section>
        <section>
          <CardSection />
        </section>
        <section>
          <BenefitsOfUsing />
        </section>
        <section>
          <MobileOptimized />
        </section>
        <section>
          <SEOSection />
        </section>
        <section className="bg-white min-h-screen flex items-center justify-center">
          <TestimonialSlider />
        </section>
        <section>
          <OrderSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
