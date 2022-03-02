import { useForm, SubmitHandler } from "react-hook-form";
import { editInputs } from "../types/editStAssessType";
import { useActions } from "../hooks/use-actions";
import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";







export const StAssessmentForm = () => {


    const { stAssessmentAction } = useActions();


    const { register, handleSubmit, formState: { errors } } = useForm<editInputs>();
    const onSubmit: SubmitHandler<editInputs> = (user) => {
        stAssessmentAction(user);
    };


    const shows = useTypedSelector(({ user }) => user);

    useEffect(() => {
        console.log(shows)
    }, [shows])



    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            {/* <div className="alert {% if message.tags %}alert-{{ message.tags }}{% endif %}" role="alert">{{ message }}</div> */}

            <div className="form_input">
                <div className="container">
                    <div className="input-flied">
                        <h2>Demographic IO<span className="text-filed">*</span></h2>
                    </div>
                    {/* <div className="demographic-item1">
                        <label>Name:</label><br />
                        <input type="text" id="name"  {...register("name")} required /><br />
                    </div> */}
                    <div className="Demographic_input">
                        <span className="Demographic-left-side">
                            <div className="demographic-outer">
                                <div className="demographic-item">
                                    {/* <label > Gender:</label> */}
                                    <br />
                                    {/* <select {...register("gender")}>  
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select> */}
                                </div>
                                {/* <div className="demographic-item">
                                    <label className="date-picker">D.O.B:</label><br />
                                    <input type="date" id="date" {...register("birth")} required
                                    /><br />
                                    // onchange="getVal()"
                                </div> */}
                            </div>
                            <div className="demographic-outer">
                                <div className="demographic-item">
                                    <label >Therapist:</label><br />
                                    <input type="text" className="age" id="age" {...register("therapist")} required /><br />
                                </div>
                                <div className="demographic-item">
                                    <label className="date-picker">Date of Assessment:</label><br />
                                    <input type="date" id="birthday" {...register("date_of_assessment")} required />
                                </div>
                            </div>
                        </span>
                    </div>

                    <div className="therapy-input1">

                        <div className="Chief_input1">
                            <span className="Diagnerge-side">
                                <p>Babbling</p>
                                <textarea {...register("babbling")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>First Word</p>
                                <textarea {...register("first_word")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Main Mode Comm</p>
                                <textarea  {...register("main_mode_comm")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Family History</p>
                                <textarea {...register("family_history")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Motor Developments</p>
                                <textarea {...register("motor_developments")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Oro Peripheral Mechanism</p>
                                <textarea {...register("oro_peripheral_mechanism")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Vegetative Skills</p>
                                <textarea {...register("vegetative_skills")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Vision</p>
                                <textarea {...register("vision")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Hearing</p>
                                <textarea {...register("hearing")} required></textarea>
                            </span><br />
                            <br />
                            <span className="Diagnerge-side">
                                <p>Response To Name Call</p>
                                <textarea {...register("response_to_name_call")} required></textarea>
                            </span><br />
                            <br />
                            <span className="Diagnerge-side">
                                <p>Environmental Sounds</p>
                                <textarea {...register("environmental_sounds")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Eye Contact</p>
                                <textarea {...register("eye_contact")} required></textarea>
                            </span><br />
                            <span className="Diagnerge-side">
                                <p>Attention To Sound</p>
                                <textarea {...register("attention_to_sounds")} required></textarea>
                            </span><br />
                            <span className="Diagnerge-side">
                                <p>Imitation To Body Movements</p>
                                <textarea {...register("imitation_to_body_movements")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Imitation To Speech</p>
                                <textarea {...register("imitation_to_speech")} required></textarea>
                            </span><br />
                            <span className="Diagnerge-side">
                                <p>Attention Level</p>
                                <textarea {...register("attention_level")} required></textarea>
                            </span><br />
                            <span className="Diagnerge-side">
                                <p>Social Smile</p>
                                <textarea {...register("social_smile")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Initiates Interaction</p>
                                <textarea {...register("initiates_interaction")} required></textarea>
                            </span><br />
                            <span className="Diagnerge-side">
                                <p>Receptive Language</p>
                                <textarea {...register("receptive_language")} required></textarea>
                            </span><br />

                            <span className="Diagnerge-side">
                                <p>Expressive Language</p>
                                <textarea {...register("expressive_language")} required></textarea>
                            </span>
                            <span className="Diagnerge-side">
                                <p>Provisional Diagnosis</p>
                                <textarea {...register("provisional_diagnosis")} required></textarea>
                            </span><br />
                            <span className="Diagnerge-side">
                                <p>Recommendations</p>
                                <textarea {...register("recommendations")} required></textarea>
                            </span><br />
                            <span className="Diagnerge-side">
                                <p>Tests Administered</p>
                                <textarea {...register("tests_administered")} required></textarea>
                            </span><br />
                            <div className="demographic-outer">
                                <span className="Diagnerge-side_flied" style={{ marginRight: '20px' }}>
                                    <p>Reels RL Score</p>
                                    <input type="number" {...register('reels_rl_score')} required />
                                </span><br />
                                <span className="Diagnerge-side_flied">
                                    <p>Reels EL Score</p>
                                    <input type="number" {...register('reels_el_score')} required />
                                </span><br />
                            </div>
                            <div className="btn-form-outer" style={{ display: 'flex', marginTop: '20px' }}>
                                <div className="btn-form">
                                    <button className="save" id="save" {...register('draft')}>Save</button>
                                </div>
                                <div className="btn-form1">
                                    <button className="btn login-form__btn submit" id="submit" value="Submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>


    );

}