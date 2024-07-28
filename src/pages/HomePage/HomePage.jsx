import React, { useEffect, useState } from 'react'
import MoviesList from '../../components/MoviesList/MoviesList';
import { fetchTrendingMovies } from '../../services/api';
import s from './HomePage.module.css'
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
            <h2 className={s.title}>The most current movies:</h2>
            <MoviesList movies={movies} />
        </div>
    )
}

export default HomePage

