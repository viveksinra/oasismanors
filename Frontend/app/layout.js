// layout.js

import React from 'react';
import LayoutWrapper from './LayoutWrapper'; 
import  './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Oasis Homes - Assisted Living Facility at 15116 Roxford St, Sylmar, CA 91342',
  description: 'Best Assisted Living Facility for Elderly. Get Nutritious homestyle meals and furnished rooms. Emergency call system and 24-hour supervision. Low-impact wellness program in pool and spa. Games, walks, local visits, shopping and regular yoga activities. Grab all facilities at one place - Oasis Homes. Call 310-995-4859',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <Head>
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-PCF4DTEW86"></script>
  <script>
  dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PCF4DTEW86');
  `}}
  </script>
    </Head>
      <body>
        <LayoutWrapper> 
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
