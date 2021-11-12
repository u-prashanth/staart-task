import ObjectID from 'bson-objectid'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { IoMdTrash } from 'react-icons/all'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { ActionTextField, Dropdown, IconWrapper, LabeledTextField, TextArea } from '.'
import { MaterialsList } from '../materialsList'
import { ActionCreators } from '../redux'
import { IMaterial, State } from '../redux/state/reducers/RootReducer'

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


const MaterialCardWrapper = styled.div`
    width: 100%;

    border-radius: 8px;
    border: 1px solid #e9eaeb;

    overflow: hidden;

    flex-shrink: 0;
`

const MaterialCardHeader = styled.div`
    width: 100%;
    height: 40px;

    padding: 0px 10px;

    border-bottom: 1px solid #e9eaeb;
    background-color: #5a5a5a;

    display: flex;
    align-items: center;
    justify-content: space-between;

`

const MaterialCardBody = styled.div`
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


const MaterialCard: FunctionComponent<{ material: IMaterial }> = (props: { material: IMaterial }) => {

    const [ materialList, setMaterialList ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ quantity, setQuantity ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ gst, setGst ] = useState('');
    const [ unit, setUnit ] = useState('');

    const handleMaterialListSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMaterialList(e.target.value);
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
        setMaterialList(props.material.materialList! || '');
        setDescription(props.material.description! || '');
        setQuantity(props.material.quantity?.toString()! || '');
        setPrice(props.material.price?.toString()! || '');
        setGst(props.material.gst?.toString()! || '');
        setUnit(props.material.unit! || '');
    }, [props.material])

    return (
        <MaterialCardWrapper>
            <MaterialCardHeader>
                <Text style={{ color: '#fff' }}>{props.material.name}</Text>
                <IconWrapper>
                    <IoMdTrash fontSize={20} color="#fff"/>
                </IconWrapper>
            </MaterialCardHeader>

            <MaterialCardBody>
                <Dropdown
                    value={materialList}
                    options={MaterialsList}
                    onChange={e => handleMaterialListSelection(e)}/>

                <TextArea
                    value={description}
                    placeholder="Description" 
                    onChange={e => handleDescription(e)}
                />

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
            </MaterialCardBody>
        </MaterialCardWrapper>
    )
}


export const MaterialTab: FunctionComponent = () => {

    const [ materialName, setMaterialName ] = useState('');
    const { rooms, selectedRoomId, selectedUnitId, selectedComponentId } = useSelector((state: State) => state.rooms);

    const dispatch = useDispatch();

    const { ShowMilestonePanelAction, AddMaterialAction } = bindActionCreators(ActionCreators, dispatch);


    useEffect(() => {
        ShowMilestonePanelAction({ show: false });
    })

    useEffect(() => {

    }, [selectedComponentId])

    const resetInput = () => {
        setMaterialName('');
    }

    const handleInput = (e: string) => {
        setMaterialName(e)
    }

    return (
        <>
            <TabBodyHeader>
                <ActionTextField 
                    value={materialName}
                    placeholder="Type here to Add Material" 
                    onChange={e => handleInput(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === 'Enter' && materialName !== '')
                        {
                            AddMaterialAction({ data: { materialId: new ObjectID().toHexString(), name: materialName } })
                            resetInput();
                        }
                    }}
                    onClick={e => {
                        AddMaterialAction({ data: { materialId: new ObjectID().toHexString(), name: materialName } })
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
                                            return component.vendor?.materials!.map(material => {
                                                return <MaterialCard key={material.materialId} material={material}/>
                                            })
                                        }
                                        return <React.Fragment />
                                    })
                                }
                                return <React.Fragment />
                            })
                        }
                        return <React.Fragment />
                    })
                }
            </TabBody>
        </>
    )
}