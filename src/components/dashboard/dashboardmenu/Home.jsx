import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const rooms = [
  {
    id: 1,
    name: "Room 1",
    price: "$500",
    image:
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    rented: 20,
    category: "Standard",
    description:
      "A cozy room with all amenities including a bed, desk, and free WiFi.",
    isStudentDiscountAvailable: true,
    distanceFromUniversity: 2, // in km
  },
  {
    id: 2,
    name: "Room 2",
    price: "$450",
    image:
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    rented: 35,
    category: "Deluxe",
    description:
      "A luxurious room with all the modern amenities, including air conditioning and a king-sized bed.",
    isStudentDiscountAvailable: false,
    distanceFromUniversity: 3,
  },
  {
    id: 3,
    name: "Room 2",
    price: "$450",
    image:
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    rented: 35,
    category: "Deluxe",
    description:
      "A luxurious room with all the modern amenities, including air conditioning and a king-sized bed.",
    isStudentDiscountAvailable: false,
    distanceFromUniversity: 3,
  },
  {
    id: 4,
    name: "Room 2",
    price: "$450",
    image:
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    rented: 35,
    category: "Deluxe",
    description:
      "A luxurious room with all the modern amenities, including air conditioning and a king-sized bed.",
    isStudentDiscountAvailable: false,
    distanceFromUniversity: 3,
  },
  {
    id: 5,
    name: "Room 2",
    price: "$450",
    image:
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    rented: 35,
    category: "Deluxe",
    description:
      "A luxurious room with all the modern amenities, including air conditioning and a king-sized bed.",
    isStudentDiscountAvailable: false,
    distanceFromUniversity: 3,
  },
  {
    id: 6,
    name: "Room 2",
    price: "$450",
    image:
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    rented: 35,
    category: "Deluxe",
    description:
      "A luxurious room with all the modern amenities, including air conditioning and a king-sized bed.",
    isStudentDiscountAvailable: false,
    distanceFromUniversity: 3,
  },
  {
    id: 7,
    name: "Room 2",
    price: "$450",
    image:
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    rented: 35,
    category: "Deluxe",
    description:
      "A luxurious room with all the modern amenities, including air conditioning and a king-sized bed.",
    isStudentDiscountAvailable: false,
    distanceFromUniversity: 3,
  },
  {
    id: 8,
    name: "Room 2",
    price: "$450",
    image:
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    rented: 35,
    category: "Deluxe",
    description:
      "A luxurious room with all the modern amenities, including air conditioning and a king-sized bed.",
    isStudentDiscountAvailable: false,
    distanceFromUniversity: 3,
  },
  {
    id: 9,
    name: "Room 2",
    price: "$450",
    image:
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    rented: 35,
    category: "Deluxe",
    description:
      "A luxurious room with all the modern amenities, including air conditioning and a king-sized bed.",
    isStudentDiscountAvailable: false,
    distanceFromUniversity: 3,
  },
  {
    id: 10,
    name: "Room 2",
    price: "$450",
    image:
      "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    rented: 35,
    category: "Deluxe",
    description:
      "A luxurious room with all the modern amenities, including air conditioning and a king-sized bed.",
    isStudentDiscountAvailable: false,
    distanceFromUniversity: 3,
  },
];

