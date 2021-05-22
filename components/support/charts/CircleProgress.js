import styles from './CircleProgress.module.scss'

const CircleProgress = ({ progress, ...props }) => {
    return (
        <svg width="23.5px" height="23.5px" viewBox="0 0 42 42" {...props}>
            <circle
                className={styles.center}
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="#fff"
            ></circle>
            <circle
                className={styles.base}
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="#d2d3d4"
                strokeWidth="3"
            ></circle>

            <circle
                className={styles.progress}
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                strokeWidth="3"
                strokeDasharray={progress + ' ' + (100 - progress)}
                strokeDashoffset="25"
            ></circle>
        </svg>
    )
}

export default CircleProgress
