interface INonLetterDispatchAction { type: 'SUBMIT' | 'DELETE' | 'CHECKWINLOSE' | 'TOGGLELIGHTMODE' | 'NEWGAME' }
interface ILetterDispatchAction { type: 'LETTERPRESS'; letter: string; }
interface IRemoveAlertDispatchAction { type: 'ALERTCOMPLETE' }
interface IShakeDispatchAction { type: 'SHAKECOMPLETE' }


export type GameDispatchAction = INonLetterDispatchAction | ILetterDispatchAction | IShakeDispatchAction | IRemoveAlertDispatchAction