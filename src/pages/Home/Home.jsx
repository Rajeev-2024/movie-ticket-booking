import "./Home.css";
import { useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import movies from "../../data/movies.json";
import movieImages from "../../data/movieImages";

const Home = () => {

    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("All");

    return (
        <div className="home">

            <section className="hero">
                <h1>Book Your Movie Experience</h1>
                <p>Movies, theatres and tickets — all in one place.</p>
                <button>Explore Movies</button>
            </section>

            <section className="movies-section">
                <h2>Now Showing</h2>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-box"
                />

                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="genre-filter"
                >
                    <option value="All">All Genres</option>
                    <option value="Action">Action</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                </select>
                <div className="movie-list">
                    {movies
                        .filter((movie) =>
                            movie.title.toLowerCase().includes(search.toLowerCase())
                        )
                        .filter((movie) =>
                            genre === "All" || movie.genre === genre
                        )
                        .map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                image={movieImages[movie.id]}
                            />
                        ))}
                </div>
            </section>

        </div>
    );
}

export default Home;
