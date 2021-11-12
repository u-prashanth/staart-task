import { combineReducers } from "redux";
import { produce } from 'immer'
import ObjectID from "bson-objectid";

export interface IMilestone
{
    milestoneId: string;
    milestoneName?: string;
    progress?: number;
}

export interface IWork
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

export interface IMaterial
{
    materialId: string;
    name: string;
    materialList: string;
    description?: string;
    quantity?: number;
    price?: number;
    gst?: number;
    unit?: string;
}

export interface IVendor
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
    vendor?: IVendor;
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
    selectedWorkId?: string;
    selectedMaterialId?: string;
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
                            description: 'Plywood is an engineered wood sheet material made up of fine layers or flimsy strands of wood veneers attached together placing wood grains 90 degrees to one another. It is one type of manufactured board which can be described as a mixture of Medium Density Fibreboard (MDF) and Chip Board (Particle Board).',
                            quantity: 20,
                            price: 80,
                            unit: 'sq.ft',
                            vendor: {
                                vendorId: new ObjectID().toHexString(),
                                works: [
                                    {
                                        workId: new ObjectID().toHexString(),
                                        vendorName: "Greenlam",
                                        workType: 'Material',
                                        category: 'Carpenter',
                                        description: 'Plywood is an engineered wood sheet material made up of fine layers or flimsy strands of wood veneers attached together placing wood grains 90 degrees to one another. It is one type of manufactured board which can be described as a mixture of Medium Density Fibreboard (MDF) and Chip Board (Particle Board).',
                                        quantity: 100,
                                        price: 80,
                                        gst: 400,
                                        unit: 'sq.ft',
                                        milestones: [
                                            {
                                                milestoneId: new ObjectID().toHexString(),
                                                milestoneName: 'Wall Frame',
                                                progress: 50
                                            },
                                            {
                                                milestoneId: new ObjectID().toHexString(),
                                                milestoneName: 'Finishing',
                                                progress: 100
                                            }
                                        ]
                                    }
                                ],
                                materials: [
                                    {
                                        materialId: new ObjectID().toHexString(),
                                        name: 'Plywood',
                                        materialList: 'Fan',
                                        description: 'Plywood is an engineered wood sheet material made up of fine layers or flimsy strands of wood veneers attached together placing wood grains 90 degrees to one another. It is one type of manufactured board which can be described as a mixture of Medium Density Fibreboard (MDF) and Chip Board (Particle Board).',
                                        quantity: 10,
                                        price: 200,
                                        gst: 300,
                                        unit: 'sq.ft'
                                    }
                                ]
                            }
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


        case 'Add_Component':
            return produce(state, (draftState) => {
                draftState.rooms?.map((room, roomIndex) => {
                    if(room.roomId === draftState.selectedRoomId)
                    {
                        draftState.rooms![roomIndex].units?.map((unit, unitIndex) => {
                            if(unit.unitId === draftState.selectedUnitId)
                            {
                                return draftState.rooms![roomIndex].units![unitIndex].components?.unshift(action.payload.data)
                            }
                        })
                    }
                })
            })

        case 'Update_Component':
            return produce(state, (draftState) => {
                draftState.rooms?.map((room, roomIndex) => {
                    if(room.roomId === draftState.selectedRoomId)
                    {
                        draftState.rooms![roomIndex].units?.map((unit, unitIndex) => {
                            if(unit.unitId === draftState.selectedUnitId)
                            {
                                draftState.rooms![roomIndex].units![unitIndex].components?.map((component, componentIndex) => {
                                    if(component.componentId === action.payload.componentId)
                                    {
                                        return draftState.rooms![roomIndex].units![unitIndex].components![componentIndex] = {
                                            ...action.payload.data
                                        }
                                    }
                                })
                            }
                        })
                    }
                })
            })

        case 'Show_Vendor_Panel':
            return produce(state, (draftState) => {
                draftState.showVendorsPanel = action.payload.show
                return draftState
            })

        case 'Select_Component_ID':
            return produce(state, (draftState) => {
                draftState.selectedComponentId = action.payload.componentId;
                return draftState
            })
        

        case 'Select_Vendor_ID':
            return produce(state, (draftState) => {
                draftState.selectedVendorId = action.payload.vendorId;
                return draftState
            })

        case 'Select_Work_ID':
            return produce(state, (draftState) => {
                draftState.selectedWorkId = action.payload.workId;
                return draftState
            })
        

        case 'Add_Work':
            return produce(state, (draftState) => {
                draftState.rooms?.map((room, roomIndex) => {
                    if(room.roomId === draftState.selectedRoomId)
                    {
                        draftState.rooms![roomIndex].units?.map((unit, unitIndex) => {
                            if(unit.unitId === draftState.selectedUnitId)
                            {
                                return draftState.rooms![roomIndex].units![unitIndex].components?.map((component, componentIndex) => {
                                    if(component.componentId === draftState.selectedComponentId)
                                    {
                                        return draftState.rooms![roomIndex].units![unitIndex].components![componentIndex].vendor?.works?.unshift(action.payload.data)
                                    }
                                })
                            }
                        })
                    }
                })
            })


        case 'Add_Material':
            return produce(state, (draftState) => {
                draftState.rooms?.map((room, roomIndex) => {
                    if(room.roomId === draftState.selectedRoomId)
                    {
                        draftState.rooms![roomIndex].units?.map((unit, unitIndex) => {
                            if(unit.unitId === draftState.selectedUnitId)
                            {
                                return draftState.rooms![roomIndex].units![unitIndex].components?.map((component, componentIndex) => {
                                    if(component.componentId === draftState.selectedComponentId)
                                    {
                                        return draftState.rooms![roomIndex].units![unitIndex].components![componentIndex].vendor?.materials?.unshift(action.payload.data)
                                    }
                                })
                            }
                        })
                    }
                })
            })




        case 'Add_Milestone':
            return produce(state, (draftState) => {
                draftState.rooms?.map((room, roomIndex) => {
                    if(room.roomId === draftState.selectedRoomId)
                    {
                        draftState.rooms![roomIndex].units?.map((unit, unitIndex) => {
                            if(unit.unitId === draftState.selectedUnitId)
                            {
                                return draftState.rooms![roomIndex].units![unitIndex].components?.map((component, componentIndex) => {
                                    if(component.componentId === draftState.selectedComponentId)
                                    {
                                        return draftState.rooms![roomIndex].units![unitIndex].components![componentIndex].vendor?.works?.map((work, workIndex) => {
                                            if(work.workId === draftState.selectedWorkId)
                                            {
                                                return draftState.rooms![roomIndex].units![unitIndex].components![componentIndex].vendor?.works![workIndex].milestones?.unshift(action.payload.data);
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            })




        case 'Show_Milestone_Panel':
            return produce(state, (draftState) => {
                draftState.showMilestonesPanel = action.payload.show
                return draftState
            })
        

        default:
            return state;
    }
}


export const reducers = combineReducers({
    rooms: RootReducer
})

export type State = ReturnType<typeof reducers>