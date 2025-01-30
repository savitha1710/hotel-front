// import "./App/App.css";

// // import react-router-dom
// //import { Route, Switch } from "react-router-dom";

// // imports pages
// import Home from "./Pages/Home.jsx";
// import Room from "./Pages/Room.jsx";
// import SingleRoom from "./Pages/SingleRoom.jsx";
// import Error from "./Pages/Error.jsx";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Booking from "./Pages/Booking.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import components
// import Navbar from "./Components/Navbar/Navbar.jsx";
// import Footer from "./Components/Footer/Footer.jsx";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

// function App() {
//   return (
   
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/rooms" element={<Room />} />
//         <Route path="/rooms/:slug" element={<SingleRoom />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
      
//   );
// }

// export default App;







import React from "react";

import "./App/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import pages
import Home from "./Pages/Home.jsx";
import Room from "./Pages/Room.jsx";
import SingleRoom from "./Pages/SingleRoom.jsx";
import Error from "./Pages/Error.jsx";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Booking from "./Pages/Booking.jsx";


// Import components
 import Navbar from "./Components/Navbar/Navbar.jsx";
// import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/booking" component={Booking} />
        <Route component={Error} />
      </Switch>
      <footer className="footer">
        <p>© 2025 BeachResort.com - All Rights Reserved</p>
      </footer>
    </Router>
  );
}

export default App;
