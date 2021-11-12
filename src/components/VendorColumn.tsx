import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ColumnContainer, MaterialTab, TabComponent, WorkTab } from '.'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    width: 100%;
    height: 50px;

    border-bottom: 1px solid #e9eaeb;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ffd24b;
`

const ColumnTitle = styled.h2`
    font-family: SFUITextBold;
    font-size: 16px;
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
    flex-shrink: 0;

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
                    <ColumnTitle>Vendors</ColumnTitle>
                </Header>

                <Body>
                    <TabComponent 
                        tabData={[
                            {
                                title: 'Work',
                                component: <WorkTab />
                            },
                            {
                                title: 'Materials',
                                component: <MaterialTab />
                            }
                        ]}
                    />
                </Body>
            </Wrapper>
        </ColumnContainer>
    )
}