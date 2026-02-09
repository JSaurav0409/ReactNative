import React, { createContext, FC, PropsWithChildren, useState } from 'react';
// This now imports the initialized instance from service.ts
import appwrite from './service';

// For type safety, we use 'typeof appwrite' to get the shape of the object
type AppContextType = {
  appwrite: typeof appwrite;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

// Creating React Appwrite Context
export const AppwriteContext = createContext<AppContextType>({
  appwrite: appwrite, // Use the imported instance directly
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

// Creating React Appwrite Provider
export const AppwriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const defaultValue = {
    appwrite, // Use the imported instance directly
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  );
};
