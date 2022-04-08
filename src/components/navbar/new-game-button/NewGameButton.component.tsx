import React, { useContext } from 'react'
import styles from './NewGameButton.module.css'
import classNames from 'classnames'
import { GameDispatchContext, GameStateContext } from '../../../context/GameStateProvider'

const NewGameButton = () => {
    const { isLightMode } = useContext(GameStateContext)

    const gameDispatch = useContext(GameDispatchContext)

    const handleClick = () => gameDispatch({ type: 'NEWGAME' })

    return (
        <button
            className={classNames(
                styles['new-game'],
                isLightMode && styles.light
            )}
            onClick={handleClick}>NEW GAME</button>
    )
}

export default NewGameButton