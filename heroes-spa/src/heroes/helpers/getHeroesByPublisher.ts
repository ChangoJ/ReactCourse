import { heroes } from "../data/heroes";

export const getHeoresByPublisher = (publisher: string) => {
        const validPublisher = ['DC Comics', 'Marvel Comics'];
        if(!validPublisher.includes(publisher)){
            throw new Error(`Publisher ${publisher} is not valid`);
        }

        return heroes.filter(heroe => heroe.publisher === publisher)
}