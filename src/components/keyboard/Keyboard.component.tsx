import React, { useContext, useEffect, useState } from 'react'
import styles from './Keyboard.module.css'
import LetterKey from '../keys/LetterKey.component'
import EnterKey from '../keys/EnterKey'
import DeleteKey from '../keys/DeleteKey'
import { GameStateContext } from '../../context/GameStateProvider'
import { LetterStatuses } from "../../context/initialGameState"

const Keyboard = () => {
    const keyboardLetters1 = 'QWERTYUIOP'
    const keyboardLetters2 = 'ASDFGHJKL'
    const keyboardLetters3 = 'ZXCVBNM'

    const { letterStatuses, isFlipActiveRow } = useContext(GameStateContext)

    const [keyboardLetterStatuses, setKeyboardLetterStatuses] = useState({} as LetterStatuses)

    useEffect(() => {
        if (!isFlipActiveRow) { setKeyboardLetterStatuses(letterStatuses) }
    }, [isFlipActiveRow, letterStatuses])


    const makeRow = (letters: string) => letters.split('').map((letter, index) => {

        return <LetterKey letter={letter} key={index} status={keyboardLetterStatuses[letter.toLowerCase()] || 'none'} />
    })

    return (
        <div className={styles.keyboard}>
            {makeRow(keyboardLetters1)}
            <div></div>
            {makeRow(keyboardLetters2)}
            <div></div>
            <EnterKey />
            {makeRow(keyboardLetters3)}
            <DeleteKey />
        </div>
    )
}

export default Keyboard