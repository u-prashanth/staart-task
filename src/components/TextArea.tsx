import React, { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.textarea`
    width: 100%;

    padding: 10px;

    border: 1px solid #e9e9e9;
    border-radius: 4px;
    background-color: #f4f4f4;

    font-family: SFUITextRegular;
    font-size: 14px;
    line-height: 20px;
    color: #3a3b3f;

    resize: none;

    &:focus
    {
        outline: none;
        border: 1px solid #c6c6c6;
    }

    &::placeholder
    {
        font-family: SFUITextRegular;
        font-size: 14px;
        color: #a9aeb1;
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

interface ITextAreaProps
{
    style?: React.CSSProperties;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FunctionComponent<ITextAreaProps> = (props: ITextAreaProps) => {


    useEffect(() => {

    }, [props.value])

    return (
        <Wrapper 
            {...props}
            rows={5}
            value={props.value}
            onChange={e => props.onChange(e)}
            onKeyDown={props.onKeyDown}
        />
    )
}