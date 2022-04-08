import React, { useContext } from 'react'
import LightModeToggle from './light-mode-toggle/LightModeToggle.component'
import styles from './Navbar.module.css'
import classNames from 'classnames'
import { GameStateContext } from '../../context/GameStateProvider'
import NewGameButton from './new-game-button/NewGameButton.component'
import Title from './title/Title.component'

const Navbar = () => {
    const { isLightMode } = useContext(GameStateContext)


    return (
        <div className={classNames(styles.navbar,
            isLightMode && styles.light)}>
            <NewGameButton />
            <Title />
            <LightModeToggle />
        </div>
    )
}

export default Navbar