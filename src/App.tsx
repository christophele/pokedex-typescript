import {
  Grid,
  Box,
  TextField,
  Container,
  Stack,
  CircularProgress
} from '@mui/material';
import PokemonCard from './components/PokemonCard';
import {useEffect, useState} from 'react';
import Search from './components/Search.jsx';
import {IPokemonItem, IPokemonItemDetail, IPokemonList} from './data/models/pokemon.model';

function App() {
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
      .then(res => res.json())
      .then(data => {
        setPokemonList(data.results);
        setFilteredPokemonList(data.results);
      })
      .catch(err => console.error(`Error by getting data : ${err}`));
  }, []);

  const [pokemonList, setPokemonList] = useState<any>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<any>(pokemonList);

  if (pokemonList.length === 0) {
    return (
      <Grid
        sx={{height: '100vh'}}
        container
        justifyContent="center"
        alignItems="center"
      >
      
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress
            color="secondary"
            thickness={4}
            size={100}
            disableShrink
          />
        </Stack>
      </Grid>
    )
  }
  else {
    return (
      <Box sx={{ mt: 7, mb: 12 }}>
        <Container>
          <Stack
            sx={{mb: 10}}
            justifyContent="center"
            alignItems="center"
          >
            <img src="/pokedex.png" alt="pokedex" width="200" style={{marginBottom: '10px'}}/>
            <Search pokemonList={pokemonList} setFilteredPokemonList={setFilteredPokemonList}/>
          </Stack>
  
          <Grid container spacing={10}>
            {filteredPokemonList.map((pokemon: IPokemonItem, index:number) => 
              <Grid item xs={4} md={4} lg={3}>
                <PokemonCard
                  key={index}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default App;