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
interface ILightModeDispatchAction {
	type: 'LIGHTMODE';
	payload: boolean;
}

export type GameDispatchAction =
	| ILightModeDispatchAction
	| INonLetterDispatchAction
	| ILetterDispatchAction
	| IShakeDispatchAction
	| IRemoveAlertDispatchAction;
