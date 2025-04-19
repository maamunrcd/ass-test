import { PromoBannerProps } from '@/types/components/promo-banner';
import React from 'react';

const PromoBanner: React.FC<PromoBannerProps> = ({
  title,
  discount,
  message,
  icon = '🚀',
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`${className} promo flex items-center justify-center hover:shadow-lg gap-2.5 transition-shadow duration-300 cursor-pointer md:p-2.5 p-5`}
      onClick={onClick}
      role="banner"
    >
      <div className="promo-title flex gap-2.5 text-center md:text-left">
        {icon && <span className="text-2xl pr-2">{icon}</span>}
        <h3 className="font-extrabold text-secondary md:text-xl lg:text-2xl">
          {title}
          <span className="text-primary font-bold ml-2.5">{discount}— {message}</span>
        </h3>
      </div>
    </div>
  );
};

export default PromoBanner;
