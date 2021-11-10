import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: calc(100% / 4 - 32px);
    height: calc(100% - 20px);
    margin: 0px 16px 0px 16px;

    border-radius: 8px;
    border: 1px solid #f7d25d; 

    // #f7d25d

    overflow: hidden;
`

export const ColumnContainer: FunctionComponent<{ children: React.ReactNode }> = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}