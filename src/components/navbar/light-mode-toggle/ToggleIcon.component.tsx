import React from 'react'
import styles from './ToggleIcon.module.css'

interface ToggleIconProps {
    icon: string,
    fill?: string,
    left?: number,
    size?: number
}

const ToggleIcon = ({ icon, fill, left, size }: ToggleIconProps) => {

    return (
        <div className={styles.icon} style={{ color: fill, left: `${left}px`, fontSize: `${size}px` }} > {icon}</ div>
    )
}

export default ToggleIcon