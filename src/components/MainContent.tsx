import { features } from '@/constants/features';

import FeaturesList from '@/components/FeaturesList';
import PhoneDisplay from '@/components/PhoneDisplay';

const MainContent: React.FC = () => (
  <main className="container">
    <section className="hero flex flex-col md:flex-row gap-2 relative">
      <div className="hero-content flex flex-col py-0 md:py-16 z-20 w-full md:w-[55%] md:order-1 order-1 -mt-[50px] md:mt-0">
        <div className='hero-content-list py-2.5'>
          <h1 className="hero-content-title text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center md:text-left">
              Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h2 className="hero-content-subtitle text-2xl md:text-3xl lg:text-4xl text-secondary font-bold py-2 text-center md:text-left">
            Discover your way to success with Fametonic:
          </h2>
          <FeaturesList features={features} />
        </div>
        <div className="feature-action flex md:inline-flex flex-col gap-2.5 justify-center items-center md:items-center py-7 order-3 md:order-2">
          <button
            type="button"
            className="text-white font-medium rounded-lg text-xl uppercase px-11 py-2 h-[40px]"
          >
            Get Started
            <span className="arrow relative inline-block pl-2.5" />
          </button>
          <p className="text-xs text-white font-figtree">1-minute quiz for personalized Insights</p>
        </div>
        <footer className="flex flex-col gap-3 text-center md:text-left order-2 md:order-3">
          <p className="text-xs font-medium font-figtree">
            By clicking &#34;Get Started&#34;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
          </p>
          <p className="text- font-medium font-figtree copyright">Fametonic 2025 ©All Rights Reserved.</p>
        </footer>
      </div>
      <div className="hero-image z-0 md:absolute md:-right-[10%] right-0 relative order-0">
        <PhoneDisplay />
      </div>
    </section>
  </main>
);

export default MainContent;
