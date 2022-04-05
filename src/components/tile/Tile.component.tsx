
import styles from './Tile.module.css'
import { TileProps } from './Tile.config'


const Tile = (props: TileProps) => {
    const { letter, rowIndex, wordIndex } = { ...props }


    return (
        <div
            className={styles.tile}
        >
            {letter}
        </div>
    )
}

export default Tile