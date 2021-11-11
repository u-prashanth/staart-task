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