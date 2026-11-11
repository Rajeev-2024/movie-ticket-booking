import "./TheatreSelection.css";
import theatres from "../../data/theatres.json";
import { useNavigate, useParams } from "react-router-dom";

const TheatreSelection = () => {
  const navigate = useNavigate();
  const { id: movieId } = useParams();

  return (
    <div className="theatre-selection">

      <h1>Select Theatre</h1>

      <div className="theatre-list">
        {theatres.map((theatre) => (
          <div className="theatre-card" key={theatre.id}>
            <h2>{theatre.name}</h2>
            <p>{theatre.location}</p>

            <button
              onClick={() => navigate(`/shows/${movieId}/${theatre.id}`)}
            >
              Select Theatre
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TheatreSelection;