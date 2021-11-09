import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.textarea`
    width: 100%;

    padding: 10px;

    border: 1px solid #e9e9e9;
    border-radius: 4px;
    background-color: #f4f4f4;

    font-family: SFUITextSemiBold;
    font-size: 14px;
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
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FunctionComponent<ITextAreaProps> = (props: ITextAreaProps) => {
    return (
        <Wrapper 
            {...props}
            rows={5}
            onChange={e => {
                props.onChange(e)
            }}
        />
    )
}