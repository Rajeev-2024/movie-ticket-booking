import "./MovieDetails.css";
import { useParams,useNavigate } from "react-router-dom";
import movies from "../../data/movies.json";
import movieImages from "../../data/movieImages";

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const movie = movies.find((movie) => movie.id === Number(id));

    return (
        <div className="movie-details">

            <div className="details-poster">
                <img src={movieImages[movie.id]} alt={movie.title} />
            </div>

            <div className="details-info">
                <h1>{movie.title}</h1>

                <p>Language: {movie.language}</p>
                <p>Genre: {movie.genre}</p>
                <p>⭐ Rating: {movie.rating}</p>
                <p>Duration: {movie.duration}</p>

                <button onClick={() => navigate(`/theatre/${movie.id}`)}>
                    Book Tickets
                </button>
            </div>

        </div>
    );
};

export default MovieDetails;