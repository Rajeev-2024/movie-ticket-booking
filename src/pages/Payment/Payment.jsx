import "./Payment.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState("");

    const {
        total,
        selectedSeats,
        selectedDate,
        selectedTime,
        movieId,
        theatreId
    } = location.state || {};

    return (
        <div className="payment">

            <h1>Payment</h1>

            <div className="payment-card">

                <h2>Choose Payment Method</h2>

                <button
                    className={paymentMethod === "UPI" ? "payment-selected" : ""}
                    onClick={() => setPaymentMethod("UPI")}
                >
                    UPI
                </button>

                <button
                    className={paymentMethod === "Card" ? "payment-selected" : ""}
                    onClick={() => setPaymentMethod("Card")}
                >
                    Credit / Debit Card
                </button>

                <button
                    className={paymentMethod === "Net Banking" ? "payment-selected" : ""}
                    onClick={() => setPaymentMethod("Net Banking")}
                >
                    Net Banking
                </button>

                <h3>Total Amount: ₹{total}</h3>

                <button
                    className="pay-btn"
                    onClick={() => {
                        if (paymentMethod === "") {
                            alert("Please select a payment method");
                            return;
                        }

                        navigate("/confirmation", {
                            state: {
                                total,
                                paymentMethod,
                                selectedSeats,
                                selectedDate,
                                selectedTime,
                                movieId,
                                theatreId
                            }
                        });
                    }}
                >
                    Pay Now
                </button>

            </div>

        </div>
    );
};

export default Payment;