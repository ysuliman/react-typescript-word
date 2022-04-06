import classNames from 'classnames'
import React, { useContext } from 'react'
import { GameDispatchContext } from '../../context/GameStateProvider'
import styles from './Keys.module.css'

const EnterKey = () => {
    const gameDispatch = useContext(GameDispatchContext)
    const handleClick = () => gameDispatch({ type: 'SUBMIT' })

    return (
        <button
            className={classNames(styles.key, styles.large)}
            onClick={handleClick}>
            Enter
        </button>
    )
}

export default EnterKey