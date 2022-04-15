import React, { useContext, useRef } from 'react'
import styles from './NewGameButton.module.css'
import classNames from 'classnames'
import { GameDispatchContext, GameStateContext } from '../../../context/GameStateProvider'

const NewGameButton = () => {
    const { isLightMode } = useContext(GameStateContext)
    const gameDispatch = useContext(GameDispatchContext)

    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleClick = () => {
        gameDispatch({ type: 'NEWGAME' })
        setTimeout(() => {
            buttonRef.current?.blur()
        }, 500)
    }

    return (
        <button
            className={classNames(
                styles['new-game'],
                isLightMode && styles.light
            )}
            onClick={handleClick}
            ref={buttonRef}
        >NEW GAME</button>
    )
}

export default NewGameButton