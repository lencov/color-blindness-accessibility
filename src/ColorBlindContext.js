import React, { createContext, useContext, useState } from 'react';

// Create a Context for the Color Blind Mode
const ColorBlindContext = createContext();

// Custom hook to use the Color Blind Context
export const useColorBlind = () => useContext(ColorBlindContext);

export const ColorBlindProvider = ({ children }) => {
  const [isColorBlindMode, setIsColorBlindMode] = useState(false);

  const toggleColorBlindMode = () => setIsColorBlindMode(!isColorBlindMode);

  return (
    <ColorBlindContext.Provider value={{ isColorBlindMode, toggleColorBlindMode }}>
      {children}
    </ColorBlindContext.Provider>
  );
};