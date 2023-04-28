import { Movie } from "../componentes/Style/styleMovie";
import { Container, MovieList } from "../componentes/Style/styles";
import { useState } from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => {
                console.error('Erro ao carregar filmes:', error);
            });
    }, []);

    return (
        <Container>
            <h1>Catalogo de filmes</h1>
            <MovieList>
                {movies && movies.map(movie => {
                    return (
                        <Movie key={movie.id}>

                            <Link to={`/details/${movie.id}`}>  <img src={`${movie.poster}`} alt={movie.titulo} /></Link>


                            <span>{movie.titulo}</span>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );


}

export default Home;