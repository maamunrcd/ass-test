// types/index.ts
export interface Feature {
    icon: string;
    text: string;
}

export interface FeaturesListProps {
    features: Feature[];
}

interface NavItem {
    href: string;
    label: string;
}

// Prop types for components
interface LayoutProps {
    children: React.ReactNode;
}

interface FeatureItemProps extends Feature {
    key: number;
}

interface NavLinkProps extends NavItem {
    className?: string;
}