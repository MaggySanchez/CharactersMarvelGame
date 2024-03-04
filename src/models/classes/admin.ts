import { UserData } from "../types";
import { User } from "./user";

export class Admin extends User {
    constructor(data: UserData){
        super(data)
        this.role = 'admin'
    }
}

// let adminData: UserData = {
//     fullName: "Veronica Amaya",
//     userName : "Verito02",
//     password: "3598",
// }

// let admin = new Admin(adminData)

// console.log(admin);
