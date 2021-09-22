import Link from 'next/link'
import styled, { css } from 'styled-components'

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
        align-items: baseline;
        display: inline-flex;
        font-weight: 600;      
        color: #6AB1A8;
        cursor: pointer;

        &:hover {
            color: #D3EEE1;
        }
    `}
`

export default Anchor
