import classNames from 'classnames'
import React, { useContext } from 'react'
import { GameDispatchContext, GameStateContext } from '../../context/GameStateProvider'
import styles from './Keys.module.css'

const EnterKey = () => {
    const gameDispatch = useContext(GameDispatchContext)
    const { isLightMode } = useContext(GameStateContext)
    const handleClick = () => gameDispatch({ type: 'SUBMIT' })

    return (
        <button
            className={classNames(styles.key, styles.large, isLightMode && styles.light,)}
            onClick={handleClick}>
            Enter
        </button>
    )
}

export default EnterKey