import "./BookingSummary.css";
import { useLocation, useNavigate } from "react-router-dom";
import movies from "../../data/movies.json";
import theatres from "../../data/theatres.json";

const BookingSummary = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const {
        selectedSeats,
        selectedTime,
        selectedDate,
        movieId,
        theatreId,
        ticketPrice
    } = location.state || {};

    const convenienceFee = Math.round(ticketPrice * 0.1);
    const total = ticketPrice + convenienceFee;

    const movie = movies.find(
        (movie) => movie.id === Number(movieId)
    );

    const theatre = theatres.find(
        (theatre) => theatre.id === Number(theatreId)
    );

    return (
        <div className="booking-summary">

            <h1>Booking Summary</h1>

            <div className="summary-card">
                <h2>{movie?.title}</h2>

                <p>Theatre: {theatre?.name}</p>
                <p>Location: {theatre?.location}</p>
                <p>
                    Date:{" "}
                    {selectedDate?.toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    })}
                </p>
                <p>Show Time: {selectedTime}</p>
                <p>
                    Selected Seats: {selectedSeats.join(", ") || "None"}
                </p>

                <hr />

                <p>Ticket Price: ₹{ticketPrice}</p>
                <p>Convenience Fee: ₹{convenienceFee}</p>

                <h3>Total: ₹{total}</h3>

                <button
                    onClick={() =>
                        navigate("/payment", {
                            state: {
                                total,
                                selectedSeats,
                                selectedDate,
                                selectedTime,
                                movieId,
                                theatreId
                            }
                        })
                    }
                >
                    Proceed to Payment
                </button>
            </div>

        </div>
    );
};

export default BookingSummary;