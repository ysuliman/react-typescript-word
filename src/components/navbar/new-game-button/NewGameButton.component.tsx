import {
	GameDispatchContext,
	GameStateContext,
} from '../../../context/GameStateProvider';
import React, { useContext, useRef } from 'react';

import { Button } from 'reactstrap';
import classNames from 'classnames';
import styles from './NewGameButton.module.css';

const NewGameButton = () => {
	const { isLightMode } = useContext(GameStateContext);
	const gameDispatch = useContext(GameDispatchContext);

	const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
		gameDispatch({ type: 'NEWGAME' });
		e.currentTarget.blur();
	};

	return (
		<Button
			className={classNames(
				styles['new-game'],
				isLightMode && styles.light
			)}
			onClick={handleClick}>
			NEW GAME
		</Button>
	);
};

export default NewGameButton;
