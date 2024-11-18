import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Dummy data for rooms with images and additional details
const rooms = [
  {
    id: 1,
    name: "Room A",
    price: 500, // Original price without discount
    images: [
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1506748686215-ef0d86a1a9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDk2OXwwfDF8c2VhcmNofDJ8fGRlY29yYXRpb258ZW58MHx8fHwxNjY3Nzc2NTUy&ixlib=rb-1.2.1&q=80&w=1080",
    ],
    rented: 20,
    category: "Standard",
    description:
      "A cozy room with all amenities including a bed, desk, and free WiFi. It's perfect for students and professionals alike. The room is well-lit and well-maintained, offering a comfortable living space.",
    location: "Royal University of Phnom Penh", // Example location
    distance: 2.5, // In kilometers
    facilities: [
      "Free WiFi",
      "Air conditioning",
      "Desk and chair",
      "Bed with mattress",
      "Wardrobe",
      "TV",
    ],
    houseRules: [
      "No smoking inside",
      "Pets are not allowed",
      "No parties",
      "Guests are allowed with prior approval",
    ],
  },
  {
    id: 2,
    name: "Room B",
    price: 500, // Original price without discount
    images: [
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1506748686215-ef0d86a1a9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDk2OXwwfDF8c2VhcmNofDJ8fGRlY29yYXRpb258ZW58MHx8fHwxNjY3Nzc2NTUy&ixlib=rb-1.2.1&q=80&w=1080",
    ],
    rented: 20,
    category: "Standard",
    description:
      "A cozy room with all amenities including a bed, desk, and free WiFi. It's perfect for students and professionals alike. The room is well-lit and well-maintained, offering a comfortable living space.",
    location: "Royal University of Phnom Penh", // Example location
    distance: 2.5, // In kilometers
    facilities: [
      "Free WiFi",
      "Air conditioning",
      "Desk and chair",
      "Bed with mattress",
      "Wardrobe",
      "TV",
    ],
    houseRules: [
      "No smoking inside",
      "Pets are not allowed",
      "No parties",
      "Guests are allowed with prior approval",
    ],
  },
  // Add other rooms here...
];

const RoomDetail = () => {
  const { roomId } = useParams(); // Get the roomId from URL params
  const room = rooms.find((r) => r.id === parseInt(roomId)); // Find the room by id

  const [studentInfo, setStudentInfo] = useState({
    studentId: "",
    university: "",
    name: "",
    email: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage the popup visibility
  const [isBooked, setIsBooked] = useState(false);
  const [discountPrice, setDiscountPrice] = useState(room.price); // Set default price

  // Discount logic: Apply 10% discount if the student is from "Royal University of Phnom Penh"
  const calculateDiscount = (university) => {
    if (university === "Royal University of Phnom Penh") {
      return room.price * 0.9; // Apply 10% discount
    }
    return room.price; // No discount
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Recalculate price when university changes
    if (name === "university") {
      const discountedPrice = calculateDiscount(value);
      setDiscountPrice(discountedPrice);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (make sure the fields are filled)
    if (!studentInfo.studentId || !studentInfo.university || !studentInfo.name || !studentInfo.email) {
      alert("Please fill in all fields.");
      return;
    }

    // Process the booking (this could involve sending data to a backend)
    console.log("Room Booked:", studentInfo);
    setIsBooked(true); // Update booking status
    setIsPopupOpen(false); // Close the booking form after submission
  };

  if (!room) {
    return <div>Room not found</div>; // Fallback if room doesn't exist
  }

  return (
    <div className="bg-gray-100 p-6 max-w-screen-lg mx-auto rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Room Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{room.name}</h1>
          <p className="text-sm text-gray-600">Category: {room.category}</p>

          {/* Price and Discount */}
          <p className="text-lg font-semibold text-blue-600 mt-2">
            {discountPrice === room.price ? (
              <>
                {room.price} / month
              </>
            ) : (
              <>
                <span className="line-through text-red-500">{room.price}</span> <span className="text-green-500">{discountPrice}</span> / month
              </>
            )}
          </p>

          {/* Overview Section */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
            <p className="text-gray-600 mt-2">{room.description}</p>
          </section>

          {/* Facilities Section */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Facilities</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {room.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </section>

          {/* House Rules Section */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">House Rules</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {room.houseRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </section>

          {/* Location and Rent Info */}
          <div className="mt-6 text-gray-700">
            <p><strong>Location:</strong> {room.location}</p>
            <p><strong>Distance from university:</strong> {room.distance} km</p>
          </div>

          {/* Room Rent Information */}
          <div className="mt-6 flex items-center gap-4">
            <div>
              <span className="font-semibold">Rented:</span> {room.rented} times
            </div>
          </div>
        </div>

        {/* Room Gallery */}
        <div className="flex-1">
          <div className="w-full h-72 bg-gray-300 rounded-lg overflow-hidden mb-6">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  src={room.images[0]}
                  alt="Room"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {room.images.map((image, index) => (
              <div key={index} className="w-24 h-24 overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Room Image ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Room Button */}
      <div className="mt-8">
        <button
          onClick={() => setIsPopupOpen(true)} // Open the booking form popup
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700"
        >
          Book This Room
        </button>
      </div>

      {/* Booking Form Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book This Room</h2>
            {isBooked ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-md">
                <p>Your room has been booked successfully!</p>
                <button
                  onClick={() => setIsBooked(false)} // Reset after booking
                  className="mt-2 text-blue-600"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Student ID</label>
                  <input
                    type="text"
                    name="studentId"
                    value={studentInfo.studentId}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">University</label>
                  <input
                    type="text"
                    name="university"
                    value={studentInfo.university}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={studentInfo.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={studentInfo.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}

            <button
              onClick={() => setIsPopupOpen(false)} // Close the popup
              className="mt-4 w-full text-center py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetail;
