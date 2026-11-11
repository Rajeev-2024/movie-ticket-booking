import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, image }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-link">
      <div className="movie-card">

        <div className="movie-poster">
          <img src={image} alt={movie.title} />
        </div>

        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>{movie.language} • {movie.genre}</p>
          <p>⭐ {movie.rating}</p>
          <p>{movie.duration}</p>
        </div>

      </div>
    </Link>
  );
};

export default MovieCard;