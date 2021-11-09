import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ColumnContainer } from '.'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    overflow: auto;
    overflow-x: hidden;
`

const Header = styled.h2`
    font-family: SFUITextBold;
    font-size: 20px;
    text-align: center;

    margin: 20px;
`

export const UnitsColumn: FunctionComponent<{}> = () => {
    return (
        <ColumnContainer>
            <Wrapper>
                <Header>Add Units</Header>
            </Wrapper>
        </ColumnContainer>
    )
}