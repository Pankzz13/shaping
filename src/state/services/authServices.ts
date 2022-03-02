import { Inputs } from "../../types/loginFormAuthType";
import { clientInputs } from "../../types/clientFormAuthTypes";
import axios from "axios";
import { editInputs } from "../../types/editStAssessType";


const BASE_URL = "https://7f39-122-173-29-122.ngrok.io"




export const loginUser = async (user: Inputs) => {
    const response = await axios.post(`${BASE_URL}/api/token/`, {
        username: user.username,
        password: user.password,
    });
    return response;
};



export const editStClient = async (user: editInputs) => {

    const token = localStorage.getItem("accessToken");
    const response = await axios.patch(`${BASE_URL}/editst_assessment/22/`, user, { headers: { 'Authorization': `Bearer ${token}` } });
    return response;
}



export const registerClient = async (user: clientInputs) => {

    const token = localStorage.getItem("accessToken");

    console.log(token)

    const response = await axios.post(`${BASE_URL}/client_user/`, user, { headers: { 'Authorization': `Bearer ${token}` } });
    return response;
}





export const stAssessment = async (user: editInputs) => {

    const token = localStorage.getItem("accessToken");

    const response = await axios.post(`${BASE_URL}/st_assessment/55/`, user, { headers: { 'Authorization': `Bearer ${token}` } });
    return response;
}
