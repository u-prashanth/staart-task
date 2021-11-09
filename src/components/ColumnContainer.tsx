import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: calc(100% / 4);
    height: calc(100% - 20px);
    margin: 0px 16px 0px 16px;

    border-radius: 8px;
    border: 1px solid #e9eaeb;

    background-color: #fff;
`

export const ColumnContainer: FunctionComponent<{}> = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}