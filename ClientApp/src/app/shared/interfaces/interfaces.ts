export interface Question{
  id?:number,
  title:string,
  text:string,
  author:string,
  userId:number,
  description:string,
  createdDate?:Date,
  lastModifiedDate?:Date
}
 export interface TokenResponse {
  token: string,
  expiration: number,
  userId:string
}
export interface User{
  id?:number;
  name:string;
  email:string;
  password?:string;
  role?:string;
}
export interface Auth{
  name:string;
  password:string;
}
export interface Answer{
  id?:number,
  text:string,
  questionId:number,
  author:string,
  createdDate?:Date,
  lastModifiedDate?:Date
}
