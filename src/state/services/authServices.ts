import { Inputs } from "../../types/loginFormAuthType";
import { clientInputs } from "../../types/clientFormAuthTypes";
import axios from "axios";



export const loginUser = async (user: Inputs) => {
    const response = await axios.post(`http://dfd6-223-185-30-26.ngrok.io/api/token/`, {
        username: user.username,
        password: user.password,
    });
    return response;
};



export const registerClient = async (user: clientInputs) => {

    const token = localStorage.getItem("accessToken");

    // const token = Buffer.from(`${"admin"}:${"adimin"}`, 'utf8').toString('base64')

    console.log(token)

    const response = await axios.post(`http://dfd6-223-185-30-26.ngrok.io/client_user/`, {
        name: user.name,
        gender: user.gender,
        dob: user.birth,
        age: user.age,
        email: user.email,
        phone: user.phone,
        alternate_phone: user.altPhone,
        mother_tongue: user.motherTongue,
        father_name: user.fatherName,
        mother_name: user.motherName,
        address: user.address,
        branch: user.branch,
        discontinious: user.discontinious,
        discontinious_on: user.discontinued,
        assessment: user.assessment,
        slot_time_from: user.timeFrom,
        slot_time_to: user.timeTo,
        theropy: user.department,
        chief_complaints: user.chief,
        diagnosis: user.diagnosis,
        remarks: user.remarks
    }, { headers: { 'Authorization': `Bearer ${token}` } });
    return response;
}
