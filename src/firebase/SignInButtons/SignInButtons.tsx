import './firebaseui-styling.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Container, Stack } from 'react-bootstrap';
import {
	EmailAuthProvider,
	GoogleAuthProvider,
	User,
	onAuthStateChanged,
} from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';

import { FaDoorOpen } from 'react-icons/fa';
import { FcStatistics } from 'react-icons/fc';
import { FirebaseAuth } from 'react-firebaseui';
import { GameStateContext } from '../../context/GameStateProvider';
import { MdLogout } from 'react-icons/md';
import { auth } from '../FirebaseConfig';
import classNames from 'classnames';
import { handleLightModeChange } from '../../helpers/HandleRootVariableLightModeChange';
import styles from './SignInButtons.module.css';

const uiConfig = {
	signInFlow: 'popup',
	signInOptions: [
		{
			provider: GoogleAuthProvider.PROVIDER_ID,
		},
		{
			provider: EmailAuthProvider.PROVIDER_ID,
		},
	],
	callbacks: {
		signInSuccessWithAuthResult: () => {
			return false;
		},
	},
};

const SignInButtons = () => {
	// Auth
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setUser(user);
		});
	}, []);

	const [user, setUser] = useState<User | null>(null);

	const handleSignOut = () => {
		auth.signOut();
	};

	// Light Mode
	const { isLightMode } = useContext(GameStateContext);

	useEffect(() => {
		handleLightModeChange(
			isLightMode,
			'google-sign-in-button-bg-color',
			'hsl(0, 0%, 88%)',
			'hsl(0, 0%, 17%)'
		);
		handleLightModeChange(
			isLightMode,
			'google-sign-in-button-hover-bg-color',
			'hsl(0, 0%, 72%)',
			'hsl(0, 0%, 9%)'
		);
		handleLightModeChange(
			isLightMode,
			'google-sign-in-button-text-color',
			'hsl(0, 0%, 12%)',
			'#ffffff'
		);

		handleLightModeChange(
			isLightMode,
			'email-sign-in-button-bg-color',
			'hsl(5, 69%, 54%)',
			'hsl(5, 69%, 34%)'
		);
		handleLightModeChange(
			isLightMode,
			'email-sign-in-button-hover-bg-color',
			'hsl(5, 69%, 43%)',
			'hsl(5, 69%, 19%)'
		);
		handleLightModeChange(
			isLightMode,
			'email-sign-in-button-text-color',
			'#ffffff',
			'#ffffff'
		);
	}, [isLightMode]);

	return (
		<>
			{!!!user && (
				<div>
					<FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
				</div>
			)}
			{!!user && (
				<>
					<h5 className={classNames('text-center my-3')}>
						Hello {auth.currentUser?.displayName}!
					</h5>
					<Stack className='justify-content-center'>
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
						<button
							className={classNames(
								styles['offcanvas-button'],
								styles['sign-out-button']
							)}
							onClick={handleSignOut}
							aria-label='Sign Out'>
							<FaDoorOpen
								color={isLightMode ? '#794000' : '#c06702'}
							/>
							<span>Sign out</span>
						</button>
					</Stack>
				</>
			)}
		</>
	);
};

export default SignInButtons;
