import React from 'react';
import LayoutWrapper from './LayoutWrapper';
import './globals.css';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GoogleTagManager } from '@next/third-parties/google';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Oasis Homes - Assisted Living Facility at 15116 Roxford St, Sylmar, CA 91342',
  description: 'Best Assisted Living Facility for Elderly. Get Nutritious homestyle meals and furnished rooms. Emergency call system and 24-hour supervision. Low-impact wellness program in pool and spa. Games, walks, local visits, shopping and regular yoga activities. Grab all facilities at one place - Oasis Homes. Call 310-995-4859',
};

const generateTitle = (router) => {
  const { pathname } = router.state; // Destructure pathname


  // Customize title logic based on pathname or other route information
  switch (pathname) {
    case '/':
      return 'Oasis Homes - Assisted Living';
    case '/about':
      return 'Oasis Homes - About Us';
    // Add cases for other page paths
    default:
      return 'Oasis Homes'; // Default title
  }
};

const metaTags = {
  '/': {
    description: 'Oasis Homes provides assisted living facilities.',
    keywords: ['assisted living', 'elderly care', 'Sylmar, CA'],
  },
  '/about': {
    description: 'Learn more about Oasis Homes and our commitment to care.',
    keywords: ['Oasis Homes', 'about us', 'assisted living philosophy'],
  },
  // Add meta tag objects for other page paths
};

export default function RootLayout({ children }) {
  const router = useRouter();
  const title = generateTitle ? generateTitle(router.state) : metadata.title; // Use router.state
  const currentMeta = metaTags[router.pathname] || {}; // Use navigation.pathname

  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta name="keywords" content={currentMeta.keywords?.join(', ')} />
        {/* Add other meta tags as needed (e.g., Open Graph, Twitter Cards) */}
      </Head>
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
      <GoogleTagManager gtmId="GTM-P4H2DP77" />
      <GoogleTagManager gtmId="AW-11484382430" />
      <GoogleAnalytics gaId="G-NKZK2HZNRL" />
    </html>
  );
}
