export enum DepartmentEnum {
  BT = "BT",
  OT = "OT",
  ST = "ST",
  PT = "PT",
  SE = "SE",
  FO = "FO"
}

export type Inputs = {
  username: string;
  password: string | number;
  department: DepartmentEnum;
}