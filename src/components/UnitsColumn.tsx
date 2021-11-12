import { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { IoMdOpen, TiDelete } from 'react-icons/all'
import { ActionTextField, Button, ColumnContainer, IconWrapper } from '.'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../redux'
import { IRoom, State } from '../redux/state/reducers/RootReducer'
import ObjectID from 'bson-objectid'

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

    background-color: #fed24b;
`

const ColumnTitle = styled.h2`
    font-family: SFUITextBold;
    font-size: 16px;
    text-align: center;
    color: #3a3b3f;
`

const Body = styled.div`
    width: 100%;
    height; 100%;

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

const Footer = styled.div`
    width: 100%;
    height: 60px;

    padding: 0px 10px;
    border-top: 1px solid #e9eaeb;

    background-color: #f7f7f7;

    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
        margin-right: 10px;
    }

    & > *:last-child {
        margin-right: 0px;
    }
`


const RoomWrapper = styled(motion.div)`
    width: 100%;
    height: auto;

    border-radius: 8px;
    border: 1px solid #e9eaeb;

    overflow: hidden;
    flex-shrink: 0;

    background-color: #fff;
`

const RoomHeader = styled.div`
    width: 100%;
    height: 40px;

    background-color: #5a5a5a;

    display: flex;
    align-items: center;

    padding: 10px;
`

const RoomHeaderTitle = styled.h3`
    font-family: SFUITextSemiBold;
    font-size: 14px;
    text-align: left;
    color: #fff;
`

const RoomBodyWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;
`

const RoomBody = styled.div`
    width: 100%;
    height: 100%;

    padding: 10px;

    overflow: auto;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    flex: 1;
`

const RoomBodyHeader = styled.div`
    width: 100%;
    height: auto;

    padding: 10px;
    border-bottom: 1px solid #eaeaeb;

    display: flex;
    align-items: center;
    justify-content: center;
`

const UnitList = styled(motion.ul)`
    width: 100%;
    margin-top: 10px;
`

const UnitListItem = styled(motion.li)<{ selected?: boolean }>`
    width: 100%;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 10px;

    border-bottom: 1px solid #e8e8e8;
    background-color: ${props => props.selected ? '#fed24b' : 'transparent'};

    &:last-child
    {
        border: none;
    }

    &:hover
    {
        background-color: ${props => props.selected ? '#fed24b' : '#f4f4f4'};
    }

    transition: all .15s ease;
`

const UnitListItemTitle = styled.h3`

    padding-left: 0px;
    font-family: SFUITextRegular;
    font-size: 14px;
    text-align: left;
    color: #3a3b3f;
`



const RoomCard: FunctionComponent<{ room: IRoom }> = (props: { room: IRoom }) => {

    const [ value, setValue ] = useState('');

    const dispatch = useDispatch();

    const { AddUnitAction, RemoveUnitAction, ShowComponentPanelAction, ShowVendorPanelAction, SelectRoomAndUnitID } = bindActionCreators(ActionCreators, dispatch);

    const resetInput = () => {
        setValue('');
    }

    const handleInput = (e: string) => {
        setValue(e)
    }

    const handleSelection = (roomId: string, unitId: string) => {
        SelectRoomAndUnitID({ roomId, unitId });
        ShowComponentPanelAction({ show: true });
        ShowVendorPanelAction({ show: false });
    }

    return (
        <AnimatePresence>
        <RoomWrapper 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <RoomHeader>
                <RoomHeaderTitle>{props.room.name}</RoomHeaderTitle>
            </RoomHeader>

            <RoomBodyWrapper>
                <RoomBodyHeader>
                    <ActionTextField
                        value={value}
                        placeholder="Type here to Add Unit" 
                        onChange={e => handleInput(e.target.value)}
                        onKeyDown={e => {
                            if(e.key === 'Enter' && value !== '')
                            {
                                AddUnitAction({ roomId: props.room.roomId, data: { unitId: new ObjectID().toHexString(), name: value, components: [] } })
                                resetInput();
                            }
                        }}
                        onClick={e => {
                            AddUnitAction({ roomId: props.room.roomId, data: { unitId: new ObjectID().toHexString(), name: value, components: [] } })
                            resetInput();
                        }}
                    />
                </RoomBodyHeader>

                <RoomBody>
                    {
                        props.room.units?.length ?
                        <UnitList>
                            {
                                props.room.units?.map((unit, index) => (
                                    
                                    <UnitListItem
                                        key={unit.unitId}
                                        initial={{ borderBottomColor: 'transparent' }}
                                        animate={{ borderBottomColor: '#e8e8e8' }}
                                        exit={{ borderBottomColor: 'transparent' }}
                                        transition={{ duration: 0.2, ease: 'easeIn' }}
                                        onClick={e => {
                                            handleSelection(props.room.roomId, unit.unitId)
                                        }}
                                    >
                                        <UnitListItemTitle>{unit.name}</UnitListItemTitle>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 80 }}>
                                            <IconWrapper
                                                onClick={e => {
                                                    handleSelection(props.room.roomId, unit.unitId)
                                                }}
                                            >
                                                <IoMdOpen fontSize={20} color="#212121"/>
                                            </IconWrapper>
                                            <IconWrapper
                                                onClick={e => {
                                                    RemoveUnitAction({ roomId: props.room.roomId, unitId: unit.unitId })
                                                }}
                                            >
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </div>
                                    </UnitListItem>
                                    
                                ))
                            }
                        </UnitList>

                        :

                        <div style={{ width: '100%' }}>
                            <p style={{ fontSize: 14, fontFamily: 'SFUITextRegular', color: "#aaaeb1", textAlign: 'center', padding: 10 }}>No Units</p>
                        </div>
                    }
                </RoomBody>
            </RoomBodyWrapper>
        </RoomWrapper>
        </AnimatePresence>
    )
}



export const UnitsColumn: FunctionComponent<{}> = () => {
    const { rooms } = useSelector((state: State) => state.rooms);

    return (
        <ColumnContainer>
            <Wrapper>
                <Header>
                    <ColumnTitle>Add Units</ColumnTitle>
                </Header>
                

                <Body>
                    <AnimatePresence>
                        {
                            rooms?.map(room => (
                                <RoomCard key={room.roomId} room={room}/>
                            ))
                        }
                    </AnimatePresence>
                </Body>


                <Footer>
                    <Button style={{ width: '100%' }}>Save</Button>
                    <Button style={{ width: '100%' }}>Start Work</Button>
                </Footer>
            </Wrapper>
        </ColumnContainer>
    )
}