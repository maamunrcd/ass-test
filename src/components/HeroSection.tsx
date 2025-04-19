import Link from 'next/link';

import { HeroSectionProps } from '@/types';

import FeaturesList from '@/components/FeaturesList';
import Footer from '@/components/Footer';


const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, features }) => (
  <div className="hero-content flex flex-col py-0 md:py-16 z-20 w-full md:w-[55%] md:order-1 order-1 -mt-[50px] md:mt-0">
    <div className='hero-content-list py-2.5'>
      <h1 className="hero-content-title text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center md:text-left">
        {title}
      </h1>
      <h2 className="hero-content-subtitle text-2xl md:text-3xl lg:text-4xl text-secondary font-bold py-2 text-center md:text-left">
        {subtitle}
      </h2>
      <FeaturesList features={features} />
    </div>
    <div className="feature-action flex md:inline-flex flex-col gap-2.5 justify-center items-center md:items-start py-5 order-3 md:order-2">
      <div className='flex flex-col items-center w-full md:w-auto'>
      <Link
        href="/quiz"
        className="bg-primary hover:bg-primary-hover shadow-[2px_2px_10px_#00E7F9] rounded-[10px] font-bold text-xl leading-6 text-white text-center py-2 px-10 h-[40px] w-full md:w-[313px] font-figtree"
      >
        Get Started
        <span className="arrow relative inline-block pl-2.5" />
      </Link>
      <p className="text-xs text-white font-figtree my-4">1-minute quiz for personalized Insights</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default HeroSection;