import {userActionTypes} from "../action/userActions";

const initialState = {
    characters: [{id: 2, name: "Morty Smith", image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"}],
    info: {
        count: 1
    }
}
const usersReducer = (state = initialState, action) => {
    console.log(action)
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
        default:
            return state
    }

}

export default usersReducer;
