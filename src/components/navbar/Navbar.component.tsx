import React, { useContext, useState } from 'react';
import LightModeToggle from './light-mode-toggle/LightModeToggle.component';
import styles from './Navbar.module.css';
import classNames from 'classnames';
import { GameStateContext } from '../../context/GameStateProvider';
import NewGameButton from './new-game-button/NewGameButton.component';
import Title from './title/Title.component';
import FirebaseTest from '../../firebase/FirebaseTest';
import {
	Button,
	Collapse,
	Container,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
} from 'reactstrap';
import SignInModal from '../../firebase/SignInModal/SignInModal';

const NavbarOld = () => {
	const { isLightMode } = useContext(GameStateContext);

	const [isToggleOpen, setIsToggleOpen] = useState(false);

	const toggleNav = () =>
		setIsToggleOpen(isOpen => !isOpen);

	return (
		<>
			<Navbar
				light={isLightMode}
				dark={!isLightMode}
				expand='md'
				className={classNames(
					styles.reactstrapnav
				)}>
				<NavbarBrand
					className={classNames(
						styles.title,
						isLightMode && styles.light
					)}>
					Word
				</NavbarBrand>

				<NavbarToggler
					onClick={toggleNav}></NavbarToggler>

				<Collapse isOpen={isToggleOpen} navbar>
					<Nav navbar>
						<NavItem>
							<FirebaseTest />
						</NavItem>
						<NavItem>
							<NewGameButton />
						</NavItem>
						<NavItem>
							<LightModeToggle />
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	);
};

export default NavbarOld;
