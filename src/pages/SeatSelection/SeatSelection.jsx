import "./SeatSelection.css";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const { movieId, theatreId } = useParams();

  const {
    selectedTime,
    selectedDate
  } = location.state || {
    selectedTime: "",
    selectedDate: ""
  };

  const seats = [
    "A1", "A2", "A3", "A4", "A5", "A6",
    "B1", "B2", "B3", "B4", "B5", "B6",
    "C1", "C2", "C3", "C4", "C5", "C6",
    "D1", "D2", "D3", "D4", "D5", "D6"
  ];

  const occupiedSeats = ["A2", "B4", "C3", "D5"];

  const getSeatPrice = (seat) => {
    if (seat.startsWith("A") || seat.startsWith("B")) {
      return 250;
    }

    return 180;
  };

  const ticketPrice = selectedSeats.reduce(
    (total, seat) => total + getSeatPrice(seat),
    0
  );

  const selectSeat = (seat) => {
    if (occupiedSeats.includes(seat)) {
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="seat-selection">

      <h1>Select Your Seats</h1>
      <p className="booking-details">
        {selectedDate?.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        })} • {selectedTime}
      </p>

      <div className="screen">
        SCREEN
      </div>

      <div className="seat-grid">
        {seats.map((seat) => (
          <button
            key={seat}
            className={
              occupiedSeats.includes(seat)
                ? "seat occupied"
                : selectedSeats.includes(seat)
                  ? "seat selected"
                  : "seat"
            }
            onClick={() => selectSeat(seat)}
          >
            {seat}
          </button>
        ))}
      </div>

      <div className="selected-info">
        <div className="seat-legend">
          <div>
            <span className="legend-seat available"></span>
            <p>Available</p>
          </div>

          <div>
            <span className="legend-seat selected"></span>
            <p>Selected</p>
          </div>

          <div>
            <span className="legend-seat occupied"></span>
            <p>Occupied</p>
          </div>
        </div>
        <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
        <button
          className="continue-btn"
          onClick={() => {
            if (selectedSeats.length === 0) {
              alert("Please select at least one seat");
              return;
            }

            navigate("/summary", {
              state: {
                selectedSeats,
                selectedDate,
                selectedTime,
                movieId,
                theatreId,
                ticketPrice
              }
            });
          }}
        >
          Continue
        </button>
      </div>

    </div>
  );
};

export default SeatSelection;