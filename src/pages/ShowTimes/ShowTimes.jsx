import "./ShowTimes.css";
import theatres from "../../data/theatres.json";
import shows from "../../data/shows.json";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ShowTimes = () => {
    const { movieId, theatreId } = useParams();
    const navigate = useNavigate();

    const dates = [
        {
            label: "Today",
            date: new Date()
        },
        {
            label: "Tomorrow",
            date: new Date(Date.now() + 86400000)
        },
        {
            label: "Day After Tomorrow",
            date: new Date(Date.now() + 172800000)
        }
    ];

    const [selectedDate, setSelectedDate] = useState(dates[0].date);

    const theatre = theatres.find(
        (theatre) => theatre.id === Number(theatreId)
    );

    const theatreShows = shows.find(
        (show) => show.theatreId === Number(theatreId)
    );

    return (
        <div className="show-times">

            <h1>{theatre.name}</h1>
            <p>{theatre.location}</p>

            <h2>Select Date</h2>

            <div className="date-list">
                {dates.map((item) => (
                    <button
                        key={item.label}
                        className={
                            selectedDate.toDateString() ===
                            item.date.toDateString()
                                ? "date-selected"
                                : ""
                        }
                        onClick={() => setSelectedDate(item.date)}
                    >
                        <span>{item.label}</span>

                        <small>
                            {item.date.toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short"
                            })}
                        </small>
                    </button>
                ))}
            </div>

            <h2>Select Show Time</h2>

            <div className="time-list">
                {theatreShows.times.map((time) => (
                    <button
                        key={time}
                        onClick={() =>
                            navigate(`/seats/${movieId}/${theatreId}`, {
                                state: {
                                    selectedTime: time,
                                    selectedDate: selectedDate
                                }
                            })
                        }
                    >
                        {time}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default ShowTimes;