import React, { useEffect, useState } from 'react'
import MoviesList from '../../components/MoviesList/MoviesList';
import { fetchTrendingMovies } from '../../services/api';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        try {
            const getData = async () => {
                const data = await fetchTrendingMovies();
                setMovies(data);
            };
            getData();

        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div>
            <MoviesList movies={movies} />
        </div>
    )
}

export default HomePage

