import { Dispatch } from "redux";
import { ActionType } from "../actions-type";
import { loginUser, registerClient } from "../services/authServices";





export const userAction = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.ADD_USER,
            payload: true
        });
    }
}


export const loginAction = (user: any) => {
    return async (dispatch: Dispatch) => {
        const response = await loginUser(user);
        console.log("this is the response from user if user is not active", response);
        try {
            if (response.status === 200) {
                dispatch({
                    type: ActionType.LOGIN_USER,
                    payload: response.data.access
                });
                console.log("user login successfully");
                localStorage.setItem("accessToken", response.data.access);
            }
        } catch (e: any) {
            console.log(e.response)
            if (
                e.response.status === 503 ||
                e.response.status === 500 ||
                e.response.status === 502
            ) {
                console.log("internal server error");
            }
        }

    }
}



export const clientAction = (user: any) => {
    return async (dispatch: Dispatch) => {
        const response = await registerClient(user);
        console.log("get response successfull!", response);
        try {
            if (response.status === 200) {
                dispatch({
                    type: ActionType.REGISTER_CLIENT,
                    payload: response.data.access
                });
                console.log("client added");

            }
        } catch (e: any) {
            console.log(e.response)
            if (
                e.response.status === 503 ||
                e.response.status === 500 ||
                e.response.status === 502
            ) {
                console.log("internal server error");
            }
        }

    }
}



// export const currentUserAction = (token: any) => {
//     return async (dispatch: Dispatch) => {
//         try {
//             const response = await currentUser(token);
//             // console.log(response);
//             if (response.status === 200) {
//                 dispatch({
//                     type: ActionType.LOGIN_USER,
//                     payload: token.accessToken,
//                 });
//                 dispatch({
//                     type: ActionType.CURRENT_USER,
//                     payload: response.data,
//                 });
//             }
//         } catch (e: any) {
//             console.log("here after data", e.response.data);
//             if (
//                 e.response.status === 503 ||
//                 e.response.status === 500 ||
//                 e.response.status === 502
//             ) {
//                 console.log("No response")
//             }
//         }
//     };
// };