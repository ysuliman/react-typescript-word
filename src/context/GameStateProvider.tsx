import React, { createContext } from 'react'
import { useImmerReducer } from 'use-immer'
import { gameReducer } from './GameReducer.function'
import { initialGameState } from "./initialGameState.config"

export const GameStateContext = createContext(initialGameState)
export const GameDispatchContext = createContext((value: any) => { })

const GameReducerProvider: React.FC = ({ children }) => {
    const [gameState, gameDispatch] = useImmerReducer(gameReducer, initialGameState)

    return (
        <GameStateContext.Provider value={gameState}>
            <GameDispatchContext.Provider value={gameDispatch}>
                {children}
            </GameDispatchContext.Provider>
        </GameStateContext.Provider>

    )
}


export default GameReducerProvider