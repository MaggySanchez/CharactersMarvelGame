export type Role = 'admin' | 'player'

export interface CharacterData {
    id: number,
    name: string,
    description: string,
    comics: {
        items: [{ name: string }]
    },
    series: {
        items: [{ name: string }]
    },
    stories: {
        items: [{ name: string }]
    },
    events: {
        items: [{ name: string }]
    }
}

export interface Character {
    name: string,
    description: string,
    comics: String[],
    series: String[],
    stories: String[],
    events: String[]
}


export interface UserData {
    fullName: string,
    userName: string,
    password: string,
    score?: number,
    rank?: number
}

export interface UsersDB {
    administrators: [
        {
            id: string,
            fullName: string,
            userName: string,
            Password: string,
        }
    ],
    players: [
        {
            id: string,
            userName: string,
            fullName: string,
            password: string,
            score: number,
            rank: number
        }
    ]
}



