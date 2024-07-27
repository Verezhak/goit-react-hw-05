
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import s from './MovieReviews.module.css'
const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews);
    }, [movieId]);

    return (
        <div>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <p className={s.text}><span>Author: {review.author}!</span> {review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieReviews;
