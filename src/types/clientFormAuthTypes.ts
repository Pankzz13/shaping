export enum DepartmentEnum {
    BT = "BT",
    OT = "OT",
    ST = "ST",
    PT = "PT",
    SE = "SE",
    FO = "FO"
}

export enum InputGender {
    none = "Gender",
    Male = "Male",
    Female = "Female"
}

export enum Assessment {
    BT = "BT",
    OT = "OT",
    ST = "ST"
}


export type clientInputs = {
    name: string;
    birth: Date;
    email: string | number;
    age: number;
    phone: number;
    altPhone: number;
    fatherName: string;
    motherName: string;
    motherTongue: string;
    branch: string;
    address: string | number;
    gender: InputGender;
    discontinued: Date;
    discontinious: boolean;
    timeFrom: number;
    timeTo: number;
    department: DepartmentEnum;
    chief: string | number;
    diagnosis: string;
    remarks: number;
    assessment: Assessment;
}