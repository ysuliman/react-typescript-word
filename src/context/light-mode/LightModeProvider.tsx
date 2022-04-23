import React, { createContext, useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';

export const IsLightModeStateContext = createContext(true);
export const SetIsLightModeStateContext = createContext<
	React.Dispatch<React.SetStateAction<boolean>>
>(() => {});

const IsLightModeProvider: React.FC = ({ children }) => {
	const systemPrefersDark = useMediaQuery({
		query: '(prefers-color-scheme: dark)',
	});

	const [isLightModeState, setIsLightMode] = useState(!systemPrefersDark);

	useEffect(() => {
		setIsLightMode(!systemPrefersDark);
	}, [systemPrefersDark]);

	return (
		<IsLightModeStateContext.Provider value={isLightModeState}>
			<SetIsLightModeStateContext.Provider value={setIsLightMode}>
				{children}
			</SetIsLightModeStateContext.Provider>
		</IsLightModeStateContext.Provider>
	);
};

export default IsLightModeProvider;
