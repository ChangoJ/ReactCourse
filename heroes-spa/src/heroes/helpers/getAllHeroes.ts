import { heroes } from "../data/heroes";

export const getAllHeroes = (searchTerm?: string) => {  
        
        const filteredHeroes = heroes.filter(
                (hero: any) =>
                  hero.superhero.toLowerCase().includes(searchTerm?.toLowerCase()) ||
                  hero.alter_ego.toLowerCase().includes(searchTerm?.toLowerCase())
              );

        return {
                allHeroes: heroes,
                filteredHeroes
        }
}