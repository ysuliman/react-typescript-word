import { GameDispatchContext } from '../../context/game-state/GameStateProvider';
import { IsLightModeStateContext } from '../../context/light-mode/LightModeProvider';
import { LetterStatus } from '../../context/game-state/InitialGameState';
import classNames from 'classnames';
import styles from './Keys.module.css';
import { useContext } from 'react';

interface LetterKeyProps {
	letter: string;
	status: LetterStatus;
}

const LetterKey = ({ letter, status }: LetterKeyProps) => {
	const gameDispatch = useContext(GameDispatchContext);
	const isLightMode = useContext(IsLightModeStateContext);

	const handleClick = () =>
		gameDispatch({ type: 'LETTERPRESS', letter: letter });

	return (
		<button
			className={classNames(
				styles.key,
				isLightMode && styles.light,
				status === 'correct' && styles.correct,
				status === 'wrong-location' && styles['wrong-location'],
				status === 'wrong-letter' && styles.wrong
			)}
			onClick={handleClick}>
			{letter}
		</button>
	);
};

export default LetterKey;
