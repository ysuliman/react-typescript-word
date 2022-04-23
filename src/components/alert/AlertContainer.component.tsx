import React, { useContext } from 'react';

import Alert from './Alert.component';
import { AlertMessage } from '../../context/game-state/InitialGameState';
import { GameStateContext } from '../../context/game-state/GameStateProvider';
import styles from './Alert.module.css';

/** Overlay container for current alert messages */
const AlertContainer = () => {
	const { alerts } = useContext(GameStateContext);

	return (
		<div className={styles['alert-container']}>
			{alerts.map((AlertMessage: AlertMessage, index) => {
				const { alertMessage, showTime } = AlertMessage;
				return (
					<Alert
						key={index}
						alertMessage={alertMessage}
						showTime={showTime || 500}
					/>
				);
			})}
		</div>
	);
};

export default AlertContainer;
