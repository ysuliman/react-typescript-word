import { FaDoorOpen } from 'react-icons/fa';
import { IsLightModeStateContext } from '../../../context/light-mode/LightModeProvider';
import { Stack } from 'react-bootstrap';
import { auth } from '../../../firebase/FirebaseConfig';
import classNames from 'classnames';
import styles from '../OffCanvasButtons.module.css';
import { useContext } from 'react';

const SignOutButton = () => {
	// Auth
	const handleSignOut = () => {
		auth.signOut();
	};

	// Light Mode
	const isLightMode = useContext(IsLightModeStateContext);

	return (
		<Stack>
			<button
				className={classNames(
					styles['offcanvas-button'],
					styles['sign-out-button']
				)}
				onClick={handleSignOut}
				aria-label='Sign Out'>
				<FaDoorOpen color={isLightMode ? '#794000' : '#c06702'} />
				<span>Sign out</span>
			</button>
		</Stack>
	);
};

export default SignOutButton;
