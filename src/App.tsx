import React, { useCallback, useContext, useEffect } from 'react';

import styles from './App.module.css'

import GuessGrid from './components/guess-grid/GuessGrid.component'
import { GameDispatchContext, GameStateContext } from './context/GameStateProvider';

const App = () => {
  const { targetWord, numberOfGuesses } = useContext(GameStateContext)
  const gameDispatch = useContext(GameDispatchContext)



  const handleKeyPress = useCallback((ev: KeyboardEvent): void => {
    return
  }, [])

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
