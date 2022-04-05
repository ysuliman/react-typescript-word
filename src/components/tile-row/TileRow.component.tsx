import React from 'react'

import { TileRowProps } from './TileRow.config'
import Tile from '../tile/Tile.component'


const TileRow = (props: TileRowProps) => {
    const { currentGuess, rowIndex, wordLength } = { ...props }

    const tiles = [...Array(wordLength)].map((_, index) => {
        return <Tile
            key={index}
            wordIndex={index}
            rowIndex={rowIndex}
            letter={currentGuess[index] || ''}></Tile>
    })


    return (
        <>
            {tiles}
        </>
    )
}

export default TileRow