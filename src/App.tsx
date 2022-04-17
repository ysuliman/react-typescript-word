import { useCallback, useContext, useEffect } from 'react';
import classNames from 'classnames';

import AlertContainer from './components/alert/AlertContainer.component';
import GuessGrid from './components/guess-grid/GuessGrid.component'
import Keyboard from './components/keyboard/Keyboard.component';
import Navbar from './components/navbar/Navbar.component';
import { GameDispatchContext, GameStateContext } from './context/GameStateProvider';

import styles from './App.module.css'
import Footer from './components/footer/Footer.component';

const App = () => {
  const gameDispatch = useContext(GameDispatchContext)
  const { isLightMode } = useContext(GameStateContext)

  // Workaround for notch on IOS
  useEffect(() => {
    document.body.style.transition = 'background-color .5s ease-in'
  }, [])
  useEffect(() => {
    document.body.style.backgroundColor = isLightMode
      ? '#fff'
      : '#111112';
  }, [isLightMode])

  const handleKeyPress = useCallback((ev: KeyboardEvent) => {
    if (ev.key === 'Enter')
      return gameDispatch({ type: 'SUBMIT' })

    if (ev.key === "Backspace" || ev.key === "Delete")
      return gameDispatch({ type: 'DELETE' })

    if (ev.key.match(/^[a-zA-Z]$/))
      return gameDispatch({ type: 'LETTERPRESS', letter: ev.key })
  }, [gameDispatch])

  // Set up keydown subscription
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])


  return (
    <div className={classNames(styles.App, isLightMode && styles.light)}>
      <Navbar />
      <AlertContainer />
      <GuessGrid />
      <Keyboard />
      <Footer />
    </div>
  );
}

export default App;
