import Image from 'next/image';

const PhoneDisplay: React.FC = () => (
  <div className="phone-mockup">
    <div className="hidden md:block">
      <Image src="/images/banner-desktop.jpg" alt="App preview" width={666} height={679} />
    </div>
    <div className="flex md:hidden items-center justify-center">
      <Image src="/images/banner-mobile.png" alt="App preview" width={390} height={426} />
    </div>
  </div>
);

export default PhoneDisplay; 