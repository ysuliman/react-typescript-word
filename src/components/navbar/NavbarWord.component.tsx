import { Container, Offcanvas } from 'react-bootstrap';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';

import { GameDispatchContext } from '../../context/game-state/GameStateProvider';
import { IsLightModeStateContext } from '../../context/light-mode/LightModeProvider';
import LightModeToggle from './light-mode-toggle/LightModeToggle.component';
import ModifiedFirebaseAuthUI from './modified-firebase-auth-ui/ModifiedFirebaseAuthUI';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import NewGameButton from './new-game-button/NewGameButton.component';
import SignOutButton from './sign-out-button/SignOutButton';
import SignedInOptionButtons from './signed-in-option-buttons/SignedInOptionButtons';
import Title from './title/Title.component';
import { auth } from '../../firebase/FirebaseConfig';
import classNames from 'classnames';
import styles from './NavbarWord.module.css';

const NavbarWord = () => {
	// Auth
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setUser(user);
		});
	}, []);

	const [user, setUser] = useState<User | null>(null);

	// Light Mode
	const isLightMode = useContext(IsLightModeStateContext);

	// Handle Navbar Expanded
	const gameDispatch = useContext(GameDispatchContext);

	return (
		<>
			<Navbar
				collapseOnSelect
				expand='false'
				variant={isLightMode ? 'light' : 'dark'}
				className={classNames(
					styles.navbar,
					isLightMode && styles.light
				)}
				onToggle={isExpanded => {
					gameDispatch({
						type: 'TOGGLE_OFFCANVAS',
						payload: isExpanded,
					});
				}}>
				<Container>
					<Nav.Item>
						<NewGameButton />
					</Nav.Item>
					<Navbar.Brand href='#home' className='mx-auto'>
						<Title />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='offcanvasNavbar' />
					<Navbar.Offcanvas
						id='offcanvasNavbar'
						aria-labelledby='offcanvasNavbarLabel'
						placement='end'
						className={classNames(
							styles['off-canvas-nav'],
							isLightMode && styles.light
						)}
						keyboard>
						<Offcanvas.Header
							closeButton
							closeLabel='Close'
							closeVariant={
								isLightMode ? undefined : 'white'
							}></Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-center'>
								<Nav.Item>
									<h3
										className={classNames(
											isLightMode
												? 'text-muted'
												: 'text-light',
											'ms-4'
										)}>
										Profile
									</h3>
								</Nav.Item>
								<Nav.Item>
									<ModifiedFirebaseAuthUI />
								</Nav.Item>
								{!!user && (
									<>
										<Nav.Item>
											<SignedInOptionButtons />
										</Nav.Item>
										<Nav.Item>
											<SignOutButton />
										</Nav.Item>
									</>
								)}
								<Nav.Item>
									<h3
										className={classNames(
											isLightMode
												? 'text-muted'
												: 'text-light',
											'ms-4 my-4 mt-5'
										)}>
										Settings
									</h3>
								</Nav.Item>
								<Nav.Item className='mx-auto'>
									<LightModeToggle />
								</Nav.Item>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarWord;
