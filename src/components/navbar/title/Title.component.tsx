import { IsLightModeStateContext } from '../../../context/light-mode/LightModeProvider';
import classNames from 'classnames';
import styles from './Title.module.css';
import { useContext } from 'react';

const Title = () => {
	const isLightMode = useContext(IsLightModeStateContext);
	return (
		<h1 className={classNames(styles.title, isLightMode && styles.light)}>
			Word
		</h1>
	);
};

export default Title;
