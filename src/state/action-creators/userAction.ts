import { Dispatch } from "redux";
import { ActionType } from "../actions-type";
import { loginUser, registerClient, editStClient, stAssessment } from "../services/authServices";





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


export const editClientActionn = (user: any) => {
    return async (dispatch: Dispatch) => {
        const response = await editStClient(user);
        console.log("edit client info", response);
        try {
            dispatch({
                type: ActionType.EDIT_CLIENT,
                payload: response
            });
        } catch (e: any) {
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


export const stAssessmentAction = (user: any) => {
    return async (dispatch: Dispatch) => {
        const response = await stAssessment(user);
        console.log("edit client info", response);
        try {
            if (response.status === 200) {
                dispatch({
                    type: ActionType.ST_ASSESSMENT,
                    payload: response.data.access
                });
                console.log("st Assessment added")
            }
        } catch (e: any) {
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