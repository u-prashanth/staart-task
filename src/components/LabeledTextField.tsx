import React, { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;

    overflow: hidden;

    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputFieldLabelWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
`

const InputFieldLabel = styled.label`
    width: 100%;
    font-family: SFUITextSemiBold;
    font-size: 14px;
    color: #1c1c1c;
`

const InputField = styled.input`
    width: 100%;
    height: 42px;

    padding: 10px;

    margin-top: 10px;

    border: 1px solid #e9e9e9;
    border-radius: 4px;
    background-color: #f4f4f4;

    font-family: SFUITextSemiBold;
    font-size: 14px;
    color: #575757;

    flex-shrink: 0;

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
`


interface ILabeledTextFieldProps
{
    label: string;
    value?: string | number;
    style?: React.CSSProperties;
    type?: React.HTMLInputTypeAttribute | undefined;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabeledTextField: FunctionComponent<ILabeledTextFieldProps> = (props: ILabeledTextFieldProps) => {

    useEffect(() => {

    }, [props.value])

    return (
        <Wrapper>
            <InputFieldLabelWrapper>
                <InputFieldLabel>{props.label}</InputFieldLabel>
            </InputFieldLabelWrapper>

            <InputField 
                {...props}
                value={props.value}
                onChange={e => props.onChange(e)}
            />

            
        </Wrapper>
    )
}