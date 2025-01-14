type TScreenType = 'mobile' | 'tablet' | 'desktop';

// Функция для определения текущего типа экрана
const getCurrentScreen = (): TScreenType => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Создаем контекст
const ScreenContext = createContext<TScreenType | undefined>(undefined);

// Провайдер контекста
interface ScreenProviderProps {
  children: ReactNode;
}

export const ScreenContextProvider: React.FC<ScreenProviderProps> = ({ children }) => {
  const [screenType, setScreenType] = useState<TScreenType>(getCurrentScreen());

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getCurrentScreen());
    };

    window.addEventListener('resize', handleResize);

    // Очистка обработчика при размонтировании
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
export const useScreenType = (): TScreenType => {
  const context = useContext(ScreenContext);
  if (context === undefined) {
    throw new Error('useScreenType must be used within a ScreenProvider');
  }
  return context;
};