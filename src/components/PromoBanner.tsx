import React from 'react';

import { PromoBannerProps } from '@/types/components/promo-banner';

const PromoBanner: React.FC<PromoBannerProps> = ({
  title,
  discount,
  message,
  icon = '🚀',
  className = '',
}) => {

  return (
    <div
      className={`${className} promo flex items-center justify-center hover:shadow-lg gap-2.5 transition-shadow duration-300 cursor-pointer md:p-2.5 p-5`}
      role="button"
      tabIndex={0}
    >
      <div className="promo-title flex gap-2.5 text-center md:text-left">
        {icon && <span className="text-2xl pr-2">{icon}</span>}
        <h3 className="font-extrabold md:text-xl lg:text-2xl text-secondary">
          {title}
          <span className="text-white font-bold ml-2.5">{discount}— {message}</span>
        </h3>
      </div>
    </div>
  );
};

export default PromoBanner;
