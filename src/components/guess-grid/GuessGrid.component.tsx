import React, { useContext } from 'react'

import styles from './GuessGrid.module.css'

import TileRow from '../tile-row/TileRow.component'
import { GameStateContext } from '../../context/GameStateProvider'


const GuessGrid = () => {
    const { currentGuessIndex, currentGuesses, targetWord, numberOfGuesses } = useContext(GameStateContext)

    const tileRows = [...Array(numberOfGuesses)].map((_, index) => {
        return <TileRow
            key={index}
            rowIndex={index}
            wordLength={targetWord.length}
            currentGuess={currentGuesses[index] || ''} />
    })


    return (
        <div
            className={styles['guess-grid']}
            style={{
                "gridTemplateColumns": `repeat(${targetWord.length}, 4em`,
                "gridTemplateRows": `repeat(${numberOfGuesses}, 4em)`
            }}
        >
            {tileRows}
        </div>
    )
}

export default GuessGrid