// Get elements from the DOM
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const pokemonname = document.getElementById("pokemon-name");
const pokemonid = document.getElementById("pokemon-id");
const weightw = document.getElementById("weight");
const heightw = document.getElementById("height");
const typesw = document.getElementById("types");
const hpw = document.getElementById("hp");
const attackw = document.getElementById("attack");
const defensew = document.getElementById("defense");
const specialattackw = document.getElementById("special-attack");
const specialdefensew = document.getElementById("special-defense");
const speedw = document.getElementById("speed");
const imgContainer = document.getElementById("img-pokemon"); 

searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    getPokemon();
});

const getPokemon = async () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${query}`;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Pokémon not found");

        const data = await res.json();
        console.log("Pokémon Data:", data); 

      
        const { id, name, height, weight, types, stats, sprites } = data;

      
        const typeNames = types.map(type => 
            `<span class="type-box ${type.type.name}">${type.type.name.toUpperCase()}</span>`
        ).join(" ");

      
        pokemonname.innerHTML = `${name.toUpperCase()}`;
        pokemonid.innerHTML = `#${id}`;
        weightw.innerHTML = `Weight: ${weight}`;
        heightw.innerHTML = `Height: ${height}`;
        typesw.innerHTML = typeNames;
        hpw.innerHTML = stats[0].base_stat;
        attackw.innerHTML = stats[1].base_stat;
        defensew.innerHTML = stats[2].base_stat;
        specialattackw.innerHTML = stats[3].base_stat;
        specialdefensew.innerHTML = stats[4].base_stat;
        speedw.innerHTML = stats[5].base_stat;

       
        imgContainer.innerHTML = `<img id="sprite" src="${sprites.front_default}" alt="${name}" style="width: 150px;">`;

    } catch (error) {
        console.error("Error:", error.message);
        alert("Pokémon not found");
        pokemonname.innerHTML = "";
        pokemonid.innerHTML = "";
        weightw.innerHTML = "";
        heightw.innerHTML = "";
        typesw.innerHTML = "";
        hpw.innerHTML = "";
        attackw.innerHTML = "";
        defensew.innerHTML = "";
        specialattackw.innerHTML = "";
        specialdefensew.innerHTML = "";
        speedw.innerHTML = "";
        imgContainer.innerHTML ="";
    }
};
