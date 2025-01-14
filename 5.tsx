import React, { createContext, useContext, useEffect, useState } from 'react';

// Определяем возможные типы экрана
type TScreenType = 'mobile' | 'tablet' | 'desktop';

// Функция для определения текущего типа экрана
const getCurrentScreen = (): TScreenType => {
  const width = window.innerWidth;
  
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Создаем контекст с типом TScreenType | null
const ScreenContext = createContext<TScreenType | null>(null);

// Провайдер контекста
const ScreenContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenType, setScreenType] = useState<TScreenType>(getCurrentScreen());

  useEffect(() => {
    // Обработчик изменения размера окна
    const handleResize = () => {
      setScreenType(getCurrentScreen());
    };

    // Добавляем слушатель события resize
    window.addEventListener('resize', handleResize);

    // Очищаем слушатель при размонтировании
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

// Хук для использования контекста
const useScreenType = (): TScreenType => {
  const context = useContext(ScreenContext);
  
  if (context === null) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }
  
  return context;
};

export { ScreenContextProvider, useScreenType };

/* 
Объяснение кода:

1. TScreenType - union тип, определяющий возможные значения типа экрана

2. getCurrentScreen - функция, которая определяет тип экрана на основе текущей ширины окна:
   - mobile: < 768px
   - tablet: 768px - 1023px
   - desktop: >= 1024px

3. ScreenContext - контекст с типом TScreenType | null, где null - начальное значение

4. ScreenContextProvider - компонент-провайдер, который:
   - Хранит текущий тип экрана в состоянии
   - Отслеживает изменения размера окна
   - Обновляет состояние при изменении размера
   - Предоставляет значение через контекст

5. useScreenType - пользовательский хук, который:
   - Получает значение из контекста
   - Проверяет наличие контекста
   - Возвращает текущий тип экрана
   - Выбрасывает ошибку, если используется вне провайдера

Пример использования:

const App = () => {
  return (
    <ScreenContextProvider>
      <MyComponent />
    </ScreenContextProvider>
  );
};

const MyComponent = () => {
  const screenType = useScreenType();
  return <div>Current screen: {screenType}</div>;
};
*/
