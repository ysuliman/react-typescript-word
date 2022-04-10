import React, { useContext, useEffect, useState } from 'react'
import styles from './Alert.module.css'
import classNames from 'classnames'
import { GameDispatchContext } from '../../context/GameStateProvider'

type AlertProps = {
    alertMessage: string,
    showTime: number
}

const ALERT_OPACITY_TRANSITION_TIME = 500

const Alert = ({ alertMessage, showTime }: AlertProps) => {
    const [hide, setHide] = useState(false)
    const gameDispatch = useContext(GameDispatchContext)

    // Dispatching alert removal after showtime and animation complete
    useEffect(() => {
        setTimeout(() => {
            setHide(true)
            setTimeout(() => {
                gameDispatch({ type: 'ALERTCOMPLETE' })
            }, ALERT_OPACITY_TRANSITION_TIME)
        }, showTime)
    }, [gameDispatch, showTime])

    return (
        <div className={classNames(styles.alert, hide && styles.hide)}>
            {alertMessage}
        </div>
    )
}

export default Alert