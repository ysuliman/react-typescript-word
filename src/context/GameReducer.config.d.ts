interface INonLetterDispatchAction { type: 'SUBMIT' | 'DELETE' }
interface ILetterDispatchAction { type: 'LETTERPRESS'; letter: String; }
interface IShakeDispatchAction { type: 'ENDSHAKE' }


export type GameDispatchAction = INonLetterDispatchAction | ILetterDispatchAction | IGuessModeDispatchAction | IShakeDispatchAction
