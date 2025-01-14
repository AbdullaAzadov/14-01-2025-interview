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

создан тип tscreentype с возможными значениями 'mobile' 'tablet' 'desktop'

функция getcurrentscreen определяет тип экрана по ширине окна если ширина меньше 768px — mobile от 768px до 1024px — tablet больше 1024px — desktop

контекст screencontext хранит текущий тип экрана и доступен для компонентов обернутых в screenprovider

провайдер screenprovider обновляет тип экрана при изменении размера окна и предоставляет его через контекст

хук usescreentype используется для получения текущего типа экрана из контекста если хук используется вне screenprovider выбрасывается ошибка
*/

import React, { createContext, useContext, useEffect, useState } from "react";

// Типы экранов


// Функция для получения типа экрана на основе ширины окна




// TScreenType

type TScreenType = "mobile" | "tablet" | "desktop";

// getCurrentScreen - функция, которая возвращает строку с типом экрана

const getCurrentScreen = (width: number): TScreenType => {
  if (width < 768) {
    return "mobile";
  } else if (width < 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
};

// ScreenContext
interface IScreenContext {
  screenType: TScreenType;
}

const ScreenContext = createContext<IScreenContext | undefined>(undefined);

// ScreenContextProvider
export const ScreenContextProvider: React.FC = ({ children }) => {
  const [screenType, setScreenType] = useState<TScreenType>("desktop");

  const updateScreenType = () => {
    const width = window.innerWidth;
    setScreenType(getCurrentScreen(width));
  };

  useEffect(() => {
    updateScreenType(); // Устанавливаем начальный тип экрана
    window.addEventListener("resize", updateScreenType);

    return () => {
      window.removeEventListener("resize", updateScreenType);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ screenType }}>
      {children}
    </ScreenContext.Provider>
  );
};

// useScreenType

export const useScreenType = (): TScreenType => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }
  return context.screenType;
};
