import { combineReducers } from "redux";
import { produce } from 'immer'

interface IMilestone
{
    milestoneName?: string;
    progress?: number;
}

interface IWork
{
    vendorName: string;
    workType?: string;
    category?: string;
    description?: string;
    quantity?: number;
    price?: number;
    gst?: number;
    unit?: string;
    milestones?: IMilestone[];
}

interface IMaterial
{
    category: string;
    description?: string;
    quantity?: number;
    price?: number;
    gst?: number;
    unit?: string;
}

interface IVendor
{
    works?: IWork[];
    materials?: IMaterial[];
}

interface IComponent
{
    name: string;
    description?: string;
    quantity?: number;
    price?: number;
    unit?: string;
    vendors?: IVendor[];
}

interface IUnit
{
    name: string;
    components?: IComponent[];
}

interface IRoom
{
    roomId: string | number;
    name: string;
    units?: IUnit[];
}

interface IState
{
    rooms?: IRoom[];
}


const initialState: IState = {
    rooms: [
        {
            roomId: 1,
            name: 'Master Bedroom',
            units: []
        },

        {
            roomId: 2,
            name: 'Drawing Room',
            units: []
        },

        {
            roomId: 3,
            name: 'Kitchen',
            units: []
        }
    ]
}

interface IAddUnitAction
{
    type: string;
    payload: any
}

export const RootReducer = (state: IState = initialState, action: IAddUnitAction) => {
    switch(action.type)
    {
        case 'Add_Unit':
            return produce(state, (draftState) => {
                draftState.rooms?.map((room, index) => {
                    if(room.roomId === action.payload.roomId)
                    {
                        return draftState.rooms![index].units?.push(action.payload.data)
                    }
                })
            })

        default:
            return state;
    }
}


export const reducers = combineReducers({
    rooms: RootReducer
})

export type State = ReturnType<typeof reducers>