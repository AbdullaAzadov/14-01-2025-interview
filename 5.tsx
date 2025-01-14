import React, { createContext, useContext, useEffect, useState } from 'react';

type TScreenType = 'mobile' | 'tablet' | 'desktop';

const ScreenContext = createContext<TScreenType | undefined>(undefined);

const getCurrentScreen = (): TScreenType => {
	const width = window.innerWidth;
	if (width < 768) {
		return 'mobile';
	} else if (width < 1024) {
		return 'tablet';
	} else {
		return 'desktop';
	}
};

export const ScreenProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
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
		<ScreenContext.Provider value={screenType}>
			{children}
		</ScreenContext.Provider>
	);
};

export const useScreenType = (): TScreenType => {
	const context = useContext(ScreenContext);
	if (context === undefined) {
		throw new Error('useScreen должен использоваться внутри  ScreenProvider');
	}
	return context;
};
