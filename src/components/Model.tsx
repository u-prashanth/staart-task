import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
    width: 100vw;
    height: 100vh;

    padding: 30px;

    position: absolute;
    top: 1;
    left: 0;

    backdrop-filter: blur(8px);

    overflow: hidden;

    pointer-events: auto;

`
const ContentWrapper = styled(motion.div)`
    width: 100%;
    max-width: 500px;
    height: 200px;

    border-radius: 8px;
    border: 1px solid #eaeaea;
    background-color: #fff;

    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    -webkit-box-shadow: 0px 0px 45px 18px rgba(223,227,230,1);
    -moz-box-shadow: 0px 0px 45px 18px rgba(223,227,230,1);
    box-shadow: 0px 0px 45px 18px rgba(223,227,230,1);
`

interface IModelProps
{
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export const Model: FunctionComponent<IModelProps> = (props: IModelProps) => {

    return (
        <Wrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
        >
            <ContentWrapper
                initial={{ opacity: 0, scale: 0.6, translateX: '-50%', translateY: '-50%' }}
                animate={{ opacity: 1, scale: 1, translateX: '-50%', translateY: '-50%' }}
                exit={{ opacity: 0, scale: 0.6, translateX: '-50%', translateY: '-50%' }}
                transition={{ ease: 'easeOut', duration: 0.4 }}
            >
                {props.children}
            </ContentWrapper>
        </Wrapper>
    )
}