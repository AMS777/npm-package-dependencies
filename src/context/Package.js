import React, { createContext, useState } from 'react';

const PackageContext = createContext();

function PackageContextProvider({ children }) {
  const [name, setName] = useState('');

  const packageContextValue = {
    name,
    setName,
  };

  return <PackageContext.Provider value={packageContextValue}>{children}</PackageContext.Provider>;
}

export { PackageContext, PackageContextProvider };
