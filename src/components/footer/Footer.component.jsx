import React, { useContext } from 'react'
import { GameStateContext } from '../../context/GameStateProvider'
import styles from './Footer.module.css'
import classNames from 'classnames'

const Footer = () => {
    const { isLightMode } = useContext(GameStateContext)

    return (
        <div className={styles.footer}>
            <footer >
                <p><a
                    href='https://www.linkedin.com/in/yousefsuliman/'
                    className={classNames(styles.link, isLightMode && styles.light)}>Need a developer?</a></p>
            </footer>
        </div>
    )
}

export default Footer