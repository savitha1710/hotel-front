


import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const history = useHistory();
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Define successMessage state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Check token on page load
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
      alert("You must log in to book a room!");
      history.replace("/login");
      return;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT to get expiration date
      const currentTime = Date.now() / 1000; // Get current time in seconds

      if (decodedToken.exp < currentTime) {
        console.log("❌ Token expired! Logging out...");
        localStorage.removeItem("token");  // Remove expired token
        setIsLoggedIn(false); // Update state
        alert("Session expired! Please log in again.");
        history.replace("/login"); // Redirect to login
      } else {
        setIsLoggedIn(true); // If token is valid, user is logged in
      }
    } catch (error) {
      console.error("❌ Invalid token:", error);
      localStorage.removeItem("token");
      setIsLoggedIn(false); // Update state if token is invalid
      history.replace("/login");
    }
  }, [history]);

  // Handle booking
  const handleBooking = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setErrorMessage("You must log in to book a room!");
      history.replace("/login");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      setErrorMessage("Session expired. Please log in again!");
      history.replace("/login");
      return;
    }

    try {
      const response = await axios.post(
        "https://hotel-back-6.onrender.com/api/bookings",
        {
          guestName,
          phone,
          checkInDate,
          checkOutDate,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 201) {
        setSuccessMessage("✅ Booking confirmed!");  // Set the success message
        setTimeout(() => history.push("/home"), 2000); // Redirect after booking
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Booking failed. Try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update state when logging out
    console.log("Token after logout:", localStorage.getItem("token"));
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <div style={styles.container}>
      <div style={styles.authBox}>
        <h2 style={styles.heading}>Book Your Stay</h2>
        <form onSubmit={handleBooking} style={styles.form}>
          <input
            type="text"
            placeholder="Enter Name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="tel"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>CONFIRM BOOKING</button>
        </form>
        {errorMessage && <p style={styles.error}>{errorMessage}</p>}
        {successMessage && <p style={styles.success}>{successMessage}</p>} {/* Display success message */}
        <button onClick={handleLogout}>Logout</button> {/* Logout button */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, rgb(249, 249, 249), rgb(246, 247, 250))",
    fontFamily: "Poppins, sans-serif",
  },
  authBox: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
    color: "black",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    background: "rgba(255, 255, 255, 0.09)",
    color: "black",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "12px",
    border: "none",
    borderRadius: "6px",
    background: "#BFA98D", // Matching your theme
    color: "black",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s",
  },
  error: {
    color: "#ff4d4d",
    marginTop: "10px",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
  
  
};

export default Booking;
