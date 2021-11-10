import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { ActionTextField, Button, ColumnContainer } from '.'
import { TiDelete } from 'react-icons/all'

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

    background-color: #f7f7f7;
`

const ColumnTitle = styled.h2`
    font-family: SFUITextBold;
    font-size: 18px;
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


const RoomWrapper = styled.div`
    width: 100%;
    height: auto;

    padding: 20px 10px;

    border-radius: 8px;
    border: 1px solid #e9eaeb;

    background-color: #fff;
`

const RoomHeader = styled.h3`
    font-family: SFUITextSemiBold;
    font-size: 16px;
    text-align: left;
    color: #3a3b3f;
    margin-bottom: 14px;
`

const UnitList = styled.ul`
    width: 100%;

    padding: 10px;
    margin-top: 10px;
`

const UnitListItem = styled.li`
    width: 100%;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid #e8e8e8;

    &:last-child
    {
        border: none;
    }

    &:hover
    {
        background-color: #f7d25d;
    }

    transition: all .15s ease;
`

const UnitListItemTitle = styled.h3`

    padding: 10px;
    font-family: SFUITextRegular;
    font-size: 14px;
    text-align: left;
    color: #3a3b3f;
`

const UnitListItemActionButton = styled.div`
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`

export const UnitsColumn: FunctionComponent<{}> = () => {
    return (
        <ColumnContainer>
            <Wrapper>
                <Header>
                    <ColumnTitle>Add Units</ColumnTitle>
                </Header>
                

                <Body>
                    <RoomWrapper>
                        <RoomHeader>Master Bedroom</RoomHeader>

                        <ActionTextField placeholder="Type here to Add Unit" onChange={e => console.log(e.target.value)} />

                        <AnimatePresence>
                            <UnitList>
                                <UnitListItem>
                                    <UnitListItemTitle>Wardrobe</UnitListItemTitle>
                                    <UnitListItemActionButton>
                                        <TiDelete fontSize={22} color="#ff5722"/>
                                    </UnitListItemActionButton>
                                </UnitListItem>

                                <UnitListItem>
                                    <UnitListItemTitle>Bed</UnitListItemTitle>
                                    <UnitListItemActionButton>
                                        <TiDelete fontSize={22} color="#ff5722"/>
                                    </UnitListItemActionButton>
                                </UnitListItem>

                                <UnitListItem>
                                    <UnitListItemTitle>Dressing Table</UnitListItemTitle>
                                    <UnitListItemActionButton>
                                        <TiDelete fontSize={22} color="#ff5722"/>
                                    </UnitListItemActionButton>
                                </UnitListItem>
                            </UnitList>
                        </AnimatePresence>
                    </RoomWrapper>

                    <RoomWrapper>
                        <RoomHeader>Bedroom 1</RoomHeader>

                        <ActionTextField placeholder="Type here to Add Unit" onChange={e => console.log(e.target.value)} />

                        <AnimatePresence>
                            <UnitList>
                                <UnitListItem>
                                    <UnitListItemTitle>Bookshelf</UnitListItemTitle>
                                    <UnitListItemActionButton>
                                        <TiDelete fontSize={22} color="#ff5722"/>
                                    </UnitListItemActionButton>
                                </UnitListItem>
                            </UnitList>
                        </AnimatePresence>
                    </RoomWrapper>

                    <RoomWrapper>
                        <RoomHeader>Kitchen</RoomHeader>

                        <ActionTextField placeholder="Type here to Add Unit" onChange={e => console.log(e.target.value)} />

                        <AnimatePresence>
                            <UnitList>
                                <UnitListItem>
                                    <UnitListItemTitle>Modular Shelfs</UnitListItemTitle>
                                    <UnitListItemActionButton>
                                        <TiDelete fontSize={22} color="#ff5722"/>
                                    </UnitListItemActionButton>
                                </UnitListItem>
                            </UnitList>
                        </AnimatePresence>
                    </RoomWrapper>
                </Body>


                <Footer>
                    <Button style={{ width: '100%' }}>Save</Button>
                    <Button style={{ width: '100%' }}>Start Work</Button>
                </Footer>
            </Wrapper>
        </ColumnContainer>
    )
}