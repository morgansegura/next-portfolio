import Text from './Text'

const headingTextSize = {
    1: 800,
    2: 700,
    3: 600,
    4: 700,
    5: 800,
    6: 900,
}

const Heading = ({ size, ...props }) => {
    const textSize = headingTextSize[size]

    return <Text size={textSize} as={'h' + size} {...props} />
}

export default Heading
