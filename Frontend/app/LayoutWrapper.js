// LayoutWrapper.js
'use client';
import React from 'react';
import { MainProvider } from "./Components/Context/MainContext";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {blue,purple } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    primary: blue,
    secondary: purple,
    mode: "light",
  },
});

export default function LayoutWrapper({ children }) {
  return (
    <MainProvider>
      <ThemeProvider theme={darkTheme}>
        {children}
      </ThemeProvider>
    </MainProvider>
  );
}
