import { Input } from "@heroui/react";
import { useAnimateTitle } from "../hooks/useAnimateTitle";
import { useState, useEffect } from "react";
import { getAllHeroes } from "../helpers";
import { HeroCard } from "../components";
import { useSearchParams } from "react-router-dom";

interface Hero {
  id: string;
  superhero: string;
  alter_ego: string;
  publisher: string;
  first_appearance: string;
  characters: string;
}

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const titleRef = useAnimateTitle();

  const {filteredHeroes} = getAllHeroes(searchTerm);
  

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm("");
    setSearchParams({ });
    if (e.target.value.length > 0) {
      setSearchTerm(value);
      setSearchParams({ q: value.toLowerCase().trim() });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 ref={titleRef} className="text-3xl font-bold mb-8 text-center">
        Búsqueda de Héroes
      </h1>

      <div className="max-w-2xl mx-auto mb-8">
        <Input
          type="text"
          placeholder="Buscar heroe"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full"
          size="lg"
        />
      </div>

      {searchTerm.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHeroes.map((hero: Hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      )}

      {filteredHeroes.length === 0 && searchTerm.length > 0 && (
        <div className="text-center mt-8">
          <p className="text-xl text-gray-500">
            No se encontraron héroes que coincidan con tu búsqueda : {searchTerm}
          </p>
        </div>
      )}
    </div>
  );
};
