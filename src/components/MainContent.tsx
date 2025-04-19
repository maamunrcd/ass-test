import { features } from '@/constants/features';
import { heroContent } from '@/constants/hero';

import HeroSection from '@/components/HeroSection';
import PhoneDisplay from '@/components/PhoneDisplay';

const MainContent: React.FC = () => (
  <main className="container">
    <section className="hero flex flex-col md:flex-row gap-2 relative">
      <HeroSection
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        features={features}
      />
      <div className="hero-image z-0 md:absolute md:-right-[10%] right-0 relative order-0">
        <PhoneDisplay />
      </div>
    </section>
  </main>
);

export default MainContent;
