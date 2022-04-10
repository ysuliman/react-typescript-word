import React, { useContext } from 'react'
import { GameStateContext } from '../../context/GameStateProvider'
import Alert from './Alert.component'
import styles from './Alert.module.css'

/** Overlay container for current alert messages */
const AlertContainer = () => {
    const { alerts } = useContext(GameStateContext)

    return (
        <div className={styles['alert-container']}>

            {alerts.map((AlertMessage, index) => {
                const { alertMessage, showTime } = AlertMessage
                return <Alert
                    key={index}
                    alertMessage={alertMessage}
                    showTime={showTime || 500}
                />
            })}

        </div>
    )
}

export default AlertContainer