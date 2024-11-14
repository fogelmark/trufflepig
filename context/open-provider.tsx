"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

type OpenProviderProps = {
  children: React.ReactNode;
};

type OpenContextType = {
  isPreloaderComplete: boolean;
  setIsPreloaderComplete: Dispatch<SetStateAction<boolean>>;
};

export const OpenContext = createContext<OpenContextType | null>(null);

export function OpenContextProvider({ children }: OpenProviderProps) {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  return (
    <OpenContext.Provider value={{ isPreloaderComplete, setIsPreloaderComplete }}>
      {children}
    </OpenContext.Provider>
  );
} 