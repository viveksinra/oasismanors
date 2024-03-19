// layout.js

import React from 'react';
import LayoutWrapper from './LayoutWrapper'; 
import  './globals.css';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: 'Oasis Homes - Assisted Living Facility at 15116 Roxford St, Sylmar, CA 91342',
  description: 'Best Assisted Living Facility for Elderly. Get Nutritious homestyle meals and furnished rooms. Emergency call system and 24-hour supervision. Low-impact wellness program in pool and spa. Games, walks, local visits, shopping and regular yoga activities. Grab all facilities at one place - Oasis Homes. Call 310-995-4859',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <Head>
   {/* <!-- Global site tag (gtag.js) - Google AdWords: 11484382430 --> */}

    </Head>
      <body>
        <LayoutWrapper> 
          {children}
        </LayoutWrapper>
      </body>
      <GoogleTagManager gtmId="GTM-P4H2DP77" />
      <GoogleAnalytics gaId="AW-11484382430" />
    </html>
  );
}
