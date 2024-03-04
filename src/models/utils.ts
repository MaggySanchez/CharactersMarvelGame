import { UserData, UsersDB } from './types';
import DB from '../database/users.json'

export type UserType = 'administrators' | 'players'

export function randomLetter(){
    let index = Math.floor(Math.random() * 26);
    let letter = String.fromCharCode(65 + index);
    return letter
}

export function randomCode(): number {
    let min = 1000000;
    let max = 1999999;

    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function findUser(username: string, role: UserType) {
    return DB[role].find((u)=> u.userName === username)
}

export function findLastPosition() {
    let lowestScore = Infinity;
    let player: any;
    DB.players.forEach((p)=> {
        if(p.score<lowestScore){
            player = p
        } 
    })
    return player?player.rank:1;
}
