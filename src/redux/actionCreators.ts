import { Dispatch } from 'redux'

export const AddUnitAction = (unit: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Add_Unit',
            payload: {
                ...unit
            }
        })
    }
}


export const RemoveUnitAction = (unit: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Remove_Unit',
            payload: {
                ...unit
            }
        })
    }
}


export const ShowComponentPanelAction = (payload: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Show_Component_Panel',
            payload: {
                ...payload
            }
        })
    }
}


export const SelectRoomAndUnitID = (payload: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Select_Room_And_Unit_ID',
            payload: {
                ...payload
            }
        })
    }
}


export const AddComponentAction = (payload: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Add_Component',
            payload: {
                ...payload
            }
        })
    }
}


export const UpdateComponentAction = (payload: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Update_Component',
            payload: {
                ...payload
            }
        })
    }
}

export const ShowVendorPanelAction = (payload: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Show_Vendor_Panel',
            payload: {
                ...payload
            }
        })
    }
}


export const SelectComponentIDAction = (payload: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Select_Component_ID',
            payload: {
                ...payload
            }
        })
    }
}


export const SelectVendorIDAction = (payload: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Select_Vendor_ID',
            payload: {
                ...payload
            }
        })
    }
}


export const AddWorkAction = (payload: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Add_Work',
            payload: {
                ...payload
            }
        })
    }
} 


export const AddMaterialAction = (payload: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Add_Material',
            payload: {
                ...payload
            }
        })
    }
} 


export const ShowMilestonePanelAction = (payload: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'Show_Milestone_Panel',
            payload: {
                ...payload
            }
        })
    }
}