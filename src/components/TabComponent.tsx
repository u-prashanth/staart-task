import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward, IoMdTrash } from 'react-icons/all'
import { ActionTextField, Dropdown, LabeledTextField, TextArea } from '.'

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

const TabBodyHeader = styled.div`
    width: 100%;
    height: auto;

    padding: 10px;
    border-bottom: 1px solid #eaeaeb;

    diplay: flex;
    align-items: center;
    justify-content: center;

`

const TabBody = styled.div`
    width: 100%;
    height: 100%;

    padding: 10px;

    overflow: auto;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    flex: 1;

    & > * {
        margin-bottom: 10px;
    }

    & > *:last-child {
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


const WorkCard = styled.div`
    width: 100%;

    border-radius: 8px;
    border: 1px solid #e9eaeb;

    overflow: hidden;

    flex-shrink: 0;
`

const WorkCardHeader = styled.div`
    width: 100%;
    height: 40px;

    padding: 0px 10px;

    border-bottom: 1px solid #e9eaeb;
    background-color: #5a5a5a;

    display: flex;
    align-items: center;
    justify-content: space-between;

`

const WorkCardBody = styled.div`
    width: 100%;

    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    flex-shrink: 0;

    & > * {
        margin-bottom: 10px;
    }   
`

const Text = styled.div`
    font-family: SFUITextSemiBold;
    font-size: 14px;
    // text-align: center;
`

const FieldGrid = styled.div`
    width: 100%;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto;
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

const LinkStyleButton = styled.button`
    border: none;
    background-color: transparent;

    font-family: SFUITextSemiBold;
    font-size: 14px;
    color: #e58800;

    display: flex;
    align-items: center;
    align-self: center;

    cursor: pointer;
`

const TabData = [
    {
        title: 'Work',
        selected: true
    },
    {
        title: 'Component',
        selected: false
    }
]


export const TabComponent = () => {
    return (
        <Wrapper>
            <TabHeader>
                {
                    TabData.map(tab => (
                        <Tab selected={tab.selected}>
                            <TabTitle>{tab.title}</TabTitle>
                        </Tab>
                    ))
                }
            </TabHeader>

            <TabBodyWrapper>
                <TabBodyHeader>
                    <ActionTextField placeholder="Type here to Add Vendor" onChange={e => console.log(e.target.value)}/>
                </TabBodyHeader>
                <TabBody>
                    <WorkCard>
                        <WorkCardHeader>
                            <Text style={{ color: '#fff' }}>Vendor</Text>
                            <IoMdTrash fontSize={20} color="#fff"/>
                        </WorkCardHeader>

                        <WorkCardBody>
                            <Dropdown />
                            <Dropdown />
                            <TextArea placeholder="Description" onChange={e => console.log(e.target.value)}/>
                            <FieldGrid>
                                <LabeledTextField label="Quantity" placeholder="0" onChange={e => console.log(e.target.value)}/>
                                <LabeledTextField label="Units" placeholder="Ex. Sq.ft, in, cm, kg" onChange={e => console.log(e.target.value)}/>
                                <LabeledTextField label="Price" placeholder="₹ 0.0" onChange={e => console.log(e.target.value)}/>
                                <LabeledTextField label="GST" placeholder="₹ 0.0" onChange={e => console.log(e.target.value)}/>
                            </FieldGrid>

                            <TotalTextWrapper>
                                <Text style={{ color: '#868b8f' }}>Total</Text>
                                <Text style={{ color: '#222327' }}>₹ 4800</Text>
                            </TotalTextWrapper>

                            <LinkStyleButton>
                                Vendor Milestone <IoIosArrowForward fontSize={14} color="#e58800"/>
                            </LinkStyleButton>
                        </WorkCardBody>
                    </WorkCard>


                    <WorkCard>
                        <WorkCardHeader>
                            <Text style={{ color: '#fff' }}>Vendor</Text>
                            <IoMdTrash fontSize={20} color="#fff"/>
                        </WorkCardHeader>

                        <WorkCardBody>
                            <Dropdown />
                            <Dropdown />
                            <TextArea placeholder="Description" onChange={e => console.log(e.target.value)}/>
                            <FieldGrid>
                                <LabeledTextField label="Quantity" placeholder="0" onChange={e => console.log(e.target.value)}/>
                                <LabeledTextField label="Units" placeholder="Ex. Sq.ft, in, cm, kg" onChange={e => console.log(e.target.value)}/>
                                <LabeledTextField label="Price" placeholder="₹ 0.0" onChange={e => console.log(e.target.value)}/>
                                <LabeledTextField label="GST" placeholder="₹ 0.0" onChange={e => console.log(e.target.value)}/>
                            </FieldGrid>

                            <TotalTextWrapper>
                                <Text style={{ color: '#868b8f' }}>Total</Text>
                                <Text style={{ color: '#222327' }}>₹ 4800</Text>
                            </TotalTextWrapper>

                            <LinkStyleButton>
                                Vendor Milestone <IoIosArrowForward fontSize={14} color="#e58800"/>
                            </LinkStyleButton>
                        </WorkCardBody>
                    </WorkCard>


                    <WorkCard>
                        <WorkCardHeader>
                            <Text style={{ color: '#fff' }}>Vendor</Text>
                            <IoMdTrash fontSize={20} color="#fff"/>
                        </WorkCardHeader>

                        <WorkCardBody>
                            <Dropdown />
                            <Dropdown />
                            <TextArea placeholder="Description" onChange={e => console.log(e.target.value)}/>
                            <FieldGrid>
                                <LabeledTextField label="Quantity" placeholder="0" onChange={e => console.log(e.target.value)}/>
                                <LabeledTextField label="Units" placeholder="Ex. Sq.ft, in, cm, kg" onChange={e => console.log(e.target.value)}/>
                                <LabeledTextField label="Price" placeholder="₹ 0.0" onChange={e => console.log(e.target.value)}/>
                                <LabeledTextField label="GST" placeholder="₹ 0.0" onChange={e => console.log(e.target.value)}/>
                            </FieldGrid>

                            <TotalTextWrapper>
                                <Text style={{ color: '#868b8f' }}>Total</Text>
                                <Text style={{ color: '#222327' }}>₹ 4800</Text>
                            </TotalTextWrapper>

                            <LinkStyleButton>
                                Vendor Milestone <IoIosArrowForward fontSize={14} color="#e58800"/>
                            </LinkStyleButton>
                        </WorkCardBody>
                    </WorkCard>

                </TabBody>
            </TabBodyWrapper>
        </Wrapper>
    )
}