import React from 'react'
import styled from 'styled-components'
import { ActionTextField, ColumnContainer, LabeledTextField } from '.'

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
    flex-shrink: 0;

    background-color: #ffd24b;
`

const ColumnTitle = styled.h2`
    font-family: SFUITextBold;
    font-size: 16px;
    text-align: center;
    color: #3a3b3f;
`

const BodyWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;
`

const BodyHeader = styled.div`
    width: 100%;
    height: auto;

    padding: 10px;
    border-bottom: 1px solid #eaeaeb;

    display: flex;
    align-items: center;
    justify-content: center;

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
        margin-bottom: 12px;
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

const TwoColGrid = styled.div`
    width: 100%;

    flex-shrik: 0;

    display: grid;
    grid-template-columns: auto auto;
    column-gap: 10px;
`

export const MilestonesColumn = () => {
    return (
        <ColumnContainer>
            <Wrapper>
                <Header>
                    <ColumnTitle>Milestones</ColumnTitle>
                </Header>

                <BodyWrapper>
                    <BodyHeader>
                        <ActionTextField placeholder="Type to Add Milestone" onChange={e => console.log }/>
                    </BodyHeader>
                    <Body>
                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>

                        <TwoColGrid>
                            <LabeledTextField label="Milestone" placeholder="Milestone Name" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="%" placeholder="Progress" onChange={e => console.log(e.target.value)}/>
                        </TwoColGrid>
                    </Body>
                </BodyWrapper>
            </Wrapper>
        </ColumnContainer>
    )
}