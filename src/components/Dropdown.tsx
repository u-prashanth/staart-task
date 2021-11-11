import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.select`
    width: 100%;
    height: 42px;

    padding: 10px;

    border: 1px solid #e9e9e9;
    border-radius: 4px;
    background-color: #f4f4f4;

    font-family: SFUITextSemiBold;
    font-size: 14px;
    color: #575757;

    &:focus
    {
        outline: none;
        border: 1px solid #c6c6c6;
    }
`

const Option = styled.option`
    width: 100%;
    height: 42px !important;

    padding: 10px;

    font-family: SFUITextSemiBold;
    font-size: 14px;
    color: #575757;
`

export const Dropdown = () => {
    return (
        <Wrapper>
            <Option>Only Work</Option>
            <Option>Work + Material</Option>
        </Wrapper>
    )
}