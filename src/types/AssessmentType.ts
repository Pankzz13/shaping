enum GenderInputs {
    Male = "Male",
    Female = "Female"
}

enum TestAdministered {
    DST = "DST",
    VSMS = "VSMS",
    MISIC = "MISIC"
}


export type assessmentInputs = {
    name: string;
    gender: GenderInputs;
    dob: Date;
    age: number;
    date_of_assessment: string;
    prenatal_history: string;
    family_history: string;
    development_history: string;
    school_history: string;
    administered: TestAdministered;
    test_results: string;
    behavioural_observation: string;
    impression: string;
    recommendations: string;
    email_sent: string;
    draft: any
}