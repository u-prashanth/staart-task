import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ColumnContainer } from '.'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    width: 100%;
    height: 60px;

    border-bottom: 1px solid #e9eaeb;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #f7f7f7;
`

const ColumnTitle = styled.h2`
    font-family: SFUITextBold;
    font-size: 18px;
    text-align: center;
    color: #3a3b3f;
`

const Body = styled.div`
    width: 100%;
    height: 100%;

    padding: 10px;

    overflow: auto;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    flex: 1;

    & > *
    {
        margin-bottom: 10px;
    }

    & > *:first-child
    {
        margin-bottom: 20px;
    }

    & > *:last-child
    {
        margin-bottom: 0px;
    }


    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: transparant;
    }

    &::-webkit-scrollbar-thumb {
        background: #e7e7e7;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #969696;
    }
`

export const VendorColumn: FunctionComponent<{}> = () => {
    return(
        <ColumnContainer>
            <Wrapper>
                <Header>
                    <ColumnTitle>Component Name</ColumnTitle>
                </Header>

                <Body>

                </Body>
            </Wrapper>
        </ColumnContainer>
    )
}