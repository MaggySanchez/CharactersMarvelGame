import { CharacterData, Character } from "./types";
import { randomLetter, randomCode } from "./utils";

const API_KEY= '505d712e8aa8c0966f1e9040e5096cb1'
const HASH = '20a26f6b882d78e38fe78faa8490f9cf'


export async function fetchRandomCharacter(): Promise<Character | null> {
    try {
        const letter = randomLetter();
        const API_BASE_URL = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${letter}&orderBy=name&ts=1&apikey=${API_KEY}&hash=${HASH}`;
        
        const response = await fetch(API_BASE_URL);
        const data = await response.json();

        let newCharacter: CharacterData | null = null;

        while (!newCharacter) {
            let randomID = randomCode();
            newCharacter = data.data.results.find((character: any) => character.id === randomID) || null;
        }

        let result: Character = {
            name: newCharacter.name,
            description: newCharacter.description,
            comics: newCharacter.comics.items.map(c=> c.name),
            series: newCharacter.series.items.map(c=> c.name),
            stories: newCharacter.stories.items.map(c=> c.name),
            events: newCharacter.events.items.map(c=> c.name)
        }
        
        console.log(result);
        
        return result;

    } catch (error) {
        console.error('Error getting data:', error);
        throw error;
    }
}

