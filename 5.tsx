/* Задача 5
Напишите контекст, и хук useScreenType, который будет возвращать текущий тип экрана. 
Тип экрана должен быть строкой и принимать одно из следующих значений: 
'mobile', 'tablet', 'desktop'.
При этом, если контекст не был найден, хук должен бросать ошибку с текстом 'useScreen must be used within a ScreenProvider'. 
Хук и контекст должны быть типизированы.

mobile - если ширина экрана меньше 768px
tablet - если ширина экрана меньше 1024px
desktop - если ширина экрана больше 1024px


Напишите объяснение к написанному коду.
*/

// TScreenType

// getCurrentScreen - функция, которая возвращает строку с типом экрана

// ScreenContext

// ScreenContextProvider

// useScreenType

import React, { createContext, useContext, useEffect, useState } from 'react';

// Тип экрана
type TScreenType = 'mobile' | 'tablet' | 'desktop';

// Функция для определения текущего типа экрана
const getCurrentScreen = (): TScreenType => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Создаем контекст
const ScreenContext = createContext<TScreenType | undefined>(undefined);

// Провайдер контекста
export const ScreenContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenType, setScreenType] = useState<TScreenType>(getCurrentScreen);

  useEffect(() => {
    const handleResize = () => setScreenType(getCurrentScreen());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenContext.Provider value={screenType}>
      {children}
    </ScreenContext.Provider>
  );
};

// Хук для использования контекста
export const useScreenType = (): TScreenType => {
  const context = useContext(ScreenContext);
  if (context === undefined) {
    throw new Error('useScreenType must be used within a ScreenContextProvider');
  }
  return context;
};
