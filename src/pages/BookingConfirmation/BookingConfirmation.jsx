import "./BookingConfirmation.css";
import { useLocation, useNavigate } from "react-router-dom";
import movies from "../../data/movies.json";
import theatres from "../../data/theatres.json";
import { useState } from "react";

const BookingConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        total,
        paymentMethod,
        selectedSeats,
        selectedDate,
        selectedTime,
        movieId,
        theatreId
    } = location.state || {};

    const movie = movies.find(
        (movie) => movie.id === Number(movieId)
    );

    const theatre = theatres.find(
        (theatre) => theatre.id === Number(theatreId)
    );

    const [bookingId] = useState(
        "MB" + Math.floor(100000 + Math.random() * 900000)
    );

    return (
        <div className="booking-confirmation">

            <div className="confirmation-card">

                <h1>Booking Confirmed 🎉</h1>

                <p>Booking ID: {bookingId}</p>

                <p>Your movie ticket has been booked successfully.</p>

                <p>Movie: {movie?.title}</p>

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
                    Selected Seats: {selectedSeats?.join(", ")}
                </p>

                <h3>Total Paid: ₹{total}</h3>

                <p>Payment Method: {paymentMethod}</p>

                <p>Thank you for booking with MovieBook.</p>
                <button
                    className="home-btn"
                    onClick={() => navigate("/")}
                >
                    Back to Home
                </button>

            </div>

        </div>
    );
};

export default BookingConfirmation;