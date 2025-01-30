// import React from "react";

// // import react-router-dom
// import { Link } from "react-router-dom";

// // import assets
// import defaultImg from "../../assets/img/jpeg/room-1.jpeg";

// // import prop-types
// import PropTypes from "prop-types";

// export default function Room({ room }) {
//   const { name, slug, images, price } = room;

//   return (
//     <article className="room">
//       <div className="img-container">
//         <img src={images[0] || defaultImg} alt="single room" />

//         <div className="price-top">
//           <h6>$ {price}</h6>
//           <p>per night</p>
//         </div>





//         <Link to={`/rooms/${slug}`} className="btn-primary room-link">
//           Feature
//         </Link>
//       </div>
//       <p className="room-info">{name}</p>
//     </article>
//   );
// }

// Room.prototype = {
//   room: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     price: PropTypes.number.isRequired,
//   }),
// };



// import React, { useState } from "react";
// //import './src/Components/Data/data.js';

// export default function Room({ room }) {
//   const { name, images, price } = room;
//   const [isBooking, setIsBooking] = useState(false);
//   const [isBooked, setIsBooked] = useState(false);
//   const [bookingDetails, setBookingDetails] = useState({
//     guestName: "",
//     phone: "",
//     checkInDate: "",
//     checkOutDate: "",
//   });

//   const handleBookNow = () => {
//     setIsBooking(true);
//   };

//   const handleConfirmBooking = () => {
//     if (
//       bookingDetails.guestName &&
//       bookingDetails.phone &&
//       bookingDetails.checkInDate &&
//       bookingDetails.checkOutDate
//     ) {
//       setIsBooked(true);
//       setIsBooking(false);
//     } else {
//       alert("Please fill in all details before booking.");
//     }
//   };

//   return (
//     <article className="room">
//       <div className="img-container">
//         <img src={images[0]} alt={name} />
//         <div className="price-top">
//           <h6>${price}</h6>
//           <p>per night</p>
//         </div>
        
//       </div>
//       <p className="room-info">{name}</p>

//       {!isBooked ? (
//         !isBooking ? (
//           <button className="btn-primary" onClick={handleBookNow}>
//             Book Now
//           </button>
//         ) : (
//           <div className="booking-form">
//             <input
//               type="text"
//               placeholder="Enter Name"
//               value={bookingDetails.guestName}
//               onChange={(e) =>
//                 setBookingDetails({ ...bookingDetails, guestName: e.target.value })
//               }
//             />
//             <input
//               type="text"
//               placeholder="Enter Phone"
//               value={bookingDetails.phone}
//               onChange={(e) =>
//                 setBookingDetails({ ...bookingDetails, phone: e.target.value })
//               }
//             />
//             <input
//               type="date"
//               placeholder="Check-in Date"
//               value={bookingDetails.checkInDate}
//               onChange={(e) =>
//                 setBookingDetails({ ...bookingDetails, checkInDate: e.target.value })
//               }
//             />
//             <input
//               type="date"
//               placeholder="Check-out Date"
//               value={bookingDetails.checkOutDate}
//               onChange={(e) =>
//                 setBookingDetails({ ...bookingDetails, checkOutDate: e.target.value })
//               }
//             />
//             <button className="btn-primary" onClick={handleConfirmBooking}>
//               Confirm Booking
//             </button>
//           </div>
//         )
//       ) : (
//         // <p className="booked-message">
//         //   ✅ Room Reserved for {bookingDetails.guestName} from {bookingDetails.checkInDate} to{" "}
//         //   {bookingDetails.checkOutDate}!
//         // </p>

//         <p className="booked-message">
//   <span role="img" aria-label="checkmark">✅</span> Room Reserved for {bookingDetails.guestName} from {bookingDetails.checkInDate} to {bookingDetails.checkOutDate}!
// </p>

//       )}


//     </article>
//   );
// }



// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link

// export default function Room({ room }) {
//   const { name, images, price, slug } = room; // Ensure slug is included
//   const [isBooking, setIsBooking] = useState(false);
//   const [isBooked, setIsBooked] = useState(false);
//   const [bookingDetails, setBookingDetails] = useState({
//     guestName: "",
//     phone: "",
//     checkInDate: "",
//     checkOutDate: "",
//   });

//   const handleBookNow = () => {
//     setIsBooking(true);
//   };

//   const handleConfirmBooking = () => {
//     if (
//       bookingDetails.guestName &&
//       bookingDetails.phone &&
//       bookingDetails.checkInDate &&
//       bookingDetails.checkOutDate
//     ) {
//       setIsBooked(true);
//       setIsBooking(false);
//     } else {
//       alert("Please fill in all details before booking.");
//     }
//   };

//   return (
//     <article className="room">
//       <div className="img-container">
//         <img src={images[0]} alt={name} />
//         <div className="price-top">
//           <h6>${price}</h6>
//           <p>per night</p>
//         </div>

//         {/* Feature Button - Links to Room Details Page */}
//         <Link to={`/rooms/${slug}`} className="btn-primary room-link">
//           Feature
//         </Link>
//       </div>
//       <p className="room-info">{name}</p>

//       {!isBooked ? (
//         !isBooking ? (
//           <button className="btn-primary" onClick={handleBookNow}>
//             Book Now
//           </button>
//         ) : (
//           <div className="booking-form">
//             <input
//               type="text"
//               placeholder="Enter Name"
//               value={bookingDetails.guestName}
//               onChange={(e) =>
//                 setBookingDetails({ ...bookingDetails, guestName: e.target.value })
//               }
//             />
//             <input
//               type="text"
//               placeholder="Enter Phone"
//               value={bookingDetails.phone}
//               onChange={(e) =>
//                 setBookingDetails({ ...bookingDetails, phone: e.target.value })
//               }
//             />
//             <input
//               type="date"
//               placeholder="Check-in Date"
//               value={bookingDetails.checkInDate}
//               onChange={(e) =>
//                 setBookingDetails({ ...bookingDetails, checkInDate: e.target.value })
//               }
//             />
//             <input
//               type="date"
//               placeholder="Check-out Date"
//               value={bookingDetails.checkOutDate}
//               onChange={(e) =>
//                 setBookingDetails({ ...bookingDetails, checkOutDate: e.target.value })
//               }
//             />
//             <button className="btn-primary" onClick={handleConfirmBooking}>
//               Confirm Booking
//             </button>
//           </div>
//         )
//       ) : (
//         <p className="booked-message">
//           <span role="img" aria-label="checkmark">✅</span> Room Reserved for {bookingDetails.guestName} from {bookingDetails.checkInDate} to {bookingDetails.checkOutDate}!
//         </p>
//       )}
//     </article>
//   );
//}


import React from "react";
import { useHistory } from "react-router-dom"; // ✅ Import useHistory
import { Link } from "react-router-dom"; // Import Link

export default function Room({ room }) {
  const { name, images, price, slug } = room;
  const history = useHistory(); // ✅ Initialize useHistory

  // ✅ Redirect to Booking Page
  const handleBookNow = () => {
    history.push("/booking"); // ✅ Redirect to Booking Page
  };

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt={name} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>

        {/* Feature Button - Links to Room Details Page */}
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Feature
        </Link>
      </div>
      <p className="room-info">{name}</p>

      <button className="btn-primary" onClick={handleBookNow}>
        Book Now
      </button>
    </article>
  );
}

