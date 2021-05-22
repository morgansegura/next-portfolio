/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.text}>
                &copy; 2020 Organization | Powered by Learn.bible.
            </div>

            <div className={styles.links}>
                <Link href="/terms">
                    <a className={styles.link}>Terms of Use</a>
                </Link>
                <Link href="/privacy">
                    <a className={styles.link}>Privacy Policy</a>
                </Link>
            </div>
        </div>
    )
}

export default Footer
