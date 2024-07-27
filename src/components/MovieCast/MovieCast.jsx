
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import s from './MovieCast.module.css'
const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCredits(movieId).then(setCast);
    }, [movieId]);

    return (
        <div>
            <ul>
                {cast.map((actor) => (
                    <li key={actor.cast_id}>
                        <p className={s.text}>{actor.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;
