
import styles from './Tile.module.css'
import { TileProps } from './Tile.config'


const Tile = (props: TileProps) => {
    const { wordIndex } = { ...props }


    return (
        <div
            className={styles.tile}
        >
            {wordIndex}
        </div>
    )
}

export default Tile