"use client";

import { createContext, useState } from "react";

export const DesignerContext = createContext();

export default function DesignerContextProvider({ children }) {
  const [elements, setElements] = useState([]);

  const addElement = (index, element) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  return (
    <DesignerContext.Provider value={{ elements, addElement }}>
      {children}
    </DesignerContext.Provider>
  );
}
