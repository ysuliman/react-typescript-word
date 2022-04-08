import React, { useContext } from 'react'
import { GameStateContext } from '../../../context/GameStateProvider'
import styles from './Title.module.css'
import classNames from 'classnames'

const Title = () => {
    const { isLightMode } = useContext(GameStateContext)
    return (
        <h1
            className={classNames(
                styles.title,
                isLightMode && styles.light
            )}>
            Word</h1>
    )
}

export default Title