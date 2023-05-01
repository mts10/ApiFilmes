
import { Movie } from "../componentes/Style/styleMovie";
import { Container, MovieList, OrderByContainer } from "../componentes/Style/styles";
import Keys from "../Config/key";
import { useState } from "react";
import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import Assistido from "../componentes/Button/assistido";

function Home() {
    const [movies, setMovies] = useState([]);
    const [orderBy, setOrderBy] = useState('titulo');
    const [orderDirection, setOrderDirection] = useState('asc');
    const [pesquisar, setPesquisar] = useState('');

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => {
                console.error('Erro ao carregar filmes:', error);
            });
    }, []);

    const handleOrderByChange = (event) => {
        const [newOrderBy, newOrderDirection] = event.target.value.split(',');
        setOrderBy(newOrderBy);
        setOrderDirection(newOrderDirection);
    };

    const compareMovies = (a, b) => {
        let comparison = 0;
        if (orderBy === 'titulo') {
            comparison = a.titulo.localeCompare(b.titulo);
        } else if (orderBy === 'ano') {
            comparison = a.ano - b.ano;
        } else if (orderBy === 'nota') {
            comparison = a.nota - b.nota;
        }
        if (orderDirection === 'desc') {
            comparison *= -1;
        }
        return comparison;
    };
    const handleSearchInputChange = (event) => {
         setPesquisar(event.target.value);
    };

    const sortedMovies = [...movies].sort(compareMovies);

    const handleAssistidoClick = (id) => {
        setMovies(
            movies.map((movie) =>
                movie.id === id ? { ...movie, assistido: !movie.assistido } : movie
            )
        );
    };
    return (
        <Container>
            <h1>Filmes disponiveis</h1>
            <OrderByContainer>
                <div className="d-flex justify-content-end">
                    <div className="col-md-1">
                    <div className="form-group">
                            <label htmlFor="search">Pesquisar:</label>
                            <input type="text" id="search"className="d-flex justify-content-end"value={pesquisar} onChange={handleSearchInputChange}/>
                    </div>
                        <div className="form-group">
                            <label htmlFor="orderby">Ordenar por:</label>
                            <select id="orderby" className="form-control" value={`${orderBy},${orderDirection}`} onChange={handleOrderByChange}>                            
                                <option value="titulo,asc">Título (A-Z)</option>
                                <option value="titulo,desc">Título (Z-A)</option>
                                <option value="ano,asc">Ano antigo</option>
                                <option value="ano,desc">Ano atual</option>
                                <option value="nota,desc">Nota maior</option>
                                <option value="nota,asc">Nota menor</option>
                                
                            </select>
                        </div>
                    </div>
                </div>
            </OrderByContainer>
            <MovieList>
                {sortedMovies && sortedMovies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/detalhes/${movie.id}`}>
                                <img src={`${movie.poster}`} alt={movie.titulo} />
                            </Link>
                            <span>{movie.titulo}</span>
                            <span>Nota: {movie.nota}</span>
                            <Assistido
                                assistido={movie.assistido}
                                onClick={handleAssistidoClick}
                                id={movie.id}
                            />
                        </Movie>
                    );
                })}
            </MovieList>
        </Container >
    );
}

export default Home;