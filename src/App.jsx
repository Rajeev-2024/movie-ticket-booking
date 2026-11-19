import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import TheatreSelection from "./pages/TheatreSelection/TheatreSelection";
import ShowTimes from "./pages/ShowTimes/ShowTimes";
import SeatSelection from "./pages/SeatSelection/SeatSelection";
import BookingSummary from "./pages/BookingSummary/BookingSummary";
import Payment from "./pages/Payment/Payment";
import BookingConfirmation from "./pages/BookingConfirmation/BookingConfirmation";

const App = () => {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/theatre/:id" element={<TheatreSelection />} />
        <Route path="/shows/:movieId/:theatreId" element={<ShowTimes />} />
        <Route
          path="/seats/:movieId/:theatreId"
          element={<SeatSelection />}
        />
        <Route path="/summary" element={<BookingSummary />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/confirmation"
          element={<BookingConfirmation />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;