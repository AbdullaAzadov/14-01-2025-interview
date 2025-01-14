import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Тип для обозначения типов экрана
type TScreenType = "mobile" | "tablet" | "desktop";

// Функция, определяющая текущий тип экрана
const getCurrentScreen = (): TScreenType => {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

// Создание контекста экрана
const ScreenContext = createContext<TScreenType | undefined>(undefined);

// Провайдер контекста экрана
interface ScreenProviderProps {
  children: ReactNode;
}

export const ScreenContextProvider: React.FC<ScreenProviderProps> = ({
  children,
}) => {
  const [screenType, setScreenType] = useState<TScreenType>(getCurrentScreen);

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getCurrentScreen());
    };

    window.addEventListener("resize", handleResize);
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

// Хук для получения типа экрана
export const useScreenType = (): TScreenType => {
  const context = useContext(ScreenContext);
  if (context === undefined) {
    throw new Error(
      "useScreenType must be used within a ScreenContextProvider"
    );
  }
  return context;
};

export default ScreenContextProvider;
