import React, { createContext, useContext, useState } from 'react';

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState('normal'); // Modes: normal, deuteranopia, protanopia, tritanopia
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = (newMode) => setMode(newMode);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const getColorFilter = () => {
    switch (mode) {
      case 'deuteranopia':
        return 'url(#deuteranopia)';
      case 'protanopia':
        return 'url(#protanopia)';
      case 'tritanopia':
        return 'url(#tritanopia)';
      default:
        return 'none';
    }
  };

  return (
    <ColorModeContext.Provider value={{ mode, darkMode, toggleMode, toggleDarkMode, getColorFilter }}>
      {children}
    </ColorModeContext.Provider>
  );
};