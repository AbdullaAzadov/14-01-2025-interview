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

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Тип экрана
type TScreenType = "mobile" | "tablet" | "desktop";

const getCurrentScreen = (): TScreenType => {
  const width = window.innerWidth;
  // возращаем тип экрана в зависимости от количества пикселей на экране
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

// Создание контекста с типом экрана
const ScreenContext = createContext<TScreenType | undefined>(undefined);

// Провайдер контекста
interface ScreenContextProviderProps {
  children: ReactNode;
}

export const ScreenContextProvider: React.FC<ScreenContextProviderProps> = ({
  children,
}) => {
  const [screenType, setScreenType] = useState<TScreenType>(getCurrentScreen());

  // Обновляем тип экрана при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      setScreenType(getCurrentScreen());
    };

    window.addEventListener("resize", handleResize);

    // Очистка события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
    throw new Error("useScreen must be used within a ScreenProvider");
  }

  return context;
};
