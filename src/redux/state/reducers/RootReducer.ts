import { combineReducers } from "redux";
import { produce } from 'immer'
import ObjectID from "bson-objectid";

interface IMilestone
{
    milestoneId: string;
    milestoneName?: string;
    progress?: number;
}

interface IWork
{
    workId: string;
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
    materialId: string;
    category: string;
    description?: string;
    quantity?: number;
    price?: number;
    gst?: number;
    unit?: string;
}

interface IVendor
{
    vendorId: string;
    works?: IWork[];
    materials?: IMaterial[];
}

export interface IComponent
{
    componentId: string;
    name: string;
    description?: string;
    quantity?: number;
    price?: number;
    unit?: string;
    vendors?: IVendor[];
}

export interface IUnit
{
    unitId: string;
    name: string;
    components?: IComponent[];
}

export interface IRoom
{
    roomId: string;
    name: string;
    units?: IUnit[];
}

interface IState
{
    rooms?: IRoom[];
    showComponentsPanel?: boolean;
    showVendorsPanel?: boolean;
    showMilestonesPanel?: boolean;

    selectedRoomId?: string;
    selectedUnitId?: string;
    selectedComponentId?: string;
    selectedVendorId?: string;
    selectedMilestoneId?: string;
}


const initialState: IState = {
    rooms: [
        {
            roomId: new ObjectID().toHexString(),
            name: 'Drawing Room',
            units: []
        },

        {
            roomId: new ObjectID().toHexString(),
            name: 'Kitchen',
            units: []
        },

        {
            roomId: new ObjectID().toHexString(),
            name: 'Master Bedroom',
            units: [
                {
                    unitId: new ObjectID().toHexString(),
                    name: 'Dressing Table',
                    components: []
                },
                {
                    unitId: new ObjectID().toHexString(),
                    name: 'Wardrobe',
                    components: [
                        {
                            componentId: new ObjectID().toHexString(),
                            name: 'Plywood',
                            description: 'Hello Description',
                            quantity: 20,
                            price: 80,
                            unit: 'sq.ft',
                        }
                    ]
                }
            ]
        }
    ],
    showComponentsPanel: false,
    showVendorsPanel: false,
    showMilestonesPanel: false
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
                        return draftState.rooms![index].units?.unshift(action.payload.data)
                    }
                    else
                        return draftState.rooms![index].units
                })
            })

        case 'Remove_Unit':
            return produce(state, (draftState) => {
                draftState.rooms?.map((room, index) => {
                    if(room.roomId === action.payload.roomId)
                    {
                        let unitIndex: number = draftState.rooms![index].units?.findIndex(unit => action.payload.unitId === unit.unitId)!
                        draftState.rooms![index].units?.splice(unitIndex, 1);
                        return draftState.rooms![index].units
                    }
                    else
                        return draftState.rooms![index].units
                })
            })


        case 'Show_Component_Panel':
            return produce(state, (draftState) => {
                draftState.showComponentsPanel = action.payload.show
                return draftState
            })

        case 'Select_Room_And_Unit_ID':
            return produce(state, (draftState) => {
                draftState.selectedRoomId = action.payload.roomId;
                draftState.selectedUnitId = action.payload.unitId;
                return draftState
            })

        default:
            return state;

        
        

        
        // case 'Add_Component':
        //     return produce(state, (draftState) => {
        //         draftState.rooms?.map((room, index) => {
        //             if(room.roomId === action.payload.roomId)
        //             {
        //                 draftState.rooms![index].units?.splice(action.payload.unitIndex, 1);
        //                 return draftState.rooms![index].units
        //             }
        //         })
        //     })

        // default:
        //     return state;
    }
}


export const reducers = combineReducers({
    rooms: RootReducer
})

export type State = ReturnType<typeof reducers>