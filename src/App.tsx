import { useCallback, useContext, useEffect } from 'react';

import AlertContainer from './components/alert/AlertContainer.component';
import Footer from './components/footer/Footer.component';
import { GameDispatchContext } from './context/game-state/GameStateProvider';
import GuessGrid from './components/guess-grid/GuessGrid.component';
import { IsLightModeStateContext } from './context/light-mode/LightModeProvider';
import Keyboard from './components/keyboard/Keyboard.component';
import NavbarWord from './components/navbar/NavbarWord.component';
import classNames from 'classnames';
import styles from './App.module.css';

const App = () => {
	const gameDispatch = useContext(GameDispatchContext);

	// Light Mode
	const isLightMode = useContext(IsLightModeStateContext);

	// Workaround for notch on IOS
	useEffect(() => {
		document.body.style.transition = 'background-color .5s ease-in';
	}, []);
	useEffect(() => {
		document.body.style.backgroundColor = isLightMode ? '#fff' : '#111112';
	}, [isLightMode]);

	const handleKeyPress = useCallback(
		(ev: KeyboardEvent) => {
			if (ev.key === 'Enter') return gameDispatch({ type: 'SUBMIT' });

			if (ev.key === 'Backspace' || ev.key === 'Delete')
				return gameDispatch({ type: 'DELETE' });

			if (ev.key.match(/^[a-zA-Z]$/))
				return gameDispatch({
					type: 'LETTERPRESS',
					letter: ev.key,
				});
		},
		[gameDispatch]
	);

	// Set up keydown subscription
	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [handleKeyPress]);

	return (
		<div className={classNames(styles.App, isLightMode && styles.light)}>
			<NavbarWord />
			<AlertContainer />
			<GuessGrid />
			<Keyboard />
			<Footer />
		</div>
	);
};

export default App;
