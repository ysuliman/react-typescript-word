import './firebaseui-styling.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	EmailAuthProvider,
	GoogleAuthProvider,
	User,
	onAuthStateChanged,
} from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';

import { FirebaseAuth } from 'react-firebaseui';
import { IsLightModeStateContext } from '../../../context/light-mode/LightModeProvider';
import { auth } from '../../../firebase/FirebaseConfig';
import classNames from 'classnames';
import { googleSignInLightModeCSSVariables } from './googleSignInLightModeCSSVariables';
import { handleLightModeChange } from '../../../helpers/HandleRootVariableLightModeChange';

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

const ModifiedFirebaseAuthUI = () => {
	// Auth
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setUser(user);
		});
	}, []);

	const [user, setUser] = useState<User | null>(null);

	// Light Mode
	const isLightMode = useContext(IsLightModeStateContext);

	useEffect(() => {
		handleLightModeChange(isLightMode, googleSignInLightModeCSSVariables);
	}, [isLightMode]);

	return (
		<>
			{!!!user && (
				<div>
					<FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
				</div>
			)}
			{!!user && (
				<h5
					className={classNames(
						'text-center my-3',
						!isLightMode && 'text-white'
					)}>
					Hello {auth.currentUser?.displayName}!
				</h5>
			)}
		</>
	);
};

export default ModifiedFirebaseAuthUI;
