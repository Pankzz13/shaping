import { useForm, SubmitHandler } from "react-hook-form";
// import {useSelector, useDispatch} from "react-redux";
// import { userAction } from "../state/action-creators/userAction";
// import React, {useState} from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { useActions } from "../hooks/use-actions";
import { Inputs } from "../types/userFormAuthTypes";




export const UserForm = () => {

    const { userAction } = useActions();

    const shows = useTypedSelector(({ user }) => user);
    console.log(shows);


    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = () => {
        userAction();
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_input">
                    <div className="container">
                        <div className="input-flied">
                            <h2>Demographic IO:</h2>
                        </div>
                        <div className="Demographic_input">
                            <label>Username:</label>
                            <input type="text" placeholder="Enter Username" {...register("username", { required: true })} />
                            {errors.username && <span>This field is required</span>}
                            <label> Department:</label>
                            <select {...register("department")} >
                                <option value="BT">BT</option>
                                <option value="OT">OT</option>
                                <option value="ST">ST</option>
                                <option value="PT">PT</option>
                                <option value="SE">SE</option>
                                <option value="FO">FO</option>
                            </select>
                            <label>Password:</label>
                            <input type="password" placeholder="Enter Password" {...register("password", { required: true })} />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className="btn-outer">
                            <input type="submit" className="btn login-form__btn submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}