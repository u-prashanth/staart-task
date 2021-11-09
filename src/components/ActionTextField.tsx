import React, { ChangeEvent, FunctionComponent, useState } from "react"
import styled from "styled-components"
import { motion, useAnimation } from 'framer-motion'
import { IoMdAdd } from 'react-icons/all'

const Wrapper = styled(motion.div)`
    width: 100%;
    height: 42px;

    border: 1px solid #e9e9e9;
    border-radius: 4px;
    background-color: #f4f4f4;

    display: flex;
    align-items: center;

    &:focus-within
    {
        border: 1px solid #c6c6c6;
    }
`

const InputField = styled(motion.input)`
    width: 100%;
    height: 40px;

    padding: 10px;

    border: none;
    border-radius: 4px;
    background-color: #f4f4f4;

    font-family: SFUITextSemiBold;
    font-size: 14px;
    color: #3a3b3f;

    &:focus
    {
        outline: none;
    }

    &::placeholder
    {
        font-family: SFUITextRegular;
        font-size: 14px;
        color: #a9aeb1;
    }
`

const ActionButtonWrapper = styled(motion.div)`
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

interface IActionTextFieldProps
{
    style?: React.CSSProperties;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ActionTextField: FunctionComponent<IActionTextFieldProps> = (props: IActionTextFieldProps) => {

    const [ value, setValue ] = useState('');
    const animationControl = useAnimation();

    const variants = {
        show: {
            opacity: 1,
            translateX: 0
        },

        hide: {
            opacity: 0,
            translateX: 40
        }
    }


    const handleInputChange = (value: any) => {
        setValue(value);
        value !== '' ? animationControl.start("show") : animationControl.start("hide");
    }

    return (
        <Wrapper>
            <InputField
                placeholder={props.placeholder || ''} 
                value={value}
                onChange={e => {
                    handleInputChange(e.target.value)
                    props.onChange(e)
                }}
            />
            <ActionButtonWrapper
                initial={{ opacity: 0, translateX: 40 }}
                animate={animationControl}
                variants={variants}
                transition={{easings: 'easeIn' }}
            >
                <IoMdAdd fontSize={22} color="#3e3e3e" />
            </ActionButtonWrapper>
        </Wrapper>
    )
}