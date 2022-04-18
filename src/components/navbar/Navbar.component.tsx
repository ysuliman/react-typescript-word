import {
	Collapse,
	Nav,
	NavItem,
	Navbar,
	NavbarBrand,
	NavbarToggler,
} from 'reactstrap';
import { useContext, useState } from 'react';

import FirebaseTest from '../../firebase/FirebaseTest';
import { GameStateContext } from '../../context/GameStateProvider';
import LightModeToggle from './light-mode-toggle/LightModeToggle.component';
import NewGameButton from './new-game-button/NewGameButton.component';
import Title from './title/Title.component';
import classNames from 'classnames';
import styles from './Navbar.module.css';

const NavbarWord = () => {
	const { isLightMode } = useContext(GameStateContext);

	const [isToggleOpen, setIsToggleOpen] = useState(false);

	const toggleNav = () => setIsToggleOpen(isOpen => !isOpen);

	return (
		<>
			<Navbar
				light={isLightMode}
				dark={!isLightMode}
				expand='lg'
				className={classNames(
					styles.navbar,
					isLightMode && styles.light,
					'px-3'
				)}>
				<NavbarToggler onClick={toggleNav}></NavbarToggler>
				<NavbarBrand>
					<Title />
				</NavbarBrand>

				<NewGameButton />

				<Collapse isOpen={isToggleOpen} navbar>
					<Nav navbar>
						<NavItem>
							<LightModeToggle />
						</NavItem>
						<NavItem>
							<FirebaseTest />
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	);
};

export default NavbarWord;
