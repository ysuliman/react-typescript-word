import React, { useContext } from 'react';

import { GameStateContext } from '../../context/game-state/GameStateProvider';
import { IsLightModeStateContext } from '../../context/light-mode/LightModeProvider';
import classNames from 'classnames';
import styles from './Footer.module.css';

const Footer = () => {
	const isLightMode = useContext(IsLightModeStateContext);

	return (
		<div className={styles.footer}>
			<footer>
				<p>
					<a
						href='https://www.linkedin.com/in/yousefsuliman/'
						className={classNames(
							styles.link,
							isLightMode && styles.light
						)}>
						Need a developer?
					</a>
				</p>
			</footer>
		</div>
	);
};

export default Footer;
