import React, { useContext } from 'react'
import styles from './Keys.module.css'
import classNames from 'classnames'
import { GameDispatchContext, GameStateContext } from '../../context/GameStateProvider'
import { LetterStatus } from "../../context/initialGameState"

interface LetterKeyProps {
    letter: string,
    status: LetterStatus
}

const LetterKey = ({ letter, status }: LetterKeyProps) => {
    const gameDispatch = useContext(GameDispatchContext)
    const { isLightMode } = useContext(GameStateContext)
    const handleClick = () => gameDispatch({ type: 'LETTERPRESS', letter: letter })

    return (
        <button
            className={classNames(styles.key,
                isLightMode && styles.light,
                status === 'correct' && styles.correct,
                status === 'wrong-location' && styles['wrong-location'],
                status === 'wrong-letter' && styles.wrong)}
            onClick={handleClick}>
            {letter}
        </button>
    )
}

export default LetterKey