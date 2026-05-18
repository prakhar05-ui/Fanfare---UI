import React, { createContext, useState } from 'react';

export const FandomContext = createContext();

export const FandomProvider = ({ children }) => {
  const [selectedFandoms, setSelectedFandoms] = useState([]);

  const toggleFandom = (fandomId) => {
    setSelectedFandoms((prev) => {
      if (prev.includes(fandomId)) {
        return prev.filter(id => id !== fandomId);
      } else {
        return [...prev, fandomId];
      }
    });
  };

  return (
    <FandomContext.Provider value={{ selectedFandoms, toggleFandom }}>
      {children}
    </FandomContext.Provider>
  );
};
