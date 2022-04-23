import App from './App';
import GameReducerProvider from './context/game-state/GameStateProvider';
import IsLightModeProvider from './context/light-mode/LightModeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<IsLightModeProvider>
			<GameReducerProvider>
				<App />
			</GameReducerProvider>
		</IsLightModeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
