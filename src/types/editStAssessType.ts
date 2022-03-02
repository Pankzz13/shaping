enum InputGender {
    Male = "Male",
    Female = "Female"
}



export type editInputs = {
    name: string;
    therapist: string;
    birth: Date;
    age: number;
    date_of_assessment: string;
    babbling: string;
    first_word: string;
    main_mode_comm: string;
    family_history: string;
    motor_developments: string | number;
    oro_peripheral_mechanism: string;
    vegetative_skills: string | number;
    vision: string;
    hearing: string;
    response_to_name_call: string | number;
    environmental_sounds: string;
    eye_contact: string | number;
    attention_to_sounds: string | number;
    imitation_to_body_movements: string | number;
    imitation_to_speech: string;
    attention_level: string | number;
    social_smile: string | number;
    initiates_interaction: string | number;
    receptive_language: string;
    expressive_language: string;
    provisional_diagnosis: string | number;
    recommendations: string | number;
    tests_administered: string | number;
    reels_rl_score: number;
    reels_el_score: number;
    draft: any;
    gender: InputGender;
    Status: boolean;
    clienttable: number;
}