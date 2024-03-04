import { UserData } from "../types";
import { findLastPosition } from "../utils";
import { User } from "./user";

export class Player extends User {
    score;
    rank;

    constructor(data: UserData){
        const {score, rank} = data;
        super(data);
        this.role = 'player';
        this.score = score || 0;
        this.rank = rank || (findLastPosition()+1)
    }


}

// let userData: UserData = {
//     fullName: "Veronica Amaya",
//     userName : "Verito02",
//     password: "3598",
// }

// let user = new Player(userData)

// console.log(user);
