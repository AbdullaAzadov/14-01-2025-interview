import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type TScreenType = 'mobile' | 'tablet' | 'desktop';

const getCurrentScreen = (): TScreenType => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

const ScreenContext = createContext<TScreenType | undefined>(undefined);

interface ScreenContextProviderProps {
  children: ReactNode;
}

const ScreenContextProvider: React.FC<ScreenContextProviderProps> = ({ children }) => {
  const [screenType, setScreenType] = useState<TScreenType>(getCurrentScreen);

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getCurrentScreen());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={screenType}>
      {children}
    </ScreenContext.Provider>
  );
};

const useScreenType = (): TScreenType => {
  const context = useContext(ScreenContext);
  if (context === undefined) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }
  return context;
};

export { ScreenContextProvider, useScreenType };
