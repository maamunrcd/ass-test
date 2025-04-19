import { FeaturesListProps } from '@/types';
import FeatureItem from '@/components/FeatureItem';

const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => (
  <ul className="features-list">
    {features.map((feature, index) => (
      <FeatureItem key={index} {...feature} />
    ))}
  </ul>
);

export default FeaturesList; 