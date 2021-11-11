import { FunctionComponent } from 'react';
import styled from 'styled-components'

const Wrapper = styled.header`
	width: 100%;
	height: 60px;

    flex-shrink: 0;

	border-bottom: 1px solid #efefef;
    background-color: #f7f7f7;
`

export const Header: FunctionComponent<{}> = () => {
    return (
        <Wrapper>

        </Wrapper>
    )
}