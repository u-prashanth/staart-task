import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    border: none;
    background-color: transparent;

    font-family: SFUITextSemiBold;
    font-size: 14px;
    color: #e58800;

    display: flex;
    align-items: center;
    align-self: center;

    cursor: pointer;

    &:hover {
        filter: brightness(80%);
    }
`

export const LinkStyleButton: FunctionComponent<{ onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void }> = (props) => {
    return (
        <Wrapper
            onClick={props.onClick}
        >
            {props.children}
        </Wrapper>
    )
}