import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { ActionTextField, Button, ColumnContainer, IconWrapper } from '.'
import { TiDelete } from 'react-icons/all'

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


const RoomWrapper = styled.div`
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

const UnitList = styled.ul`
    width: 100%;
    margin-top: 10px;
`

const UnitListItem = styled.li`
    width: 100%;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 10px;

    border-bottom: 1px solid #e8e8e8;

    &:last-child
    {
        border: none;
    }

    &:hover
    {
        background-color: #f4f4f4;
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
                        <RoomHeader><RoomHeaderTitle>Master Bedroom</RoomHeaderTitle></RoomHeader>

                        <RoomBodyWrapper>
                            <RoomBodyHeader>
                                <ActionTextField placeholder="Type here to Add Unit" onChange={e => console.log(e.target.value)} />
                            </RoomBodyHeader>

                            <RoomBody>
                                <AnimatePresence>
                                    <UnitList>
                                        <UnitListItem>
                                            <UnitListItemTitle>Wardrobe</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        <UnitListItem>
                                            <UnitListItemTitle>Bed</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        <UnitListItem>
                                            <UnitListItemTitle>Dressing Table</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        
                                    </UnitList>
                                </AnimatePresence>
                            </RoomBody>
                        </RoomBodyWrapper>
                    </RoomWrapper>


                    <RoomWrapper>
                        <RoomHeader><RoomHeaderTitle>Master Bedroom</RoomHeaderTitle></RoomHeader>

                        <RoomBodyWrapper>
                            <RoomBodyHeader>
                                <ActionTextField placeholder="Type here to Add Unit" onChange={e => console.log(e.target.value)} />
                            </RoomBodyHeader>

                            <RoomBody>
                                <AnimatePresence>
                                    <UnitList>
                                        <UnitListItem>
                                            <UnitListItemTitle>Wardrobe</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        <UnitListItem>
                                            <UnitListItemTitle>Bed</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        <UnitListItem>
                                            <UnitListItemTitle>Dressing Table</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        
                                    </UnitList>
                                </AnimatePresence>
                            </RoomBody>
                        </RoomBodyWrapper>
                    </RoomWrapper>



                    <RoomWrapper>
                        <RoomHeader><RoomHeaderTitle>Master Bedroom</RoomHeaderTitle></RoomHeader>

                        <RoomBodyWrapper>
                            <RoomBodyHeader>
                                <ActionTextField placeholder="Type here to Add Unit" onChange={e => console.log(e.target.value)} />
                            </RoomBodyHeader>

                            <RoomBody>
                                <AnimatePresence>
                                    <UnitList>
                                        <UnitListItem>
                                            <UnitListItemTitle>Wardrobe</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        <UnitListItem>
                                            <UnitListItemTitle>Bed</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        <UnitListItem>
                                            <UnitListItemTitle>Dressing Table</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        
                                    </UnitList>
                                </AnimatePresence>
                            </RoomBody>
                        </RoomBodyWrapper>
                    </RoomWrapper>



                    <RoomWrapper>
                        <RoomHeader><RoomHeaderTitle>Master Bedroom</RoomHeaderTitle></RoomHeader>

                        <RoomBodyWrapper>
                            <RoomBodyHeader>
                                <ActionTextField placeholder="Type here to Add Unit" onChange={e => console.log(e.target.value)} />
                            </RoomBodyHeader>

                            <RoomBody>
                                <AnimatePresence>
                                    <UnitList>
                                        <UnitListItem>
                                            <UnitListItemTitle>Wardrobe</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        <UnitListItem>
                                            <UnitListItemTitle>Bed</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        <UnitListItem>
                                            <UnitListItemTitle>Dressing Table</UnitListItemTitle>
                                            <IconWrapper>
                                                <TiDelete fontSize={22} color="#ff5722"/>
                                            </IconWrapper>
                                        </UnitListItem>

                                        
                                    </UnitList>
                                </AnimatePresence>
                            </RoomBody>
                        </RoomBodyWrapper>
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