
const pokemonName = document.querySelector(".poke-name")

const pokemonNumber = document.querySelector(".poke-number")

const pokeGif = document.querySelector(".gif_pokemon")

const form = document.querySelector(".form")

const input = document.querySelector(".input-search")

const buttonPrevious = document.querySelector(".btn-previous")

const buttonNext = document.querySelector(".btn-next")

let searchPokemon = 31



const fetchPokemon = async (pokemon) => {
   const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

   if (pokeApi.status === 200){
   const data = await pokeApi.json()
   return data
   }
}

// fetchPokemon("25")

const renderPokemon = async (pokemon) => {

   pokemonName.innerHTML = "Loading..."
   pokemonNumber.innerHTML = ""

   const data = await fetchPokemon(pokemon)
   
   if (data){
   pokeGif.style.display = "block"
   pokemonName.innerHTML = data.name
   pokemonNumber.innerHTML = data.id
   pokeGif.src = data["sprites"]["versions"]["generation-v"]["black-white"]
   ["animated"]["front_default"]
   searchPokemon = data.id
} else {
   pokeGif.style.display = "none"
   pokemonName.innerHTML = "Not found"
   pokemonNumber.innerHTML = ""
}
}

// renderPokemon("pikachu")

const submitForm = (event) => {
   event.preventDefault()

   renderPokemon(input.value.toLowerCase())
   input.value = ""
}

form.addEventListener("submit", submitForm)

buttonPrevious.addEventListener("click", () => {
  
  if (searchPokemon > 1){
   searchPokemon -= 1
   renderPokemon(searchPokemon)
  }
})

buttonNext.addEventListener("click", () => {
   searchPokemon += 1
   renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon)