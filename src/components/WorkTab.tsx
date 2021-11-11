import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { IoIosArrowForward, IoMdTrash } from 'react-icons/all'
import { ActionTextField, Dropdown, IconWrapper, LabeledTextField, LinkStyleButton, TextArea } from '.'
import { CategoryList } from '../categoryList'

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

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const WorkTab: FunctionComponent = () => {
    return (
        <>
            <TabBodyHeader>
                <ActionTextField value="" placeholder="Type here to Add Vendor" onChange={e => console.log(e.target.value)}/>
            </TabBodyHeader>
            <TabBody>
                <WorkCard>
                    <WorkCardHeader>
                        <Text style={{ color: '#fff' }}>Vendor</Text>
                        <IconWrapper>
                            <IoMdTrash fontSize={20} color="#fff"/>
                        </IconWrapper>
                    </WorkCardHeader>

                    <WorkCardBody>
                        <Dropdown options={CategoryList} onChange={e => console.log(e.target.value)}/>
                        <Dropdown options={[ "Work", "Materials", "Work + Materials" ]} onChange={e => console.log}/>

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
                            Vendor Milestones <IoIosArrowForward fontSize={14} color="#e58800"/>
                        </LinkStyleButton>
                    </WorkCardBody>
                </WorkCard>

            </TabBody>
        </>
    )
}