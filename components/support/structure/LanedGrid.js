import Lane from './Lane'
import Grid from './Grid'

const LanedGrid = ({ children, ...props }) => {
    return (
        <Lane {...props}>
            <Grid>{children}</Grid>
        </Lane>
    )
}

export default LanedGrid
