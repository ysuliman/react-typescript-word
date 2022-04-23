import { GameDispatchContext } from '../../context/game-state/GameStateProvider';
import { IsLightModeStateContext } from '../../context/light-mode/LightModeProvider';
import classNames from 'classnames';
import styles from './Keys.module.css';
import { useContext } from 'react';

const EnterKey = () => {
	const gameDispatch = useContext(GameDispatchContext);
	const isLightMode = useContext(IsLightModeStateContext);

	const handleClick = () => gameDispatch({ type: 'SUBMIT' });

	return (
		<button
			className={classNames(
				styles.key,
				styles.large,
				isLightMode && styles.light
			)}
			onClick={handleClick}>
			Enter
		</button>
	);
};

export default EnterKey;
