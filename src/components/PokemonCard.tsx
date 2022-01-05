import {
  Card,
  Grid,
  Chip,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import {useEffect, useState} from 'react';
import {types} from '../data/enums/types.enum';
import { IPokemonItemDetail } from '../data/models/pokemon.model';

export default function PokemonCard(props:any) {
  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(data => setPokemonInfo(data))
  }, [props])


  const [pokemonItem, setPokemonInfo] = useState<IPokemonItemDetail>({} as IPokemonItemDetail);

  console.log(pokemonItem)
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const typeColor = (type:any) => {
    for (const [key, value] of Object.entries(types)) {
      if (key === type) {
        return value;
      }
    }
  }

  return (
    <Card variant="outlined">
      <Grid container justifyContent="center">
        <CardMedia
          component="img"
          sx={{width: 'auto'}}
          height="150"
          image={pokemonItem?.sprites?.other?.home.front_default}
          // image={pokemonItem?.sprites?.other["official-artwork"].front_default}
        />
      </Grid>
      
      <CardContent sx={{'paddingY': 0}}>
        <Typography variant="overline" display="block">
          No.{pokemonItem && pokemonItem.id}
        </Typography> 
        <Typography sx={{marginTop: '-10p x'}}variant="h6" component="div">
          {capitalize(props.name)}
        </Typography>
      </CardContent>
      <CardActions sx={{paddingTop: 0, paddingLeft: '14px'}}>
        {pokemonItem?.types?.map((type, index) => (
          <Chip
            key={index}
            label={type.type.name}
            sx={{'backgroundColor': typeColor(type.type.name)}}
            size="small"
          />
        ))}
      </CardActions>
    </Card>
  );
}