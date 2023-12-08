import * as React from 'react';
import {useEffect, useState} from 'react';
import axios from'axios';


const MoviesList = () => {
// const classes = useStyles();
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        const getMovies = async () => {
          try {
            const {data} = await axios.get('http://localhost:3000/movies');
            setMovies(data)
          } catch (error) {
            console.log(error)
          }
        }
  
        getMovies()
    }, [])
  
    return (
      <>
      {/* {movies.map(movie => 
      <Card  key={movie.id} variant="outlined">
        <CardContent>
            {movie.id}
        </CardContent>
      </Card> */}
    
      
       
      </>
    )
}

export default MoviesList;