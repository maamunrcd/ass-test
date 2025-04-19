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
interface NavLinkProps extends NavItem {
    className?: string;
}