import { FunctionComponent } from 'react';
import styled from 'styled-components'
import { ComponentsColumn, Header, UnitsColumn } from './components';


const Container = styled.div`
	width: 100%;
	height: 100%;

`

const Body = styled.div`
	width: 100%;
	height: calc(100vh - 60px);

	display: flex;
`

const Sidebar = styled.div`
	width: 60px;
	height: 100%;
	
	border-right: 1px solid #efefef;
`

const ContentWrapper = styled.div`
	width: 100%;
	height: 100%;

	padding: 20px;

	display: flex;
	align-items: center;

	background-color: #fff;
`

const App: FunctionComponent<{}> = () => {

	return (
		<Container>
			<Header>

			</Header>

			<Body>
				<Sidebar />
				<ContentWrapper>
					<UnitsColumn />
					<ComponentsColumn />
				</ContentWrapper>
			</Body>
		</Container>
	)
}

export default App;