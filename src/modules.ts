export enum ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum STATUS {
    ACTIVE='ACTIVE',
    INACTIVE='INACTIVE'
}

export interface NewUser{
  firstName: string;
  LastName: string;
  contactNumber: string;
  email:string;
  password: string;
  status: STATUS;
  role: ROLE
}