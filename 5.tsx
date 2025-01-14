
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Типы экрана
type TScreenType = 'mobile' | 'tablet' | 'desktop';

// Функция для определения текущего типа экрана
const getCurrentScreen = (): TScreenType => {
  const width = window.innerWidth;

  if (width < 768) {
    return 'mobile';
  } else if (width < 1024) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

// Создаем контекст с типом TScreenType или null
const ScreenContext = createContext<TScreenType | null>(null);

// Провайдер для ScreenContext
interface ScreenContextProviderProps {
  children: ReactNode;
}

export const ScreenContextProvider: React.FC<ScreenContextProviderProps> = ({ children }) => {
  const [screenType, setScreenType] = useState<TScreenType>(getCurrentScreen);

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getCurrentScreen());
    };

    window.addEventListener('resize', handleResize);

    // Удаляем обработчик при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <ScreenContext.Provider value={screenType}>{children}</ScreenContext.Provider>;
};

// Кастомный хук для получения значения ScreenContext
export const useScreenType = (): TScreenType => {
  const context = useContext(ScreenContext);

  if (!context) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }

  return context;
};

