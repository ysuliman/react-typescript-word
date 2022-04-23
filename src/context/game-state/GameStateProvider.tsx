import React, { createContext } from 'react';

import { GameDispatchAction } from './GameReducer';
import { GameState } from './InitialGameState';
import { gameReducer } from './GameReducer.function';
import { getNewGameState } from './InitialGameStateConfig';
import { useImmerReducer } from 'use-immer';

const newGameState: GameState = getNewGameState();

export const GameStateContext = createContext(newGameState);
export const GameDispatchContext = createContext<
	React.Dispatch<GameDispatchAction>
>(() => {});

const GameReducerProvider: React.FC = ({ children }) => {
	const [gameState, gameDispatch] = useImmerReducer(
		gameReducer,
		newGameState
	);
	return (
		<GameStateContext.Provider value={gameState}>
			<GameDispatchContext.Provider value={gameDispatch}>
				{children}
			</GameDispatchContext.Provider>
		</GameStateContext.Provider>
	);
};

export default GameReducerProvider;
