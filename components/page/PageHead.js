import Close from '@icons/Close'
import styles from './PageHead.module.scss'

const PageHead = ({ page, onClose }) => {
    return (
        <div className={styles.head}>
            <div title={page.title} className={styles.text}>
                {page.title}
            </div>

            <Close role="button" className={styles.close} onClick={onClose} />
        </div>
    )
}

export default PageHead
