"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

type OpenProviderProps = {
  children: React.ReactNode;
};

type OpenContextType = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isPreloaderComplete: boolean;
  setIsPreloaderComplete: Dispatch<SetStateAction<boolean>>;
};

export const OpenContext = createContext<OpenContextType | null>(null);

export function OpenContextProvider({ children }: OpenProviderProps) {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);
  const [isOpen, setOpen] = useState(false)

  return (
    <OpenContext.Provider value={{isOpen, setOpen, isPreloaderComplete, setIsPreloaderComplete }}>
      {children}
    </OpenContext.Provider>
  );
} 