interface INonLetterDispatchAction {
    type:
    'SUBMIT'
    | 'DELETE'
    | 'CHECKWINLOSE'
    | 'TOGGLELIGHTMODE'
    | 'NEWGAME'
    | 'ALERTCOMPLETE'
    | 'SHAKECOMPLETE'
}

interface ILetterDispatchAction { type: 'LETTERPRESS'; letter: string; }

export type GameDispatchAction = INonLetterDispatchAction | ILetterDispatchAction | IShakeDispatchAction | IRemoveAlertDispatchAction