// types/index.ts
export interface Feature {
    icon: string;
    text: string;
}

export interface FeaturesListProps {
    features: Feature[];
}


export interface HeroSectionProps {
    title: string;
    subtitle: string;
    features: Feature[];
  }