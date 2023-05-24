import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Vaishnavi",
    lastName: "Paliya",
    username: "vaishnavi",
    password: "vaishnavi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"tweet about web dev",
    portfolio:"www.vaishnavipaliya.com",
    userImage:"https://minimaltoolkit.com/images/randomdata/female/101.jpg"
  },
];
