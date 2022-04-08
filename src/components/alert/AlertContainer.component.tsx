import React, { useContext } from 'react'
import { GameStateContext } from '../../context/GameStateProvider'
import Alert from './Alert.component'
import styles from './Alert.module.css'

const AlertContainer = () => {
    const { alertArray } = useContext(GameStateContext)

    const alerts = alertArray.map((AlertMessage, index) => {
        const { alertMessage, showTime } = AlertMessage
        return <Alert key={index} alertMessage={alertMessage} showTime={showTime || 500} />
    })

    return (
        <div className={styles['alert-container']}>
            {alerts}
        </div>
    )
}

export default AlertContainer