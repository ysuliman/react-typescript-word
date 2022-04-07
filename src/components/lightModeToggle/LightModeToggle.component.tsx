import { useContext } from 'react'
import { GameDispatchContext, GameStateContext } from '../../context/GameStateProvider'

import Toggle from 'react-toggle'
import "react-toggle/style.css"

import ToggleIcon from './ToggleIcon.component'

const LightModeToggle = () => {
    const { isLightMode } = useContext(GameStateContext)
    const gameDispatch = useContext(GameDispatchContext)

    const toggleLightMode = () => {
        gameDispatch({ type: 'TOGGLELIGHTMODE' })
    }


    return (
        <>
            <label>
                <Toggle
                    defaultChecked={isLightMode}
                    icons={{
                        checked: <ToggleIcon icon={'☀'} fill={'yellow'} left={-1} size={17} />,
                        unchecked: <ToggleIcon icon={'🌙'} left={-3} size={12} />,
                    }}
                    onChange={toggleLightMode}
                />
            </label>
        </>
    )
}

export default LightModeToggle