import { motion } from 'framer-motion'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled(motion.div)`
    width: 420px;
    height: calc(100% - 20px);
    margin: 0px 10px 0px 10px;

    border-radius: 8px;
    border: 1px solid #eaeaeb; 

    // #f7d25d

    overflow: hidden;

    flex-shrink: 0;

    // @media only screen and (min-width: 1600px)
    // {
        
    // }
`

export const ColumnContainer: FunctionComponent<{ children: React.ReactNode }> = (props) => {
    return (
        <Wrapper
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0  }}
            exit={{ opacity: 0, translateX: -20 }}
        >
            {props.children}
        </Wrapper>
    )
}