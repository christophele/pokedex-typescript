import {
  TextField,
} from '@mui/material';

export default function Search({pokemonList, setFilteredPokemonList}) {
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    let result2 = [];

    console.log(pokemonList, 'pokemonListpokemonListpokemonList search')

    result2 = pokemonList.filter((data) => {
      return data.name.search(value) !== -1;
    });

    console.log(result2, 'searchh')
    setFilteredPokemonList(result2);

  }
  return (
    <>
      <TextField
        type="text"
        onChange={e => handleSearch(e)}
        id="search-pokemon"
        label="Search Pokemon"
        variant="outlined"
        size="small"
        fullWidth
      />
    </>
  )
}

// import {
//   TextField,
// } from '@mui/material';
// import {IPokemonList, IPokemonItem, IPokemonItemDetail} from '../data/models/pokemon.model';

// type SearchProps = {
//   pokemonList: IPokemonList;
//   setFilteredPokemonList: (results: IPokemonList) => void
// }

// export default function Search({pokemonList, setFilteredPokemonList}: SearchProps) {
//   const handleSearch = (event:any) => {
//     const value:string = event.target.value.toLowerCase();
//     let result2 = [];

//     result2 = pokemonList.filter((data:IPokemonItemDetail) => {
//       return data.name.search(value) !== -1;
//     }); 

//     setFilteredPokemonList(result2);

//   }
//   return (
//     <>
//       <TextField
//         type="text"
//         onChange={e => handleSearch(e)}
//         id="search-pokemon"
//         label="Search Pokemon"
//         variant="outlined"
//         size="small"
//         fullWidth
//       />
//     </>
//   )
// }