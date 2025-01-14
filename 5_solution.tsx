import React, { createContext, useContext, useEffect, useState } from 'react';

// Определение типов экрана
type TScreenType = 'mobile' | 'tablet' | 'desktop';

// Функция для определения текущего типа экрана
const getCurrentScreen = (width: number): TScreenType => {
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Создание контекста с типизацией
type TScreenContext = {
  screenType: TScreenType;
};

const ScreenContext = createContext<TScreenContext | null>(null);

// Компонент-провайдер контекста
interface ScreenProviderProps {
  children: React.ReactNode;
}

export const ScreenProvider: React.FC<ScreenProviderProps> = ({ children }) => {
  // Состояние для хранения текущего типа экрана
  const [screenType, setScreenType] = useState<TScreenType>(() => 
    getCurrentScreen(window.innerWidth)
  );

  useEffect(() => {
    // Обработчик изменения размера окна
    const handleResize = () => {
      setScreenType(getCurrentScreen(window.innerWidth));
    };

    // Подписка на событие изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очистка подписки при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ screenType }}>
      {children}
    </ScreenContext.Provider>
  );
};

// Хук для использования типа экрана
export const useScreenType = (): TScreenType => {
  const context = useContext(ScreenContext);
  
  if (!context) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }

  return context.screenType;
};

/*
Объяснение кода:

1. Типизация:
   - TScreenType: union type для возможных значений типа экрана
   - TScreenContext: тип для значения контекста
   - ScreenProviderProps: тип для props провайдера

2. Функция getCurrentScreen:
   - Принимает ширину экрана
   - Возвращает соответствующий тип экрана согласно условиям
   - Типизирована для возврата TScreenType

3. Контекст ScreenContext:
   - Создан с помощью createContext
   - Имеет начальное значение null
   - Типизирован как TScreenContext | null

4. Компонент ScreenProvider:
   - Использует useState для хранения текущего типа экрана
   - Использует useEffect для подписки на изменение размера окна
   - Предоставляет значение контекста через Provider
   - Типизирован как React.FC с ScreenProviderProps

5. Хук useScreenType:
   - Использует useContext для получения значения контекста
   - Проверяет наличие контекста и выбрасывает ошибку при его отсутствии
   - Возвращает текущий тип экрана
   - Типизирован для возврата TScreenType

Пример использования:

```tsx
const App = () => {
  return (
    <ScreenProvider>
      <MyComponent />
    </ScreenProvider>
  );
};

const MyComponent = () => {
  const screenType = useScreenType();
  return <div>Current screen type: {screenType}</div>;
};
```
*/ 