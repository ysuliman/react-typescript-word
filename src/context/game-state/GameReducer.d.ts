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

export type GameDispatchAction =
	| INonLetterDispatchAction
	| ILetterDispatchAction
	| IShakeDispatchAction
	| IRemoveAlertDispatchAction;
