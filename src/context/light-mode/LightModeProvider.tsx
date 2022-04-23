import React, { createContext, useState } from 'react';

export const IsLightModeStateContext = createContext(true);
export const SetIsLightModeStateContext = createContext<
	React.Dispatch<React.SetStateAction<boolean>>
>(() => {});

const IsLightModeProvider: React.FC = ({ children }) => {
	const [isLightModeState, setIsLightMode] = useState(true);

	return (
		<IsLightModeStateContext.Provider value={isLightModeState}>
			<SetIsLightModeStateContext.Provider value={setIsLightMode}>
				{children}
			</SetIsLightModeStateContext.Provider>
		</IsLightModeStateContext.Provider>
	);
};

export default IsLightModeProvider;
