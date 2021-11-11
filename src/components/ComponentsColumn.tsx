import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ActionTextField, ColumnContainer, IconWrapper, LabeledTextField, LinkStyleButton, TextArea } from '.'
import { IoIosArrowForward, IoMdTrash } from 'react-icons/all'

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

    & > *
    {
        margin-bottom: 10px;
    }

    & > *:first-child
    {
        margin-bottom: 10px;
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
    border: 1px solid #eaeaeb;

    flex-shrink: 0;

    overflow: hidden;

    background-color: #fff;
`

const UnitComponentHeader = styled.div`
    width: 100%;
    height: 40px;

    background-color: #5a5a5a;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;

    border-bottom: 1px solid #e9eaeb;
`

const UnitComponentBody = styled.div`
    width: 100%;

    padding: 20px 10px;

    border-radius: 0px 0px 8px 8px;

    background-color: #fff;

    flex-shrink: 0;

    & > *
    {
        margin-bottom: 10px;
    }

    & > *:last-child
    {
        margin-bottom: 0px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
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
`

export const ComponentsColumn: FunctionComponent<{}> = () => {
    return (
        <ColumnContainer>
            <Wrapper>
                <Header>
                    <ColumnTitle>Unit 1 - Components</ColumnTitle>
                </Header>

                <BodyWrapper>
                    <BodyHeader>
                        <ActionTextField placeholder="Type here to Add Component" onChange={e => console.log(e.target.value)}/>
                    </BodyHeader>
                    <Body>
                        <UnitComponentWrapper>
                            <UnitComponentHeader>
                                <Text style={{ color: '#fff' }}>Component Name</Text>
                                <IconWrapper>
                                    <IoMdTrash fontSize={20} color="#fff"/>
                                </IconWrapper>
                            </UnitComponentHeader>
                            <UnitComponentBody>
                                <TextArea placeholder="Description of the Component" onChange={e => console.log(e.target.value)}/>
                                
                                <LabeledTextField label="Quantity" placeholder="0" onChange={e => console.log(e.target.value)}/>
                                <LabeledTextField label="Price" placeholder="₹ 0.0" onChange={e => console.log(e.target.value)}/>
                                <LabeledTextField label="Units" placeholder="Ex. Sq.ft, in, cm, kg" onChange={e => console.log(e.target.value)}/>

                                <TotalTextWrapper>
                                    <Text style={{ color: '#868b8f' }}>Total</Text>
                                    <Text style={{ color: '#222327' }}>₹ 4800</Text>
                                </TotalTextWrapper>

                                <LinkStyleButton>
                                    Vendors <IoIosArrowForward fontSize={14} color="#e58800"/>
                                </LinkStyleButton>
                            </UnitComponentBody>
                        </UnitComponentWrapper>

                    </Body>
                </BodyWrapper>
            </Wrapper>
        </ColumnContainer>
    )
}