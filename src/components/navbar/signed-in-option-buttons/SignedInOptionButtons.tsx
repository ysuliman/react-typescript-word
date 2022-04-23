import React, { useContext } from 'react';

import { FcStatistics } from 'react-icons/fc';
import { IsLightModeStateContext } from '../../../context/light-mode/LightModeProvider';
import { Stack } from 'react-bootstrap';
import classNames from 'classnames';
import styles from '../OffCanvasButtons.module.css';

const SignedInOptionButtons = () => {
	const isLightMode = useContext(IsLightModeStateContext);

	return (
		<Stack>
			<button
				className={classNames(
					styles['offcanvas-button'],
					isLightMode
						? styles['statistics-button']
						: styles['statistics-button-dark'],
					'mb-3'
				)}
				aria-label='Statistics'>
				<FcStatistics />
				<span>Stats</span>
			</button>
		</Stack>
	);
};

export default SignedInOptionButtons;
