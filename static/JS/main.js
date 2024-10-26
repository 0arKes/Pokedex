const pokeId = document.querySelector("#id");
const pokeName = document.querySelector("#name");
const pokeHeight = document.querySelector("#height");
const pokeWeight = document.querySelector("#weight");
const pokeImage = document.querySelector("#img");
const pokeType1 = document.querySelector("#type1");
const pokeType2 = document.querySelector("#type2");

/*const body = document.querySelector("html")*/
const body = document.getElementsByTagName("html")[0];

const buttonForward = document.querySelector(".forward");
const buttonBackward = document.querySelector(".backward");


const form = document.querySelector(".form");
const input = document.querySelector(".poke-search");


const hp = document.querySelector("#hp");
const atq = document.querySelector("#atq");
const def = document.querySelector("#def");
const spe = document.querySelector("#spe");

let searchPokemon = 1;


const pokemonFetch = async (pokemon) =>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
}

const Render = async (pokemon) =>{
    const data = await pokemonFetch(pokemon);
    if (data){
        pokeName.innerHTML = data.name;
        pokeId.innerHTML = `#${data.id}`;
        pokeHeight.innerHTML = `<strong>Altura: </strong> ${data.height/10} M`;
        pokeWeight.innerHTML = `<strong>Peso: </strong> ${data.weight/10} Kg`;
        if (data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]){
            pokeImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
        }else{
            pokeImage.src = "./static/img/none.png"
        }
        pokeType1.innerHTML = data["types"]["0"]["type"]["name"];
        pokeType(data["types"]["0"]["type"]["name"]);
        hp.innerHTML = `<strong>HP: </strong>${data["stats"]["0"]["base_stat"]}`;
        atq.innerHTML = `<strong>ATQ: </strong>${data["stats"]["1"]["base_stat"]}`;
        def.innerHTML = `<strong>DEF: </strong>${data["stats"]["2"]["base_stat"]}`;
        spe.innerHTML = `<strong>VEL: </strong>${data["stats"]["5"]["base_stat"]}`;
        searchPokemon = data.id;
    }else{
        pokeName.innerHTML = "Erro";
        pokeId.innerHTML = "Erro";
        pokeHeight.innerHTML = "Erro";
        pokeWeight.innerHTML = "Erro";
    }

    if (data["types"]["length"] == 2){
        pokeType2.innerHTML = data["types"]["1"]["type"]["name"];
        pokeType2.style.display = 'block';
        pokeType(data["types"]["1"]["type"]["name"], 1);
    }
}
const pokeType = (type, where=0) =>{
    if (where === 0){
        
        switch (type){
            case "grass":
                pokeType1.classList.add("type-grass");
                body.classList.add("type-grass");
                break;
            case "fire":
                pokeType1.classList.add("type-fire");
                body.classList.add("type-fire");
                break;
            case "water":
                pokeType1.classList.add("type-water");
                body.classList.add("type-water");
                break;
            case "bug":
                pokeType1.classList.add("type-bug");
                body.classList.add("type-bug");
                break;
            case "normal":
                pokeType1.classList.add("type-normal");
                body.classList.add("type-normal");
                break;
            case "poison":
                pokeType1.classList.add("type-poison");
                body.classList.add("type-poison");
                break;
            case "electric":
                pokeType1.classList.add("type-electric");
                body.classList.add("type-electric");
                break;
            case "ground":
                pokeType1.classList.add("type-ground");
                body.classList.add("type-ground");
                break;
            case "fairy":
                pokeType1.classList.add("type-fairy");
                body.classList.add("type-fairy");
                break;
            case "fighting":
                pokeType1.classList.add("type-fighting");
                body.classList.add("type-fighting");
                break;
            case "psychic":
                pokeType1.classList.add("type-psychic");
                body.classList.add("type-psychic");
                break;
            case "rock":
                pokeType1.classList.add("type-rock");
                body.classList.add("type-rock");
                break;
            case "ghost":
                pokeType1.classList.add("type-ghost");
                body.classList.add("type-ghost");
                break;
            case "ice":
                pokeType1.classList.add("type-ice");
                body.classList.add("type-ice");
                break;
            case "dragon":
                pokeType1.classList.add("type-dragon");
                body.classList.add("type-dragon");
                break;
            case "steel":
                pokeType1.classList.add("type-steel");
                body.classList.add("type-steel");
                break;
            case "flying":
                pokeType1.classList.add("type-flying");
                body.classList.add("type-flying");
                break;
        }

    }else{
        console.log(type)
        switch (type){
            case "grass":
                pokeType2.classList.add("type-grass");
                break;
            case "fire":
                pokeType2.classList.add("type-fire");
                break;
            case "water":
                pokeType2.classList.add("type-water");
                break;
            case "bug":
                pokeType2.classList.add("type-bug");
                break;
            case "normal":
                pokeType2.classList.add("type-normal");
                break;
            case "poison":
                pokeType2.classList.add("type-poison");
                break;
            case "electric":
                pokeType2.classList.add("type-electric");
                break;
            case "ground":
                pokeType2.classList.add("type-ground");
                break;
            case "fairy":
                pokeType2.classList.add("type-fairy");
                break;
            case "fighting":
                pokeType2.classList.add("type-fighting");
                break;
            case "psychic":
                pokeType2.classList.add("type-psychic");
                break;
            case "rock":
                pokeType2.classList.add("type-rock");
                break;
            case "ghost":
                pokeType2.classList.add("type-ghost");
                break;
            case "ice":
                pokeType2.classList.add("type-ice");
                break;
            case "dragon":
                pokeType2.classList.add("type-dragon");
                break;
            case "steel":
                pokeType2.classList.add("type-steel");
                break;
            case "flying":
                pokeType2.classList.add("type-flying");
                break;
        }
    }
}


form.addEventListener("submit", (event) =>{
    event.preventDefault();
    Render(input.value.toLowerCase());
    pokeType2.style.display = 'none';
    pokeType2.className = '';
    body.className = '';
});

buttonForward.addEventListener("click", () =>{
    if (searchPokemon >= 1){
        buttonBackward.style.display = "block"
        searchPokemon ++;
        pokeType1.className = '';
        pokeType2.style.display = 'none';
        pokeType2.className = '';
        body.className = '';
        Render(searchPokemon);
    }

})
buttonBackward.addEventListener("click", () =>{
    if (searchPokemon <= 1){
        buttonBackward.style.display = "none"
    }else{
        buttonBackward.style.display = "block"
        searchPokemon --;
        pokeType1.className = '';
        pokeType2.style.display = 'none';
        pokeType2.className = '';
        body.className = '';
        Render(searchPokemon);
    }
})

Render(1);