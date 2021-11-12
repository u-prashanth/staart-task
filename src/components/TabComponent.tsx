import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    
    overflow: hidden;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    border-radius: 8px;
    border: 1px solid #f7d25d;
`

const TabHeader = styled.div`
    width: 100%;
    height: 40px;

    background-color: #fff;
    border-bottom: 1px solid #eaeaeb;

    display: flex;
    align-items: center;
    flex-shrink: 0;

    & > *
    {
        border-right: 1px solid #eaeaeb;
    }

    & > *:last-child
    {
        border: none;
    }
`

const Tab = styled.div<{selected?: boolean}>`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.selected ? '#f7d25d' : '#fff'};

    &:hover
    {
        background-color: ${props => props.selected ? '#f7d25d' : '#fae9b1'};
    }

    cursor: default;
`

const TabTitle = styled.h3`
    font-family: SFUITextBold;
    font-size: 14px;
    color: #3a3b3f;
`

const TabBodyWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;
`


interface ITabData
{
    title: string;
    component: React.ReactNode | JSX.Element
}


interface ITabComponentProps
{
    tabData: ITabData[]
}

export const TabComponent: FunctionComponent<ITabComponentProps> = (props: ITabComponentProps) => {

    const [ tabSelectionIndex, setTabSelectionIndex ] = useState(0);

    return (
        <Wrapper>
            <TabHeader>
                {
                    props.tabData.map((tab, index) => (
                        <Tab key={index} selected={tabSelectionIndex === index} onClick={e => setTabSelectionIndex(index)}>
                            <TabTitle>{tab.title}</TabTitle>
                        </Tab>
                    ))
                }
            </TabHeader>

            <TabBodyWrapper>
                {
                    props.tabData.map((tab, index) => tabSelectionIndex === index && <React.Fragment key={index}>{tab.component}</React.Fragment>)
                }
            </TabBodyWrapper>
        </Wrapper>
    )
}