import React, { useCallback, useContext, useEffect } from 'react';

import styles from './App.module.css'

import GuessGrid from './components/guess-grid/GuessGrid.component'
import { GameDispatchContext, GameStateContext } from './context/GameStateProvider';

const App = () => {
  const { targetWord, numberOfGuesses } = useContext(GameStateContext)
  const gameDispatch = useContext(GameDispatchContext)

  const handleKeyPress = useCallback((ev: KeyboardEvent): void => {
    if (ev.key === 'Enter') {
      gameDispatch({ type: 'SUBMIT' })
      return
    }

    if (ev.key === "Backspace" || ev.key === "Delete") {
      gameDispatch({ type: 'DELETE' })
      return
    }

    if (ev.key.match(/^[a-zA-Z]$/)) {
      gameDispatch({ type: 'LETTERPRESS', letter: ev.key })
      return
    }
    return
  }, [gameDispatch])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])


  return (
    <div className={styles.App}>
      <GuessGrid />
    </div>
  );
}

export default App;
