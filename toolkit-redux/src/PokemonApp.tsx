import { useEffect } from "react"
import { useDispatch,  useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {

    const dispatch = useDispatch<any>()
    const  {isLoading, page, pokemons = []} = useSelector((state:any)=> state.pokemons)

    useEffect(() => {
      dispatch(getPokemons())
    },[])

  return (
    <>
    <h1>PokemonApp</h1>
    <hr/>
    <span> {isLoading ? 'True' : 'False'} </span>
    <ul>
        {
            pokemons?.map((pokemon:any) => (
                <li key={pokemon.name}>
                    {pokemon.name}
                </li>
            ))
        }
    </ul>

    <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
    </button>
    </>
  )
}
