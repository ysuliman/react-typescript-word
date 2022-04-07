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
            style={{
                gridTemplateColumns: `repeat(${targetWord.length}, 4em`,
                gridTemplateRows: `repeat(${numberOfGuesses}, 4em)`
            }}
        >
            {tileRows}
        </div>
    )
}

export default GuessGrid