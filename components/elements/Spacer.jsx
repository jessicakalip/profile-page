import styled from 'styled-components'

const Spacer = ({ size }) => <StyledSpacer size={size} />

const sizes = {
    sm: '16px',
    md: '32px',
    lg: '40px'
}

const StyledSpacer = styled.div`
    height: ${({ size }) => sizes[size]};
`

export default Spacer
