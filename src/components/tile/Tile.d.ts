import { LetterStatus } from "../../context/InitialGameState"

export interface TileProps {
    letter: string,
    isActive: boolean,
    letterStatus: LetterStatus,
    letterIndex: number,
    letterToFlipIndex: number,
    setLetterToFlipInd: React.Dispatch<React.SetStateAction<number>>,
    shake: boolean,
    dance: boolean,
    isLastLetter: boolean
}
