import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setIsLoading:(state) => {
        state.isLoading = true;
    },
    setPokemons: (state, actions) => {
        state.isLoading = false
        state.page = actions.payload.page
        state.pokemons = actions.payload.pokemons
    }

  }
});

export const { setIsLoading, setPokemons} = pokemonSlice.actions

