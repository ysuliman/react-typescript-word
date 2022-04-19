import { Container, Offcanvas } from 'react-bootstrap';

import FirebaseTest from '../../firebase/FirebaseTest';
import { GameStateContext } from '../../context/GameStateProvider';
import LightModeToggle from './light-mode-toggle/LightModeToggle.component';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import NewGameButton from './new-game-button/NewGameButton.component';
import Title from './title/Title.component';
import classNames from 'classnames';
import styles from './Navbar.module.css';
import { useContext } from 'react';

const NavbarWord = () => {
	const { isLightMode } = useContext(GameStateContext);

	return (
		<>
			<Navbar
				collapseOnSelect
				expand='false'
				variant={isLightMode ? 'light' : 'dark'}
				className={classNames(
					styles.navbar,
					isLightMode && styles.light
				)}>
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
								<Nav.Link href='#' className='mx-auto'>
									<FirebaseTest />
								</Nav.Link>
								<Nav.Link href='#' className='mx-auto mb-4'>
									History
								</Nav.Link>
								<Nav.Item>
									<h3
										className={classNames(
											isLightMode
												? 'text-muted'
												: 'text-light',
											'ms-4 my-4'
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
