import ObjectID from 'bson-objectid'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { IoMdTrash } from 'react-icons/all'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { ActionTextField, ColumnContainer, LabeledTextField } from '.'
import { ActionCreators } from '../redux'
import { IMilestone, State } from '../redux/state/reducers/RootReducer'

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

const ThreeColGrid = styled.div`
    width: 100%;

    flex-shrik: 0;

    display: grid;
    grid-template-columns: auto auto 40px;
    column-gap: 10px;
    align-items: center;
`

const IconWrapper = styled.div`
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    & > *:hover {
        filter: brightness(80%);
    }
`


const Milestone: FunctionComponent<{ milestone: IMilestone }> = (props: { milestone: IMilestone }) => {

    const [ milestoneName, setMilestoneName ] = useState('');
    const [ milestoneProgress, setMilestoneProgress ] = useState('');

    const dispatch = useDispatch();

    const { DeleteMilestoneAction } = bindActionCreators(ActionCreators, dispatch);

    const handleMilestoneNameInput = (e: string) => {
        setMilestoneName(e)
    }

    const handleMilestoneProgressInput = (e: string) => {
        setMilestoneProgress(e)
    }

    useEffect(() => {
        setMilestoneName(props.milestone.milestoneName! || '');
        setMilestoneProgress(props.milestone.progress!.toString()! || '');
    }, [props.milestone])

    return (
        <ThreeColGrid>
            <LabeledTextField 
                value={milestoneName}
                label="Milestone" 
                placeholder="Milestone Name" 
                onChange={e => handleMilestoneNameInput(e.target.value)}
            />

            <LabeledTextField 
                type="number"
                value={milestoneProgress}
                label="%" 
                placeholder="Progress" 
                onChange={e => handleMilestoneProgressInput(e.target.value)}
            />

            <IconWrapper onClick={e => DeleteMilestoneAction({ milestoneId: props.milestone.milestoneId })}>
                <IoMdTrash fontSize={22} color="red" style={{ marginTop: 24 }} />
            </IconWrapper>
        </ThreeColGrid>
    )
}


export const MilestonesColumn: FunctionComponent<{}> = () => {

    const [ milestoneName, setMilestoneName ] = useState('');

    const { rooms, selectedRoomId, selectedUnitId, selectedComponentId, selectedWorkId } = useSelector((state: State) => state.rooms);

    const dispatch = useDispatch();

    const { AddMilestoneAction } = bindActionCreators(ActionCreators, dispatch);

    const resetInput = () => {
        setMilestoneName('');
    }

    const handleInput = (e: string) => {
        setMilestoneName(e)
    }

    return (
        <ColumnContainer>
            <Wrapper>
                <Header>
                    <ColumnTitle>Milestones</ColumnTitle>
                </Header>

                <BodyWrapper>
                    <BodyHeader>
                        <ActionTextField 
                            value={milestoneName}
                            placeholder="Type here to Create Milestone" 
                            onChange={e => handleInput(e.target.value)}
                            onKeyDown={e => {
                                if(e.key === 'Enter' && milestoneName !== '')
                                {
                                    AddMilestoneAction({ data: { milestoneId: new ObjectID().toHexString(), milestoneName, progress: 0 } })
                                    resetInput();
                                }
                            }}
                            onClick={e => {
                                AddMilestoneAction({ data: { milestoneId: new ObjectID().toHexString(), milestoneName, progress: 0 } })
                                resetInput();
                            }}
                        />
                    </BodyHeader>
                    <Body>

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
                                                        if(work.workId === selectedWorkId)
                                                        {
                                                            return work.milestones?.map(milestone => <Milestone key={milestone.milestoneId} milestone={milestone}/>)
                                                        }
                                                        return <React.Fragment key={work.workId}/>
                                                    })
                                                }
                                                return <React.Fragment key={component.componentId}/>
                                            })
                                        }
                                        return <React.Fragment key={unit.unitId}/>
                                    })
                                }
                                return <React.Fragment key={room.roomId}/>
                            })
                        }
                    </Body>
                </BodyWrapper>
            </Wrapper>
        </ColumnContainer>
    )
}