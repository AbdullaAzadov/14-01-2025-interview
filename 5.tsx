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

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// TScreenType
type TScreenType = 'mobile' | 'tablet' | 'desktop'; //Тип экрана

// getCurrentScreen - функция, которая возвращает строку с типом экрана

const getCurrentScreen = (): TScreenType => {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
};

// ScreenContext

const ScreenContext = createContext<TScreenType | undefined>(undefined); //контекст экрана

// ScreenContextProvider

export const ScreenContextProvider: React.FC<ScreenContextProviderProps> = ({ children }) => {
    const [screenType, setScreenType] = useState<TScreenType>(getCurrentScreen);

    useEffect(() => {
        const handleResize = () => {
            setScreenType(getCurrentScreen());
        };


        window.addEventListener('resize', handleResize);// добавление слушателя изменения размера окна

        return () => {
            window.removeEventListener('resize', handleResize);// удаление слушателя при размонтировании
        };
    }, []);

    return <ScreenContext.Provider value={screenType}>{children}</ScreenContext.Provider>;
};

// useScreenType

export const useScreenType = (): TScreenType => {
    const context = useContext(ScreenContext);

    if (context === undefined) {
        throw new Error('useScreenType must be used within a ScreenContextProvider');// если контекст не найден, выбрасывается ошибка
    }

    return context;
}
