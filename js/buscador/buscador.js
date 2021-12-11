// seleccionar los elementos que vamos a ocupar

// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const pokemonContainer = document.querySelector(".pokemon-Container");

// button.addEventListener("click", (e) => {
//     e.preventDefault();
//     getPokemon(input.value);
// })

// function getPokemon (pokemon){
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     .then((res) => res.json())
//     .then((data) => {
//         createPokemon(data);
//     });
    
    
// }

// function createPokemon(pokemon){
//     const img = document.createElement("img");
//     img.src = pokemon.sprites.front_default;

//     const h3 = document.createElement("h3");
//     h3.textContent = pokemon.name;

//     const div = document.createElement("div");
//     div.appendChild(img);
//     div.appendChild(h3);

//     pokemonContainer.appendChild(div);
    

// }

import {$,mostrarAlerta,mostraInfo} from "./funciones.js"
import { obtenerPokemon } from "./API.js";

(function(){
    const formulario=$('#formulario');
    formulario.addEventListener('submit', validarForm);

    async function validarForm(e){
        e.preventDefault();
        const pokemon=$('#pokemonInput').value;
        if(pokemon.length==0){
            mostrarAlerta('El campo es Obligatorio');
            return;
        }
        const infoPokemon=await obtenerPokemon(pokemon);
        const info=$('.info');
        info.innerHTML='';
        mostraInfo(infoPokemon);
    }

})();