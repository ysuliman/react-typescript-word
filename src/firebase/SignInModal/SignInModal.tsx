// firebase

import './firebaseui-styling.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Modal } from 'react-bootstrap';
import {
	EmailAuthProvider,
	GoogleAuthProvider,
	User,
	onAuthStateChanged,
} from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';

import { FirebaseAuth } from 'react-firebaseui';
import { GameStateContext } from '../../context/GameStateProvider';
import { auth } from '../FirebaseConfig';
import classNames from 'classnames';
import styles from './SignInModal.module.css';

// word-yousef firebaseApp

const uiConfig = {
	signInFlow: 'popup',
	signInOptions: [
		GoogleAuthProvider.PROVIDER_ID,
		EmailAuthProvider.PROVIDER_ID,
	],
	callbacks: {
		signInSuccessWithAuthResult: () => {
			return false;
		},
	},
};

const SignInModal = () => {
	// Auth
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setUser(user);
		});
	}, []);

	const [user, setUser] = useState<User | null>(null);

	// Modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleClose = () => setIsModalOpen(false);
	const handleOpen = () => setIsModalOpen(true);

	// Theme
	const { isLightMode } = useContext(GameStateContext);

	return (
		<>
			{!!!user && <Button onClick={handleOpen}>Sign In</Button>}
			{!!user && (
				<Button onClick={handleOpen}>
					{auth.currentUser?.displayName}
				</Button>
			)}

			<Modal
				show={isModalOpen}
				onHide={handleClose}
				centered={true}
				contentClassName={!isLightMode ? 'bg-dark' : undefined}>
				<Modal.Header
					closeButton
					bsPrefix={classNames(
						'modal-header',
						!isLightMode && 'bg-dark'
					)}
					closeVariant={isLightMode ? undefined : 'white'}
					style={
						!isLightMode
							? { borderBottom: '#171717 solid 2px' }
							: undefined
					}>
					<Modal.Title
						bsPrefix={classNames(
							'modal-title',
							!isLightMode && 'text-white'
						)}>
						Sign In
					</Modal.Title>
				</Modal.Header>
				<Modal.Body
					bsPrefix={classNames(
						'modal-body',
						!isLightMode && 'bg-dark'
					)}>
					<div>
						{!!!user && (
							<div>
								<FirebaseAuth
									uiConfig={uiConfig}
									firebaseAuth={auth}
								/>
							</div>
						)}
						{!!user && (
							<p
								className={classNames(
									'text-center',
									!isLightMode && 'text-light'
								)}>
								Hello {auth.currentUser?.displayName}. You are
								now signed In!
							</p>
						)}
					</div>
				</Modal.Body>
				{!!user && (
					<Modal.Footer
						style={
							!isLightMode
								? { borderTop: '#171717 solid 2px' }
								: undefined
						}>
						<Button
							onClick={() => {
								auth.signOut();
								setIsModalOpen(false);
							}}
							className='mx-auto'>
							Sign-out
						</Button>
					</Modal.Footer>
				)}
			</Modal>
		</>
	);
};

export default SignInModal;
