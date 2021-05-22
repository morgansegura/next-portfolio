import styles from './LineProgress.module.scss'

const LineProgress = ({ progress, ...props }) => {
    return (
        <>
            <div className={styles.base} {...props}>
                <div
                    className={styles.progress}
                    style={{ width: `${progress}%` }}
                />
            </div>
        </>
    )
}

export default LineProgress
