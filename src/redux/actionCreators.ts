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