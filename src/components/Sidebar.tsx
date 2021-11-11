import React, { FunctionComponent } from 'react'
import { AiOutlineHome, ImTicket, IoAnalyticsSharp, IoChatbubblesOutline, IoSettingsOutline } from 'react-icons/all'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 60px;
    height: 100%;

    border-right: 1px solid #efefef;
    background-color: #5a5a5a;

    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > *
    {
        margin: 30px 0px;
    }
`

export const Sidebar: FunctionComponent = () => {
    return (
        <Wrapper>
            <AiOutlineHome fontSize={28} color="#fff"/>
            <IoChatbubblesOutline fontSize={28} color="#fff"/>
            <ImTicket fontSize={28} color="#fff"/>
            <IoAnalyticsSharp fontSize={28} color="#fff"/>
            <IoSettingsOutline fontSize={28} color="#fff"/>
        </Wrapper>
    )
}