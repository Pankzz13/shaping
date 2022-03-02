import { useForm, SubmitHandler } from "react-hook-form";
import { assessmentInputs } from "../types/AssessmentType";


export const Assessment = () => {



    const { register, handleSubmit, formState: { errors } } = useForm<assessmentInputs>();
    const onSubmit: SubmitHandler<assessmentInputs> = (data) => {
        console.log(data)
    };









    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* <div className="alert {% if message.tags %}alert-{{ message.tags }}{% endif %}" role="alert">{{ message }}</div> */}

            <div className="form_input">
                <div className="container">
                    <div className="input-flied">
                        <h2>Demographic IO:</h2>
                    </div>
                    <div className="demographic-item1">
                        <label >Name:</label><br />
                        <input type="text" id="name" {...register("name")} required /><br />
                    </div>
                    <div className="Demographic_input">
                        <span className="Demographic-left-side">
                            <div className="demographic-outer">
                                <div className="demographic-item">
                                    <label> Gender:</label><br />
                                    <select  {...register("gender")}>
                                        {/* {% if client.gender == "Male" %} */}
                                        <option value="Male">Male</option>
                                        {/* {% if client.gender == "Female" %} */}
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="demographic-item">
                                    <label className="date-picker">D.O.B:</label><br />
                                    <input type="date" id="date"  {...register("dob")} required
                                    /><br />
                                </div>
                            </div>
                            <div className="demographic-outer">
                                <div className="demographic-item">
                                    <label >Age (years):</label><br />
                                    <input type="number" className="age" id="age"  {...register("age")} required
                                    /><br />
                                </div>
                                <div className="demographic-item">
                                    <label className="date-picker">Date of Assessment:</label><br />
                                    <input type="date" id="birthday"  {...register("date_of_assessment")} required />
                                </div>
                            </div>
                        </span>
                    </div>


                    <div className="therapy-input1">

                        <div className="Chief_input1">
                            <span className="Diagnerge-side">
                                <p>Prenatal History</p>
                                <textarea id="fname"  {...register("prenatal_history")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Family History</p>
                                <textarea id="fname" {...register("family_history")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Development History</p>
                                <textarea id="fname"  {...register("development_history")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>School History</p>
                                <textarea id="fname"  {...register("school_history")} required></textarea>
                            </span><br />
                            <div className="demographic-outer" style={{ marginTop: '10px' }}>
                                <div className="demographic-item">
                                    <span className="Diagnerge-side">
                                        <label > Tests Administered</label><br />
                                        <select {...register("administered")}>
                                            <option value="DST">DST</option>
                                            <option value="VSMS">VSMS</option>
                                            <option value="MISIC">MISIC</option>
                                        </select>
                                    </span>
                                </div>
                                <div className="demographic-item">
                                    <span className="Diagnerge-side">
                                        <p>Test Results</p>
                                        <input type="number" id="test_results" {...register("test_results")} required />
                                    </span>
                                </div>
                            </div>
                            <span className="Diagnerge-side">
                                <p>Behavioural Observation</p>
                                <textarea id="fname" {...register("behavioural_observation")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Impression</p>
                                <textarea id="fname" {...register("impression")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Recommendations</p>
                                <textarea id="fname" {...register("recommendations")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Email Sent</p>
                                <textarea id="fname" {...register("email_sent")} required></textarea>
                            </span>
                            <div className="btn-form-outer" style={{ display: 'flex', marginTop: '20px' }}>
                                <button className="save" id="save" >Save</button>
                            </div>
                            <div className="btn-form1">
                                <button className="btn login-form__btn submit" id="submit" value="Submit">Submit</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </form>
    );
}