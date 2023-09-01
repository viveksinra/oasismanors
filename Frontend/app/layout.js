// layout.js

import React from 'react';
import LayoutWrapper from './LayoutWrapper'; // Import the wrapper component
 
export const metadata = {
  title: 'Oasis Manors, Inc - Assisted Living Facility at 15116 Roxford St, Sylmar, CA 91342',
  description: 'Best Assisted Living Facility for Elderly. Get Nutritious homestyle meals and furnished rooms. Emergency call system and 24-hour supervision. Low-impact wellness program in pool and spa. Games, walks, local visits, shopping and regular yoga activities. Grab all facilities at one place - Oasis Manors. Call 310-995-4859',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper> {/* Use the LayoutWrapper component here */}
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
