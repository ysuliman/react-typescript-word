import './LightModeToggle.css';

import {
	GameDispatchContext,
	GameStateContext,
} from '../../../context/GameStateProvider';

import ReactSwitch from 'react-switch';
import { useContext } from 'react';

interface LightModeToggleProps {
	size?: number;
}

const LightModeToggle = ({ size = 40 }: LightModeToggleProps) => {
	const gameDispatch = useContext(GameDispatchContext);

	const { isLightMode } = useContext(GameStateContext);

	const toggleLightMode = () => {
		gameDispatch({ type: 'LIGHTMODE', payload: !isLightMode });
	};

	return (
		<>
			<ReactSwitch
				checked={isLightMode}
				onChange={toggleLightMode}
				onColor='#7c7c7c'
				checkedIcon={checkedIcon}
				uncheckedIcon={uncheckedIcon}
				offColor='#5a5a5a'
				onHandleColor='#fffdf4'
				offHandleColor='#1f1f1f'
				handleDiameter={size - 2}
				height={size}
				width={size * 2}
			/>
		</>
	);
};

export default LightModeToggle;

const uncheckedIcon = (
	<svg
		// viewBox = <min-x> <min-y> <width> <height>
		viewBox={`-1 -5 ${14 * 1.3} ${20 * 1.3}`}
		height='100%'
		width='100%'
		style={{ position: 'absolute', top: 0 }}>
		<path
			fill='#ffde26'
			fillRule='evenodd'
			d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z'
		/>
		<path
			fill='#c7fdff'
			fillRule='evenodd'
			d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z'
		/>
	</svg>
);

const checkedIcon = (
	<svg
		height='100%'
		width='100%'
		// viewBox = <min-x> <min-y> <width> <height>
		viewBox='-1 -2.5 17 21'
		style={{ position: 'absolute', top: 0 }}>
		<path
			d='M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z'
			fill='#ffd82c'
			fillRule='evenodd'
		/>
	</svg>
);
