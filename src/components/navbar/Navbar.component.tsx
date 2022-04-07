import React, { useContext } from 'react'
import LightModeToggle from '../lightModeToggle/LightModeToggle.component'
import styles from './Navbar.module.css'
import classNames from 'classnames'
import { GameStateContext } from '../../context/GameStateProvider'

const Navbar = () => {
    const { isLightMode } = useContext(GameStateContext)


    return (
        <div className={classNames(styles.navbar,
            isLightMode && styles.light)}>
            <LightModeToggle />
        </div>
    )
}

export default Navbar