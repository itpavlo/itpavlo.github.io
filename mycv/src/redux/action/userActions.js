export const userActionTypes = {
    SET_CHARACTERS:'SET_CHARACTERS',
    SET_INFO:'SET_INFO',
}

export const userActions = {
    setUsers: (users)=>({type: userActionTypes.SET_CHARACTERS, users}),
    setInfo: (info)=>({type: userActionTypes.SET_INFO, info}),
}
