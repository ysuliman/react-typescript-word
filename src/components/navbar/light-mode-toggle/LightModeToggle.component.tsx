import { useContext } from 'react'
import { GameDispatchContext } from '../../../context/GameStateProvider'

import Toggle from 'react-toggle'
import './LightModeToggle.css'

import ToggleIcon from './ToggleIcon.component'

const LightModeToggle = () => {
    const gameDispatch = useContext(GameDispatchContext)

    const toggleLightMode = () => {
        gameDispatch({ type: 'TOGGLELIGHTMODE' })
    }

    return (
        <>
            <Toggle
                defaultChecked={true}
                icons={{
                    checked: <ToggleIcon icon={'☀'} fill={'#ffd000'} left={-1} size={17} />,
                    unchecked: <ToggleIcon icon={'🌙'} left={-3} size={12} />,
                }}
                onChange={toggleLightMode}

            />
        </>
    )
}

export default LightModeToggle