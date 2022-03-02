import { useForm, SubmitHandler } from "react-hook-form";
import { clientInputs } from "../types/clientFormAuthTypes";
import { useActions } from "../hooks/use-actions";
import { useTypedSelector } from "../hooks/use-typed-selector";
import React, { useEffect } from "react";



// const getAge = (dateString: any) => 
// {
//     var today = new Date();
//     var birthDate = new Date(dateString);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
//     {
//         age--;
//     }
//     return age;
// }



export const ClientForm = () => {


    const { clientAction } = useActions();

    const shows = useTypedSelector(({ user }) => user);

    useEffect(() => {
        console.log(shows)
    }, [shows])



    const { register, handleSubmit, formState: { errors } } = useForm<clientInputs>();
    const onSubmit: SubmitHandler<clientInputs> = (user) => {
        clientAction(user);
    };




    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form_input">
                <div className="container">
                    <div className="input-flied">
                        <h2>Demographic IO<span className="text-filed">*</span></h2>
                    </div>
                    <div className="Demographic_input">
                        <span className="Demographic-left-side">
                            <div className="demographic-outer">
                                <div className="demographic-item">
                                    <label>Name:</label><br />
                                    <input type="text" placeholder="Enter Name" {...register("name", { required: true })} />
                                    {errors.name && <span>This field is required</span>}
                                    <br />
                                </div>
                                <div className="demographic-item">
                                    <label> Gender:</label><br />
                                    <select {...register("gender")}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                </div>
                            </div>
                            <div className="demographic-outer">
                                <div className="demographic-item">
                                    <label className="date-picker">D.O.B:</label><br />
                                    <input type="date" {...register("birth")} />
                                    {errors.birth && <span>This field is required</span>}
                                    <br />
                                </div>
                                <div className="demographic-item">
                                    <label>Age (years):</label><br />
                                    <input type="number" className="age" {...register("age")} />
                                    {errors.age && <span>This field is required</span>}
                                    <br />
                                </div>
                            </div>

                        </span>
                    </div>
                    <div className="input-flied">
                        <h2>Address<span className="text-filed">*</span></h2>
                    </div>
                    <div className="addres_input">
                        <span className="left-side">
                            <div className="demographic-item" style={{ marginBottom: "10px" }}>
                                <label >Phone:</label><br />
                                <input type="text" {...register("phone", { required: true })} />
                                {errors.phone && <span>This field is required</span>}
                                <br />
                            </div>
                            <div className="demographic-item" style={{ marginBottom: "10px" }}>
                                <label >Email:</label><br />
                                <input type="email" {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                                <br />
                            </div>
                            <div className="demographic-item" style={{ marginBottom: "10px" }}>
                                <label >Father Name:</label><br />
                                <input type="text" {...register("fatherName", { required: true })} />
                                {errors.fatherName && <span>This field is required</span>}
                                <br />
                            </div>
                        </span>
                        <span className="left-side">
                            <div className="demographic-item" style={{ marginBottom: "10px" }}>
                                <label >Alternate Phone:</label><br />
                                <input type="text" {...register("altPhone", { required: true })} />
                                {errors.altPhone && <span>This field is required</span>}
                                <br />
                            </div>
                            <div className="demographic-item" style={{ marginBottom: "10px" }}>
                                <label >Mother Tongue</label><br />
                                <input type="text" {...register("motherTongue", { required: true })} />
                                {errors.motherTongue && <span>This field is required</span>}
                                <br />
                            </div>
                            <div className="demographic-item" style={{ marginBottom: "10px" }}>
                                <label >Mother Name</label><br />
                                <input type="text" {...register("motherName", { required: true })} />
                                {errors.motherName && <span>This field is required</span>}<br />
                            </div>
                        </span>

                    </div>
                    <div className="Address_flied">
                        <div className="demographic-item" style={{ marginBottom: '10px' }}>
                            <label>Branch:</label><br />
                            <input type="text" {...register("branch", { required: true })} />
                            {errors.branch && <span>This field is required</span>}<br />
                        </div>
                        <div className="demographic-item" style={{ marginBottom: '10px' }}>
                            <label>Address:</label><br />
                            <input type="text" {...register("address", { required: true })} />
                            {errors.address && <span>This field is required</span>}<br />
                        </div>
                    </div>
                    <h2>Created:</h2>
                </div>
                <div className="input-flied">
                    <h2>Discontinued<span className="text-filed">*</span></h2>
                </div>
                <div className="created_input">
                    <span className="left-side1">
                        <span className="created-left-side">
                            <input type="radio" {...register("discontinious")} />
                        </span>
                        <label className="discontinued-item discontinued1">Discontinued</label>
                    </span>
                </div>
                <div className="discontinued">
                    <span className="left-side">
                        <label className="discontinued-item" style={{ marginBottom: "10px" }}>Discontinued
                            On:</label><br />
                        <input type="date" {...register("discontinued", { required: true })} />
                        {errors.discontinued && <span>This field is required</span>}
                    </span>
                </div>
                <div className="outer1" style={{ display: 'flex' }}>
                    <div className="outer" style={{ width: '50%' }}>
                        <div className="input-flied1">
                            <h2>Assesments<span className="text-filed">*</span></h2>
                        </div>
                        <div className="created_input">
                            <div>
                                <span className="created-left-side">
                                    <label className="toggle">Assessment</label>
                                    <select {...register("assessment")}>
                                        <option value="BT">BT</option>
                                        <option value="OT">OT</option>
                                        <option value="ST">ST</option>
                                    </select>
                                </span>

                            </div>


                        </div>

                        <div className="outer" style={{ width: "50%" }}>
                            <div className="input-flied1">
                                <h2>Slot time<span className="text-filed">*</span></h2>
                            </div>
                            <div className="form-row m-b-55">

                                <div>

                                    <label>Slot time from:</label>

                                    <input type="time" {...register("timeFrom")} />

                                </div> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;

                                <div><label>Slot time to:</label>

                                    <input type="time" {...register("timeTo")} />

                                </div>



                            </div>
                        </div>
                    </div>
                </div>

                <hr />
            </div>
            <div className="therapy-input">
                <div className="container">
                    <label> Therapy </label>
                    <select {...register("department")}>
                        <option value="BT">BT</option>
                        <option value="OT">OT</option>
                        <option value="ST">ST</option>
                        <option value="PT">PT</option>
                        <option value="SE">SE</option>
                    </select>

                </div>
                <div className="Chief_input">
                    <span className="Diagnerge-side">
                        <p>Chief Complete:</p>
                        <textarea {...register("chief", { required: true })} />
                        {errors.chief && <span>This field is required</span>}
                    </span>
                    <span className="Diagnerge-side">
                        <p>Diagnosis</p>
                        <textarea {...register("diagnosis", { required: true })} />
                        {errors.diagnosis && <span>This field is required</span>}
                    </span>
                    <span className="Diagnerge-side">
                        <p>Remarks:</p>
                        <textarea {...register("remarks", { required: true })} />
                        {errors.remarks && <span>This field is required</span>}
                    </span>
                    <div className="btn-outer">
                        <input type="submit" className="btn login-form__btn submit w-100" />
                    </div>
                </div>
            </div>

        </form>

    );
}