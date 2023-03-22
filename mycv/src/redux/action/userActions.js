import {getMethods} from "../../api/api";

export const userActionTypes = {
    SET_CHARACTERS:'SET_CHARACTERS',
    SET_INFO:'SET_INFO',
    SET_DATA:'SET_DATA',
}

export const userActions = {
    setUsers: (users)=>({type: userActionTypes.SET_CHARACTERS, users}),
    setInfo: (info)=>({type: userActionTypes.SET_INFO, info}),
    setCharacters: (data) =>({type:userActionTypes.SET_DATA, data})
}


export const getCharacters = (activePage) => async (dispatch) => {
    try{
        const res = await getMethods.universalGetCharacters(activePage)
        console.log(res)
        dispatch(userActions.setCharacters(res.data))
    } catch (e) {

    }
}
