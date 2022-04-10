import React, { useContext, useEffect, useState } from 'react'
import styles from './Keyboard.module.css'
import LetterKey from '../keys/LetterKey.component'
import EnterKey from '../keys/EnterKey'
import DeleteKey from '../keys/DeleteKey'
import { GameStateContext } from '../../context/GameStateProvider'
import { LetterStatuses } from "../../context/InitialGameState"


const KEYBOARD_LETTERS_ROW_1 = 'QWERTYUIOP'
const KEYBOARD_LETTERS_ROW_2 = 'ASDFGHJKL'
const KEYBOARD_LETTERS_ROW_3 = 'ZXCVBNM'

const Keyboard = () => {

    const { keyboardLetterStatuses, isFlipActiveRow } = useContext(GameStateContext)

    const [keyboardLetterStatusesState, setKeyboardLetterStatusesState] = useState({} as LetterStatuses)

    useEffect(() => {
        if (!isFlipActiveRow) { setKeyboardLetterStatusesState(keyboardLetterStatuses) }
    }, [isFlipActiveRow, keyboardLetterStatuses])


    const makeRow = (letters: string) => letters.split('').map((letter, index) => {

        return <LetterKey letter={letter} key={index} status={keyboardLetterStatusesState[letter.toLowerCase()] || 'none'} />
    })

    return (
        <div className={styles.keyboard}>
            {makeRow(KEYBOARD_LETTERS_ROW_1)}
            <div></div>
            {makeRow(KEYBOARD_LETTERS_ROW_2)}
            <div></div>
            <EnterKey />
            {makeRow(KEYBOARD_LETTERS_ROW_3)}
            <DeleteKey />
        </div>
    )
}

export default Keyboard