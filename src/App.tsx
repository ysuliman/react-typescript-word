import React, { useCallback, useContext, useEffect } from 'react';

import styles from './App.module.css'

import GuessGrid from './components/guess-grid/GuessGrid.component'
import { GameDispatchContext } from './context/GameStateProvider';

const App = () => {
  const gameDispatch = useContext(GameDispatchContext)

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
    <div className={styles.App}>
      <GuessGrid />
    </div>
  );
}

export default App;
