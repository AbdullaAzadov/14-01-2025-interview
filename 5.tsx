/* Задача 5
Напишите контекст, и хук useScreenType, который будет возвращать текущий тип экрана. 
Тип экрана должен быть строкой и принимать одно из следующих значений: 
'mobile', 'tablet', 'desktop'.
При этом, если контекст не был найден, хук должен бросать ошибку с текстом 'useScreen must be used within a ScreenProvider'. 
Хук и контекст должны быть типизированы.

mobile - если ширина экрана меньше 768px
tablet - если ширина экрана меньше 1024px
desktop - если ширина экрана больше 1024px


// Определяем типы экрана
type ScreenType = 'mobile' | 'tablet' | 'desktop';

// Создаем контекст
const ScreenContext = createContext<ScreenType | undefined>(undefined);

// Провайдер для контекста


Напишите объяснение к написанному коду.
*/

// TScreenType

// getCurrentScreen - функция, которая возвращает строку с типом экрана

// ScreenContext

// ScreenContextProvider

// useScreenType


import React, { createContext, useContext, useEffect, useState } from 'react';

export const ScreenProvider = ({ children }) => {
    const [TScreenType, setTScreenType] = useState<ScreenType>('desktop');
  
    const updateScreenType = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setTScreenType('mobile');
      } else if (width < 1024) {
        setTScreenType('tablet');
      } else {
        setTScreenType('desktop');
      }
    };
  
    useEffect(() => {
      updateScreenType(); // Устанавливаем начальный тип экрана
      window.addEventListener('resize', updateScreenType); // Обновляем тип экрана при изменении размера окна
  
      return () => {
        window.removeEventListener('resize', updateScreenType); // Убираем обработчик при размонтировании
      };
    }, []);
  
    return (
      <ScreenContext.Provider value={screenType}>
        {children}
      </ScreenContext.Provider>
    );
  };
