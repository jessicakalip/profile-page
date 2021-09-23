import Link from 'next/link'
import styled, { css } from 'styled-components'
import { colors } from '../../styles/config/theme'

const Anchor = (props) => {
    const { children, href, as, version } = props

    if (!href) throw new Error("You did not specify the attribute 'href'")

    return href.charAt(0) !== '/' ? (
        <StyledAnchor {...props} rel="noreferrer" version={version}>
            {children}
        </StyledAnchor>
    ) : (
        <Link href={href} as={as} passHref>
            <StyledAnchor version={version}>
                {children}
            </StyledAnchor>
        </Link>
    )
}

const StyledAnchor = styled.a`
    ${({ version }) => version == 'primary' && css`
        transition: color 150ms ease;
        color: ${colors.red};
        align-items: baseline;
        display: inline-flex;
        font-weight: 600;      
        cursor: pointer;

        &:hover {
            color: ${colors.orange2};
        }
    `}

    h1, h2, h3, h4, h5, h6 {
        &:hover{
            text-decoration: underline;
        }
    }
`

export default Anchor
