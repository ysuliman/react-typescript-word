import React, { useContext, useEffect, useState } from 'react'

import { TileRowProps } from './TileRow'
import Tile from '../tile/Tile.component'
import { GameStateContext } from '../../context/GameStateProvider'

const TileRow = (props: TileRowProps) => {
    const { activeGuessIndex, rowIndex, currentGuess, wordLength, isShakeRow, isDanceRow, isFlipRow } = { ...props }

    const { guessLetterStatuses } = useContext(GameStateContext)

    const [letterToFlipIndex, setLetterToFlipInd] = useState(-1)

    useEffect(() => {
        if (isFlipRow) {
            setLetterToFlipInd(0)
        }
    }, [isFlipRow])

    const tiles = [...Array(wordLength)].map((_, index) => {
        const letter = currentGuess[index] || ''
        const isActive = !!letter && activeGuessIndex === rowIndex

        const letterStatus = guessLetterStatuses[rowIndex][index]


        return <Tile
            key={index}
            letterIndex={index}
            isActive={isActive}
            letter={letter}
            letterStatus={letterStatus}
            letterToFlipIndex={letterToFlipIndex}
            setLetterToFlipInd={setLetterToFlipInd}
            shake={isShakeRow}
            dance={isDanceRow}
            isLastLetter={wordLength === index + 1}
        />
    })

    return <>{tiles}</>
}

export default TileRow