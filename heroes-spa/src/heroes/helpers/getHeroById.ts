import { heroes } from "../data/heroes";

export const getHeroByid = (id: string) => {
    return heroes.find(heroe => heroe.id === id);
}