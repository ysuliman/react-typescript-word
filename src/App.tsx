import classNames from 'classnames';
import { useCallback, useContext, useEffect } from 'react';

import styles from './App.module.css'
import AlertContainer from './components/alert/AlertContainer.component';

import GuessGrid from './components/guess-grid/GuessGrid.component'
import Keyboard from './components/keyboard/Keyboard.component';
import Navbar from './components/navbar/Navbar.component';
import { GameDispatchContext, GameStateContext } from './context/GameStateProvider';

const App = () => {
  const gameDispatch = useContext(GameDispatchContext)

  const { isLightMode } = useContext(GameStateContext)

  const handleKeyPress = useCallback((ev: KeyboardEvent): void => {
    if (ev.key === 'Enter') return gameDispatch({ type: 'SUBMIT' })
    if (ev.key === "Backspace" || ev.key === "Delete") return gameDispatch({ type: 'DELETE' })
    if (ev.key.match(/^[a-zA-Z]$/)) return gameDispatch({ type: 'LETTERPRESS', letter: ev.key })
  }, [gameDispatch])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])


  return (
    <div className={classNames(styles.App,
      isLightMode && styles.light)}>
      <Navbar />
      <AlertContainer />
      <GuessGrid />
      <Keyboard />
    </div>
  );
}

export default App;
