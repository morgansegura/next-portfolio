import { useMap } from 'react-use'
import Link from 'next/link'
import Button from '@support/interaction/Button'
import Text from '@support/typography/Text'
import Center from '@support/structure/Center'
import Separator from '@support/structure/Separator'
import TextInput from '@support/form/TextInput'
import FormGroup from '@support/form/FormGroup'
import styles from './RegisterForm.module.scss'

const RegisterForm = () => {
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
                    Create your Learn.bible Account
                </Text>
            </Center>

            <FormGroup>
                <TextInput
                    name="firstName"
                    placeholder="First Name"
                    value={data.firstName}
                    onChange={e => set('firstName', e.target.value)}
                />

                <TextInput
                    name="lastName"
                    placeholder="Last Name"
                    value={data.lastName}
                    onChange={e => set('lastName', e.target.value)}
                />

                <TextInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={e => set('email', e.target.value)}
                />

                <Separator />

                <TextInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={e => set('password', e.target.value)}
                />

                <TextInput
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    value={data.passwordConfirmation}
                    onChange={e => set('passwordConfirmation', e.target.value)}
                />
            </FormGroup>

            <div className={styles.actions}>
                <Link href="/login">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={styles.link}>Create Account</a>
                </Link>

                <Button darkgrey as="button">
                    Next
                </Button>
            </div>
        </form>
    )
}

export default RegisterForm
