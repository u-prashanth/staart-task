import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;

    overflow: hidden;

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

    &:focus
    {
        outline: none;
        border: 1px solid #c6c6c6;
    }
`


interface ILabeledTextFieldProps
{
    label: string;
    style?: React.CSSProperties;
    type?: React.HTMLInputTypeAttribute | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabeledTextField: FunctionComponent<ILabeledTextFieldProps> = (props: ILabeledTextFieldProps) => {

    const [ value, setValue ] = useState('');

    const handleInputChange = (value: any) => {
        setValue(value);
    }

    return (
        <Wrapper>
            <InputFieldLabelWrapper>
                <InputFieldLabel>{props.label}</InputFieldLabel>
            </InputFieldLabelWrapper>

            <InputField 
                {...props}
                value={value}
                onChange={e => {
                    handleInputChange(e.target.value);
                    props.onChange(e);
                }}
            />

            
        </Wrapper>
    )
}