import { Metadata } from 'next';

import MainContent from '@/components/MainContent';

export const metadata: Metadata = {
  title: 'Fametonic - Grow Your Social Media Presence',
  description: 'Boost your social media presence with personalized insights and strategies.',
};

export default function Home() {
  return (
      <MainContent/>
  );
}
