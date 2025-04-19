import React from "react";

interface PromoBannerProps {
    title: string;
    discount: string;
    message: string;
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export type { PromoBannerProps };