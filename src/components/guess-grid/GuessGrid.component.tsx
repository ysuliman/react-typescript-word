import React, { useContext } from 'react'

import styles from './GuessGrid.module.css'

import TileRow from '../tile-row/TileRow.component'
import { GameStateContext } from '../../context/GameStateProvider'


const GuessGrid = () => {
    const { activeGuessIndex,
        currentGuesses,
        targetWord,
        numberOfGuesses,
        isShakeActiveRow,
        isDanceActiveRow,
        isFlipActiveRow } = useContext(GameStateContext)

    const tileRows = [...Array(numberOfGuesses)].map((_, index) => {
        const isShakeRow = index === activeGuessIndex ? isShakeActiveRow : false
        let isFlipRow = index === activeGuessIndex ? isFlipActiveRow : false
        const isDanceRow = index === activeGuessIndex ? isDanceActiveRow : false

        return <TileRow
            key={index}
            rowIndex={index}
            wordLength={targetWord.length}
            currentGuess={currentGuesses[index] || ''}
            activeGuessIndex={activeGuessIndex}
            isShakeRow={isShakeRow}
            isDanceRow={isDanceRow}
            isFlipRow={isFlipRow} />
    })


    return (
        <div
            className={styles['guess-grid']}
        >
            {tileRows}
        </div>
    )
}

export default GuessGrid

// clamp(3rem, 3vh, 4rem)) clamp(3vw, 7vh, 7rem)