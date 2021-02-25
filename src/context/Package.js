import React, { createContext, useState } from 'react';

const PackageContext = createContext();

function PackageContextProvider({ children }) {
  const [packageName, setPackageName] = useState('');

  const packageContextValue = {
    packageName,
    setPackageName,
  };

  return <PackageContext.Provider value={packageContextValue}>{children}</PackageContext.Provider>;
}

export { PackageContext, PackageContextProvider };
