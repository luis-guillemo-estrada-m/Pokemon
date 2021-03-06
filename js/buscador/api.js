import { mostrarAlerta } from "./funciones.js";
const url='https://pokeapi.co/api/v2/pokemon/';

export const obtenerPokemon=async pokemon=>{
    try {
        const respuesta = await fetch(`${url}${pokemon}`);
        if (!respuesta.ok) {
            mostrarAlerta('No registrado en la pokedex');
            return;
        }
        const buscando=await respuesta.json();
        return buscando;
    } catch (error) {
        mostrarAlerta(error)
    }

}