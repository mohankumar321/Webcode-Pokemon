const body = document.querySelector('body');
const pokemonsList = document.getElementById('pokemon-list');
const loadPokemons = async () => {
  try {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50'); 
    console.log('response', response);
    const data = await response.json(); 
    console.log('DATA  ', data);
    data.results.forEach((pokemon, index) => {
      const listItem = document.createElement('li');
    
      const name = document.createTextNode(`${index+1} ${pokemon.name} `);
      console.log(data)
      const ability=document.createTextNode(`${pokemon.ability}`)
      const image=document.createElement("img")
   
      image.src="http://pokeapi.co/api/v2/pokemons/"
      console.log(image)
      const moves=document.createTextNode(`${pokemon.moves}`)

    
listItem.appendChild(image)
listItem.appendChild(moves)
      listItem.appendChild(name);
      listItem.appendChild(ability);
      pokemonsList.appendChild(listItem);

     
    });
  } catch (error) {
    console.error('Error fetching the Pokemons', error);
  }
};



loadPokemons();
