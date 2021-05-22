import Text from '@support/typography/Text'
import styles from './Disclaimer.module.scss'

const Disclaimer = ({ children, className: givenClassName, ...props }) => {
    const className = givenClassName
        ? styles.text + ' ' + givenClassName
        : styles.text

    return (
        <Text size={0} className={className} {...props}>
            {children}
        </Text>
    )
}

export default Disclaimer
