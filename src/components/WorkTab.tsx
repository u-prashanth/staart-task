import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowForward, IoMdTrash } from 'react-icons/all'
import { ActionTextField, Dropdown, IconWrapper, LabeledTextField, LinkStyleButton, TextArea } from '.'
import { CategoryList } from '../categoryList'
import { useDispatch, useSelector } from 'react-redux'
import { IWork, State } from '../redux/state/reducers/RootReducer'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../redux'
import ObjectID from 'bson-objectid'

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


const WorkCardWrapper = styled.div`
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


const WorkCard: FunctionComponent<{ work: IWork }> = (props: { work: IWork }) => {

    const [ workType, setWorkType ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ quantity, setQuantity ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ gst, setGst ] = useState('');
    const [ unit, setUnit ] = useState('');

    const handleWorkType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setWorkType(e.target.value);
    }

    const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    }

    const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }
    
    const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(e.target.value);
    }

    const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    }

    const handleGst = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGst(e.target.value);
    }

    const handleUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUnit(e.target.value);
    }


    useEffect(() => {
        setWorkType(props.work.workType! || '');
        setCategory(props.work.category! || '');
        setDescription(props.work.description! || '');
        setQuantity(props.work.quantity?.toString()! || '');
        setPrice(props.work.price?.toString()! || '');
        setGst(props.work.gst?.toString()! || '');
        setUnit(props.work.unit! || '');
    }, [props.work])


    const dispatch = useDispatch();
    const { ShowMilestonePanelAction, SelectWorkIDAction } = bindActionCreators(ActionCreators, dispatch);

    return (
        <WorkCardWrapper>
            <WorkCardHeader>
                <Text style={{ color: '#fff' }}>{props.work.vendorName}</Text>
                <IconWrapper>
                    <IoMdTrash fontSize={20} color="#fff"/>
                </IconWrapper>
            </WorkCardHeader>

            <WorkCardBody>
                <Dropdown 
                    value={workType}
                    options={[ "Work", "Materials", "Work + Materials" ]} 
                    onChange={e => handleWorkType(e)}/>
                
                <Dropdown 
                    value={category}
                    options={CategoryList} 
                    onChange={e => handleCategory(e)}/>

                <TextArea
                    value={description}
                    placeholder="Description" 
                    onChange={e => handleDescription(e)}/>

                <FieldGrid>
                    <LabeledTextField 
                        value={quantity}
                        label="Quantity" 
                        placeholder="0" 
                        onChange={e => handleQuantity(e)}
                    />

                    <LabeledTextField 
                        value={unit}
                        label="Units" 
                        placeholder="Ex. sq.ft, in, cm, kg" 
                        onChange={e => handleUnit(e)}
                    />

                    <LabeledTextField 
                        value={price}
                        label="Price" 
                        placeholder="₹ 0.0" 
                        onChange={e => handlePrice(e)}
                    />

                    <LabeledTextField 
                        value={gst}
                        label="GST" 
                        placeholder="₹ 0.0" 
                        onChange={e => handleGst(e)}
                    />
                </FieldGrid>

                <TotalTextWrapper>
                    <Text style={{ color: '#868b8f' }}>Total</Text>
                    <Text style={{ color: '#222327' }}>₹ {(parseInt(quantity || '0') * parseFloat(price || '0')) + parseFloat(gst || '0')}</Text>
                </TotalTextWrapper>

                <LinkStyleButton
                    onClick={e => {
                        SelectWorkIDAction({ workId: props.work.workId });
                        ShowMilestonePanelAction({ show: true });
                    }}
                >
                    Vendor Milestones <IoIosArrowForward fontSize={14} color="#e58800"/>
                </LinkStyleButton>
            </WorkCardBody>
        </WorkCardWrapper>
    )
}


export const WorkTab: FunctionComponent = () => {

    const [ vendorName, setVendorName ] = useState('');

    const dispatch = useDispatch();

    const { AddWorkAction } = bindActionCreators(ActionCreators, dispatch);

    const { rooms, selectedRoomId, selectedUnitId, selectedComponentId } = useSelector((state: State) => state.rooms);

    const resetInput = () => {
        setVendorName('');
    }

    const handleInput = (e: string) => {
        setVendorName(e)
    }

    return (
        <>
            <TabBodyHeader>
                <ActionTextField 
                    value={vendorName} 
                    placeholder="Type here to Add Vendor" 
                    onChange={e => handleInput(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === 'Enter' && vendorName !== '')
                        {
                            AddWorkAction({ data: { workId: new ObjectID().toHexString(), vendorName: vendorName, milestones: [] } })
                            resetInput();
                        }
                    }}
                    onClick={e => {
                        AddWorkAction({ data: { workId: new ObjectID().toHexString(), vendorName: vendorName, milestones: [] } })
                        resetInput();
                    }}
                />
            </TabBodyHeader>
            <TabBody>
                
                {
                    rooms?.map(room => {
                        if(room.roomId === selectedRoomId)
                        {
                            return room.units?.map(unit => {
                                if(unit.unitId === selectedUnitId)
                                {
                                    return unit.components?.map(component => {
                                        if(component.componentId === selectedComponentId)
                                        {
                                            return component.vendor?.works!.map(work => {
                                                return <WorkCard key={work.workId} work={work}/>
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }

            </TabBody>
        </>
    )
}