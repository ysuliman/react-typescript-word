interface INonLetterDispatchAction { type: 'SUBMIT' | 'DELETE' | 'CHECKWINLOSE' | 'TOGGLELIGHTMODE' }
interface ILetterDispatchAction { type: 'LETTERPRESS'; letter: string; }
interface IRemoveAlertDispatchAction { type: 'REMOVEALERT' }
interface IShakeDispatchAction { type: 'ENDSHAKE' }


export type GameDispatchAction = INonLetterDispatchAction | ILetterDispatchAction | IShakeDispatchAction | IRemoveAlertDispatchAction