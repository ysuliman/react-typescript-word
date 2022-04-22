import './firebaseui-styling.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	EmailAuthProvider,
	GoogleAuthProvider,
	User,
	onAuthStateChanged,
} from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import { FirebaseAuth } from 'react-firebaseui';
import { GameStateContext } from '../../context/GameStateProvider';
import { auth } from '../FirebaseConfig';
import classNames from 'classnames';
import { handleLightModeChange } from '../../helpers/HandleRootVariableLightModeChange';

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
			{!!!user && (
				<>
					<p className={classNames('text-center')}>
						Hello {auth.currentUser?.displayName}. You are now
						signed In!
					</p>
					<button
						className={classNames('mdl-button')}
						onClick={handleSignOut}>
						Sign-out
					</button>
				</>
			)}
		</>
	);
};

export default SignInButtons;
