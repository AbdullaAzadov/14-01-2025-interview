/* Задача 5
Напишите контекст, и хук useScreenType, который будет возвращать текущий тип экрана. 
Тип экрана должен быть строкой и принимать одно из следующих значений: 
'mobile', 'tablet', 'desktop'.
При этом, если контекст не был найден, хук должен бросать ошибку с текстом 'useScreen must be used within a ScreenProvider'. 
Хук и контекст должны быть типизированы.

mobile - если ширина экрана меньше 768px
tablet - если ширина экрана меньше 1024px
desktop - если ширина экрана больше 1024px


import React, { createContext, useContext, useEffect, useState } from 'react';

// Тип экрана
type TScreenType = 'mobile' | 'tablet' | 'desktop';

// Функция, которая возвращает текущий тип экрана
const getCurrentScreen = (): TScreenType => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Создание контекста
const ScreenContext = createContext<TScreenType | null>(null);

// Провайдер ScreenContext
const ScreenContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenType, setScreenType] = useState<TScreenType>(getCurrentScreen());

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getCurrentScreen());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <ScreenContext.Provider value={screenType}>{children}</ScreenContext.Provider>;
};

// Хук для получения типа экрана
const useScreenType = (): TScreenType => {
  const screenType = useContext(ScreenContext);
  if (!screenType) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }
  return screenType;
};

export { ScreenContextProvide

// TScreenType: Описывает возможные значения типа экрана: 'mobile', 'tablet', 'desktop'.
// getCurrentScreen: Возвращает текущий тип экрана на основе ширины окна.
// ScreenContext: Контекст, который предоставляет значение типа экрана.
// ScreenContextProvider: Провайдер контекста, который обновляет значение типа экрана при изменении размера окна.
// useScreenType: Хук для доступа к текущему типу экрана. Если вызов хука происходит вне провайдера, выбрасывается ошибка.