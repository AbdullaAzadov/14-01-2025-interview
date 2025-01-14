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
export type TScreenType = 'mobile' | 'tablet' | 'desktop';

// getCurrentScreen - функция, которая возвращает строку с типом экрана
const getCurrentScreen = (): TScreenType => {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
};

// ScreenContext
import React, { createContext, useContext, useEffect, useState } from 'react';
interface ScreenContextValue {
    screenType: TScreenType;
}

const ScreenContext = createContext<ScreenContextValue | undefined>(undefined);

// ScreenContextProvider
export const ScreenContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [screenType, setScreenType] = useState<TScreenType>(getCurrentScreen());

    useEffect(() => {
        const handleResize = () => {
            setScreenType(getCurrentScreen());
        };

        window.addEventListener('resize', handleResize);
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

// useScreenType
export const useScreenType = (): TScreenType => {
    const context = useContext(ScreenContext);
    if (!context) {
        throw new Error('useScreenType must be used within a ScreenProvider');
    }
    return context.screenType;
};