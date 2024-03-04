import { randomUUID } from "crypto";
import { UserData } from "../types";
import DB from '../../database/users.json';
import { Role } from "../types";
import { UserType, findUser } from "../utils";

export abstract class User {
    id;
    fullName;
    userName;
    password;
    role:Role;
    isLoggedIn: boolean;

    constructor(data: UserData) {
        const { fullName, userName, password } = data;
        this.id = randomUUID();
        this.fullName = fullName;
        this.userName = userName;
        this.password = password;
        this.role = 'admin';
        this.isLoggedIn = false;
    }

}