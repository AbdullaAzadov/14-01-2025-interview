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
type TScreenType = 'mobile' | 'tablet' | 'desktop';

// getCurrentScreen - функция, которая возвращает строку с типом экрана
const getCurrentScreen = (width: number): TScreenType => {
    if (width < 768) {
        return 'mobile';
    } else if (width < 1024) {
        return 'tablet';
    } else {
        return 'desktop';
    }
};

// ScreenContext
const ScreenContext = createContext<TScreenType | undefined>(undefined);

// ScreenContextProvider
const ScreenContextProvider: React.FC = ({ children }) => {
    const [screenType, setScreenType] = useState<TScreenType>('mobile');

    useEffect(() => {
        setScreenType(getCurrentScreen(window.innerWidth)); // Устанавливаем тип экрана при инициализации
    }, []);

    return (
        <ScreenContext.Provider value={screenType}>
            {children}
        </ScreenContext.Provider>
    );
};


// useScreenType
const useScreenType = (): TScreenType => {
    const screenType = useContext(ScreenContext);

    if (screenType === undefined) {
        throw new Error('useScreen must be used within a ScreenProvider');
    }

    return screenType;
};



