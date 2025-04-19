import { Feature } from '@/types';

const FeatureItem: React.FC<Feature> = ({ icon, text }) => (
  <li className="feature-item flex gap-1.5 py-1.5">
    <span className="feature-icon">{icon}</span>
    <p className="feature-text text-lg md:text-xl lg:text-base font-medium font-figtree text-white">{text}</p>
  </li>
);

export default FeatureItem; 