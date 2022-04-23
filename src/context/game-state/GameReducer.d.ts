interface INonLetterDispatchAction {
	type:
		| 'SUBMIT'
		| 'DELETE'
		| 'CHECKWINLOSE'
		| 'NEWGAME'
		| 'ALERTCOMPLETE'
		| 'SHAKECOMPLETE';
}

interface ILetterDispatchAction {
	type: 'LETTERPRESS';
	letter: string;
}

interface IToggleNavDispatchAction {
	type: 'TOGGLE_NAV';
	payload: boolean; // true = expanded, false = collapsed
}

export type GameDispatchAction =
	| INonLetterDispatchAction
	| ILetterDispatchAction
	| IShakeDispatchAction
	| IRemoveAlertDispatchAction
	| IToggleNavDispatchAction;