const Home = () => {
  const [language, setLanguage] = useState("english");
  const [content, setContent] = useState({});
  const [showTop10, setShowTop10] = useState(true);
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [showStudentDiscount, setShowStudentDiscount] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [maxDistance, setMaxDistance] = useState(5);
  const navigate = useNavigate();

  const top10Rooms = rooms.sort((a, b) => b.rented - a.rented).slice(0, 10);

  const filterRooms = () => {
    let updatedRooms = rooms;

    if (selectedCategory !== "All") {
      updatedRooms = updatedRooms.filter(
        (room) => room.category === selectedCategory
      );
    }

    if (selectedPriceRange !== "All") {
      const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
      updatedRooms = updatedRooms.filter(
        (room) =>
          parseInt(room.price.replace("$", "")) >= minPrice &&
          parseInt(room.price.replace("$", "")) <= maxPrice
      );
    }

    if (showStudentDiscount) {
      updatedRooms = updatedRooms.filter(
        (room) => room.isStudentDiscountAvailable
      );
    }

    if (searchQuery) {
      updatedRooms = updatedRooms.filter((room) =>
        room.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLocation && maxDistance) {
      updatedRooms = updatedRooms.filter(
        (room) => room.distanceFromUniversity <= maxDistance
      );
    }

    setFilteredRooms(updatedRooms);
  };

  const handleRoomClick = (roomId) => {
    navigate(`/dashboard/home/${roomId}`);
  };

  const closeTop10Popup = () => {
    setShowTop10(false);
  };

  useEffect(() => {
    filterRooms();
  }, [
    selectedCategory,
    selectedPriceRange,
    showStudentDiscount,
    searchQuery,
    selectedLocation,
    maxDistance,
  ]);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800">Dashboard</h1>
          <p className="mt-4 text-xl text-gray-600">
            We provide best room for students
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-12 flex flex-wrap gap-6 justify-center">
          {/* Category Filter */}
          <div className="flex flex-col">
            <label htmlFor="category" className="font-semibold text-gray-700">
              Room Type
            </label>
            <select
              id="category"
              className="mt-2 p-2 border border-gray-300 rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Standard"> Standard</option>
              <option value="Deluxe"> Deluxe</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="price-range"
              className="font-semibold text-gray-700"
            >
              Price Range
            </label>
            <select
              id="price-range"
              className="mt-2 p-2 border border-gray-300 rounded-md"
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              <option value="All">{content[language]?.All}</option>
              <option value="0-500">$0 - $500</option>
              <option value="501-1000">$501 - $1000</option>
              {/* Add more price ranges */}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">
              Student Discount
            </label>
            <input
              type="checkbox"
              checked={showStudentDiscount}
              onChange={() => setShowStudentDiscount(!showStudentDiscount)}
              className="mt-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="location" className="font-semibold text-gray-700">
              Choose your Location
            </label>
            <select
              id="location"
              className="mt-2 p-2 border border-gray-300 rounded-md"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Choose your Location</option>
              <option value="University">RUPP</option>
              <option value="Nearby">ITC</option>
            </select>
          </div>

          {selectedLocation && (
            <div className="flex flex-col w-full sm:w-1/4">
              <label
                htmlFor="max-distance"
                className="font-semibold text-gray-700"
              >
                Max Distance (km)
              </label>
              <input
                type="number"
                id="max-distance"
                className="mt-2 p-2 border border-gray-300 rounded-md"
                value={maxDistance}
                onChange={(e) => setMaxDistance(Number(e.target.value))}
                min="1"
                max="10"
              />
            </div>
          )}

          {/* Search Bar */}
          <div className="flex flex-col w-full sm:w-1/4">
            <label htmlFor="search" className="font-semibold text-gray-700">
              Search
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="mt-2 p-2 border border-gray-300 rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Available Rooms Section */}
        <div className="space-y-16">
          <div className="text-2xl font-semibold text-gray-800 mb-6">
            Available Rooms
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition-all"
                onClick={() => handleRoomClick(room.id)}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  {room.name}
                </h3>
                <p className="text-sm text-gray-600">Price: {room.price}</p>
                <p className="text-sm text-gray-600">
                  Rented: {room.rented} times
                </p>
                {room.isStudentDiscountAvailable && (
                  <p className="text-sm text-green-600">
                    Student Discount Available
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Top 10 Most Rented Rooms (Popup) */}
        {showTop10 && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-[1500px]">
              <h3 className="text-2xl font-semibold text-gray-800">
                Top 10 Most Rented Rooms
              </h3>
              <div className="grid grid-cols-5 gap-6 mt-6">
                {top10Rooms.map((room) => (
                  <div
                    key={room.id}
                    className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg"
                    onClick={() => handleRoomClick(room.id)} // Route to room detail
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-36 object-cover rounded-md"
                    />
                    <h3 className="text-sm font-semibold text-gray-800 mt-3">
                      {room.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Rented: {room.rented} times
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={closeTop10Popup}
                className="mt-6 bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
