import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover > * {
        filter: brightness(80%);
    }
`

export const IconWrapper: FunctionComponent<{ style?: React.CSSProperties, onClick?: (event: React.MouseEvent<HTMLDivElement>) => void }> = (props) => {
    return (
        <Wrapper {...props} onClick={props.onClick}>
            {props.children}
        </Wrapper>
    )
}