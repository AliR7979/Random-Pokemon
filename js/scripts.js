console.log("Hello World");

const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const button = document.getElementById("button");

let getPokiDetails = () => {
    // Genrates a random Pokemons between 1 and 150
    let id = Math.floor(Math.random() * 151);
    console.log(id);

    const finalUrl = url + id;
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data);
            // console.log(data);
        });
    };

let generateCard = (data) => {
    console.log(data);
    const hp = data.stats[0].base_stat;
    // console.log(hp);
    const imgSrc = data.sprites.other.dream_world.front_default; ;
    const Pokiname = data.name;
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
    const statWeight = data.weight;
    const statHeight = data.height;
    const pokemonAbility1 = data.abilities[0].ability.name;
    const pokemonAbility2 = data.abilities[1].ability.name;
    const pokemonAbility3 = data.abilities[2].ability.name;


    card.innerHTML = `
            <p class="hp">
                <span>HP</span>
                ${hp}
            </p>

            <img src=${imgSrc} alt="Pikachu">
            <h2 class="Poki-Name">${Pokiname.toUpperCase()}</h2>

            <div class="types">

            </div>

            <div class="stats1">
                <div>
                    <h3>${statAttack}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${statDefense}</h3>
                    <p>Defence</p>
                </div>
                <div>
                    <h3>${statSpeed}</h3>
                    <p>Speed</p>
                </div>
            </div>

            <div class="stats2">
                <div>
                    <h3>${pokemonAbility1.replace(/\b\w/g, (letter) => letter.toUpperCase())}</h3>
                </div>
                <div>
                    <h3>${pokemonAbility2.replace(/\b\w/g, (letter) => letter.toUpperCase())}</h3>
                </div>
                <div>
                    <h3>${pokemonAbility3.replace(/\b\w/g, (letter) => letter.toUpperCase())}</h3>
                </div>
            </div>
            `;
        appendTypes(data.types);
};

let appendTypes = (types) => {
    // console.log(types);
    types.forEach((type) => {
        let span = document.createElement("span");
        span.textContent = type.type.name.replace(/\b\w/g, (letter) => letter.toUpperCase());
        console.log(span);
        document.querySelector(".types").appendChild(span);
    });
};

button.addEventListener("click", getPokiDetails);
window.addEventListener("load", getPokiDetails);



// const pokemon = document.getElementById("pokemon");
// const pokemonName = document.getElementById("pokemonName");
// const pokemonImage = document.getElementById("pokemonImage");
// const pokemonType = document.getElementById("pokemonType");
// const pokemonAbility = document.getElementById("pokemonAbility");
// const pokemonWeight = document.getElementById("pokemonWeight");
// const pokemonHeight = document.getElementById("pokemonHeight");
// const pokemonMoves = document.getElementById("pokemonMoves");
// const pokemonStats = document.getElementById("pokemonStats");
// const pokemonEgg = document.getElementById("pokemonEgg");
// const pokemonGender = document.getElementById("pokemonGender");
// const pokemonGeneration = document.getElementById("pokemonGeneration");
// const pokemonHabitat = document.getElementById("pokemonHabitat");