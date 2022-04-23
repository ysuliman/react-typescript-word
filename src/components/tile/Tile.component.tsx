import {
	AnimationEvent,
	TransitionEvent,
	useContext,
	useEffect,
	useState,
} from 'react';
import {
	GameDispatchContext,
	GameStateContext,
} from '../../context/game-state/GameStateProvider';

import { IsLightModeStateContext } from '../../context/light-mode/LightModeProvider';
import { TileProps } from './Tile';
import classNames from 'classnames';
import styles from './Tile.module.css';

const Tile = ({
	letterIndex,
	isActive,
	letter,
	letterStatus,
	letterToFlipIndex,
	setLetterToFlipInd,
	shake,
	dance,
	isLastLetter,
}: TileProps) => {
	const [isFlip, setIsFlip] = useState(false);
	const [isDance, setIsDance] = useState(false);
	const [isPop, setIsPop] = useState(false);
	const [letterClass, setLetterClass] = useState('');

	const gameDispatch = useContext(GameDispatchContext);
	const { gameStart } = useContext(GameStateContext);

	const isLightMode = useContext(IsLightModeStateContext);

	useEffect(() => {
		if (gameStart) {
			setLetterClass('');
			setIsDance(false);
			setIsFlip(false);
		}
	}, [gameStart]);

	useEffect(() => {
		if (letterStatus && letterIndex === letterToFlipIndex) {
			setIsFlip(true);
		}
	}, [letterIndex, letterStatus, letterToFlipIndex]);

	useEffect(() => {
		if (dance) {
			setTimeout(() => {
				setIsDance(true);
			}, letterIndex * 100);
		}
	}, [dance, letterIndex]);

	useEffect(() => {
		if (isActive) setIsPop(true);
	}, [isActive]);

	const handleTransitionEnd = (e: TransitionEvent) => {
		if (e.propertyName === 'color' || e.propertyName.includes('border'))
			return;

		const nextLetterIndex = letterIndex + 1;
		if (isLastLetter && !isFlip) {
			gameDispatch({ type: 'CHECKWINLOSE' });
		}
		setIsFlip(false);
		setLetterClass(letterStatus);
		setLetterToFlipInd(nextLetterIndex);
	};

	const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
		if (isLastLetter && e.animationName.includes('shake'))
			gameDispatch({ type: 'SHAKECOMPLETE' });
		if (e.animationName.includes('PopIn')) setIsPop(false);
	};

	return (
		<div
			className={classNames(
				styles.tile,
				isFlip && styles.flip,
				isActive && styles.active,
				isPop && styles.pop,
				letterClass === 'correct' && styles.correct,
				letterClass === 'wrong-letter' && styles['wrong-letter'],
				letterClass === 'wrong-location' && styles['wrong-location'],
				shake && styles.shake,
				isDance && styles.dance,
				isLightMode && styles.light
			)}
			onTransitionEnd={handleTransitionEnd}
			onAnimationEnd={handleAnimationEnd}>
			{letter}
		</div>
	);
};

export default Tile;
