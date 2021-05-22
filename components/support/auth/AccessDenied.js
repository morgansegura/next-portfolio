import { signIn } from 'next-auth/client'
import Heading from '@support/typography/Heading'
import styles from './AccessDenied.module.scss'

const AccessDenied = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Heading size={3}>To continue...</Heading>
                <button onClick={signIn}>Login</button>
            </div>
        </div>
    )
}

export default AccessDenied
