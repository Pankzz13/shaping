import { ActionType } from "../actions-type";

// const initialState = {
//     // currentUser: {
//     //     username: "",
//     //     password: "",
//     // },

//     addUser: false,
//     accessToken: "",
//     registerClient: false
// }



export const userReducer = (state = [], action: any) => {
    switch (action.type) {
        case ActionType.ADD_USER:
            return {
                ...state, addUser: action.payload
            }
        case ActionType.LOGIN_USER:
            return {
                ...state, accessToken: action.payload
            }

        case ActionType.REGISTER_CLIENT:
            return {
                ...state, registerClient: action.payload
            }

        // case ActionType.CURRENT_USER:
        //     return { ...state, currentUser: action.payload }

        default: return state;
    }
}