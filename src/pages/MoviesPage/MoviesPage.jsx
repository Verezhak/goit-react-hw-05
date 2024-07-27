import { useEffect, useState } from "react";
import MovieList from "../../components/MoviesList/MoviesList";
import { searchMovies } from "../../services/api";
import s from './MoviesPage.module.css'
import { useLocation, useSearchParams } from "react-router-dom";

const MoviesPage = () => {


    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        const queryParam = searchParams.get('query') || '';
        setQuery(queryParam);

        if (queryParam) {
            handleSearch(queryParam);
        }
    }, [searchParams]);

    const handleSearch = async (searchQuery) => {
        const results = await searchMovies(searchQuery);
        setMovies(results);
    };

    const onChange = (event) => {
        const newValue = event.target.value;
        setQuery(newValue);


        if (newValue) {
            searchParams.set('query', newValue);
        } else {
            searchParams.delete('query');
        }
        setSearchParams(searchParams);
    }




    return (
        <div className={s.searchMovies}>
            <h2>Search Movies</h2>
            <div className={s.form}>
                <input
                    placeholder='Enter search movie...'
                    type='search'
                    value={query}
                    onChange={onChange}
                />

            </div>
            {query.trim() !== '' && <MovieList movies={movies} />}
        </div>
    );
};



export default MoviesPage;
