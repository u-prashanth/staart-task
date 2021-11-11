import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { motion } from 'framer-motion'

const Wrapper = styled(motion.button)`
    width: auto;
    height: 40px;

    padding: 10px 30px;

    border: 1px solid #e9e9e9;
    border-radius: 4px;

    font-family: SFUITextSemiBold;
    font-size: 14px;
    color: #4177fe;

    background-color: #fff;

    cursor: pointer;
`

interface IButtonProps
{
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export const Button: FunctionComponent<IButtonProps> = (props: IButtonProps) => {
    return (
        <Wrapper 
            style={props.style}
            whileHover={{ color: '#fff', backgroundColor: '#4177fe' }}
            transition={{ duration: 0.2 }}
            whileTap={{ backgroundColor: '#2122fe' }}
        >
            {props.children}
        </Wrapper>
    )
}