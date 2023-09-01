// layout.js

import React from 'react';
import { metadata } from './globals.css'; // Make sure to import metadata properly
import LayoutWrapper from './LayoutWrapper'; // Import the wrapper component

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
