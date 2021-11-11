import { FunctionComponent } from 'react';
import styled from 'styled-components'
import { ComponentsColumn, Header, MilestonesColumn, Model, Sidebar, UnitsColumn, VendorColumn } from './components';


const Container = styled.div`
	width: 100%;
	height: 100%;
`

const Body = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: row;
`

const VerticalContentWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	overflow-y: hidden;
	overflow-x: auto;

	&::-webkit-scrollbar {
        height: 4px;
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

const ContentWrapper = styled.div`
	width: 100%;
	height: 100%;

	padding: 20px;
	background-color: #fff;

	display: flex;
	align-items: center;

	overflow: hidden;
	overflow-x: auto;

	&::-webkit-scrollbar {
        height: 4px;
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

const App: FunctionComponent<{}> = () => {

	return (
		<Container>
			<Body>
				<Sidebar />
				{/* <Model /> */}
				<VerticalContentWrapper>
					<Header>

					</Header>
					<ContentWrapper>
						<UnitsColumn />
						<ComponentsColumn />
						<VendorColumn />
						<MilestonesColumn />
					</ContentWrapper>
				</VerticalContentWrapper>
			</Body>
		</Container>
	)
}

export default App;