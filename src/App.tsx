import { AnimatePresence, motion } from 'framer-motion';
import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components'
import { ComponentsColumn, Header, MilestonesColumn, Sidebar, UnitsColumn, VendorColumn } from './components';
import { ActionCreators } from './redux';
import { State } from './redux/state/reducers/RootReducer';


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

const ContentWrapper = styled(motion.div)`
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

	const dispatch = useDispatch();

    // const { AddUnitAction, RemoveUnitAction } = bindActionCreators(ActionCreators, dispatch);

	const { showComponentsPanel, showVendorsPanel, showMilestonesPanel } = useSelector((state: State) => state.rooms);

	return (
		<Container>
			<Body>
				<Sidebar />
				{/* <Model /> */}
				<VerticalContentWrapper>
					<Header>

					</Header>
					<ContentWrapper>
						<AnimatePresence>
							<UnitsColumn />
							{ showComponentsPanel && <ComponentsColumn /> }
							{ showVendorsPanel && <VendorColumn /> }
							{ showMilestonesPanel && <MilestonesColumn /> }
						</AnimatePresence>
					</ContentWrapper>
				</VerticalContentWrapper>
			</Body>
		</Container>
	)
}

export default App;