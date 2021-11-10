import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ActionTextField, ColumnContainer, LabeledTextField, TextArea } from '.'

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

    background-color: #f7d25d;
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

const UnitComponentWrapper = styled.div`
    width: 100%;
    height: auto;

    border-radius: 8px;
    border: 1px solid #ffb64c;

    overflow: hidden;

    background-color: #fff;
`

const UnitComponentHeader = styled.div`
    width: 100%;
    height: 40px;

    background-color: #ffb64c;

    display: flex;
    align-items: center;
    padding-left: 10px;

    border-bottom: 1px solid #e9eaeb;
`

const UnitComponentBody = styled.div`
    width: 100%;

    padding: 20px 10px;

    border-radius: 0px 0px 8px 8px;

    background-color: #fff;

    & > *
    {
        margin-bottom: 10px;
    }

    & > *:last-child
    {
        margin-bottom: 0px;
    }
`

const TotalTextWrapper = styled.div`
    width: 100%;
    height: 60px;

    padding: 10px;
    margin-top: 20px;

    border-top: 1px solid #e8e8e8;
    // border-bottom: 1px solid #e8e8e8;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Text = styled.div`
    font-family: SFUITextSemiBold;
    font-size: 14px;
    // text-align: center;
`

export const ComponentsColumn: FunctionComponent<{}> = () => {
    return (
        <ColumnContainer>
            <Wrapper>
                <Header>
                    <ColumnTitle>Unit 1</ColumnTitle>
                </Header>

                <Body>
                    <ActionTextField placeholder="Type to Add Component" onChange={e => console.log(e.target.value)}/>

                    <UnitComponentWrapper>
                        <UnitComponentHeader>
                            <Text>Component Name</Text>
                        </UnitComponentHeader>
                        <UnitComponentBody>
                            <TextArea placeholder="Description of the Component" onChange={e => console.log(e.target.value)}/>
                            
                            <LabeledTextField label="Quantity" placeholder="Quantity of the Component" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="Price" placeholder="Price of the Component" onChange={e => console.log(e.target.value)}/>
                            <LabeledTextField label="Units" placeholder="Unit of Measurement" onChange={e => console.log(e.target.value)}/>

                            <TotalTextWrapper>
                                <Text style={{ color: '#868b8f' }}>Total</Text>
                                <Text style={{ color: '#222327' }}>₹ 4800</Text>
                            </TotalTextWrapper>
                        </UnitComponentBody>
                    </UnitComponentWrapper>

                </Body>
            </Wrapper>
        </ColumnContainer>
    )
}