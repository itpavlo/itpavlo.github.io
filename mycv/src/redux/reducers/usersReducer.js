import {userActionTypes} from "../action/userActions";

const initialState = {
    characters: [{id: 2, name: "Morty Smith", image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"}],
    info: {
        count: 1
    }
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.SET_CHARACTERS:
            return {
                ...state,
                characters: action.users
            }
        case userActionTypes.SET_INFO:
            return {
                ...state,
                info: action.info
            }
        case userActionTypes.SET_DATA:
            return {
                ...state,
                characters: action.data.results,
                info: action.data.info
            }
        default:
            return state
    }

}

export default usersReducer;
