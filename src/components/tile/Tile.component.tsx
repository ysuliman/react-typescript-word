
import styles from './Tile.module.css'
import classNames from 'classnames'
import { TileProps } from './Tile'
import { useContext, useEffect, useState, AnimationEvent, TransitionEvent } from 'react'
import { GameDispatchContext, GameStateContext } from '../../context/GameStateProvider'
import { transform } from 'typescript'

const Tile = ({ letterIndex, isActive, letter, letterStatus, letterToFlipIndex, setLetterToFlipInd, shake, dance, isLastLetter }: TileProps) => {

    const [flip, setFlip] = useState(false)
    const [danceClass, setDanceClass] = useState(false)
    const [isPop, setIsPop] = useState(false)
    const [letterClass, setLetterClass] = useState('')

    const gameDispatch = useContext(GameDispatchContext)
    const { isLightMode, gameStart } = useContext(GameStateContext)

    useEffect(() => {
        if (gameStart) {
            setLetterClass('')
            setDanceClass(false)
        }
    }, [gameStart])

    useEffect(() => {
        if (letterStatus && letterIndex === letterToFlipIndex) {
            setFlip(true)
        }
    }, [letterIndex, letterStatus, letterToFlipIndex])

    useEffect(() => {
        if (dance) {
            setTimeout(() => {
                setDanceClass(true)
            }, letterIndex * 100);
        }
    }, [dance, letterIndex])

    useEffect(() => {
        if (isActive) setIsPop(true)
    }, [isActive])

    const handleTransitionEnd = (e: TransitionEvent) => {
        if (e.propertyName === 'color' || e.propertyName.includes('border')) return

        const nextLetterIndex = letterIndex + 1
        if (isLastLetter && !flip) {
            gameDispatch({ type: 'CHECKWINLOSE' })
        }
        setFlip(false)
        setLetterClass(letterStatus)
        setLetterToFlipInd(nextLetterIndex)
    }

    const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
        if (isLastLetter && e.animationName.includes('shake')) gameDispatch({ type: 'ENDSHAKE' })
        if (e.animationName.includes('PopIn')) setIsPop(false)
    }

    return (
        <div
            className={classNames(
                styles.tile,
                flip && styles.flip,
                isActive && styles.active,
                isPop && styles.pop,
                letterClass === 'correct' && styles.correct,
                letterClass === 'wrong-letter' && styles['wrong-letter'],
                letterClass === 'wrong-location' && styles['wrong-location'],
                shake && styles.shake,
                danceClass && styles.dance,
                isLightMode && styles.light

            )}

            onTransitionEnd={handleTransitionEnd}
            onAnimationEnd={handleAnimationEnd}
        >
            {letter}
        </div>
    )
}

export default Tile