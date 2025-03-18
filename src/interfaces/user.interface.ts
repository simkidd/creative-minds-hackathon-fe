import { ICourse } from "./course.interface";

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  image: string;
  courses: ICourse[];
  createdAt: Date;
  updatedAt: Date;
}
