import { useMap } from 'react-use'
import Link from 'next/link'
import Center from '@support/structure/Center'
import Button from '@support/interaction/Button'
import Text from '@support/typography/Text'
import TextInput from '@support/form/TextInput'
import FormGroup from '@support/form/FormGroup'
import styles from './LoginForm.module.scss'

const LoginForm = () => {
    const [data, { set }] = useMap({
        email: '',
        password: '',
    })

    const handleSubmit = e => {
        e.preventDefault()

        console.log('submit')
    }

    return (
        <form onSubmit={handleSubmit}>
            <Center>
                <Text size={250} className={styles.intro}>
                    Login with your Learn.bible Account
                </Text>
            </Center>

            <FormGroup>
                <TextInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={e => set('email', e.target.value)}
                />

                <TextInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={e => set('password', e.target.value)}
                />
            </FormGroup>

            <div className={styles.actions}>
                <Link href="/register">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={styles.link}>Create Account</a>
                </Link>

                <Button primary as="button">
                    Next
                </Button>
            </div>
        </form>
    )
}

export default LoginForm
