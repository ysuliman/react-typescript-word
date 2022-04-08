import React, { createContext } from 'react'
import { useImmerReducer } from 'use-immer'
import { GameDispatchAction } from './GameReducer'
import { gameReducer } from './GameReducer.function'
import { GameState } from "./InitialGameState"
import { getNewGameState } from './InitialGameState.config'

const newGameState: GameState = getNewGameState()

export const GameStateContext = createContext(newGameState)
export const GameDispatchContext = createContext((action: GameDispatchAction) => { })

const GameReducerProvider: React.FC = ({ children }) => {
    const [gameState, gameDispatch] = useImmerReducer(gameReducer, newGameState)
    return (
        <GameStateContext.Provider value={gameState}>
            <GameDispatchContext.Provider value={gameDispatch}>
                {children}
            </GameDispatchContext.Provider>
        </GameStateContext.Provider>

    )
}


export default GameReducerProvider