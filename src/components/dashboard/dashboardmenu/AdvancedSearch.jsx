import React, { useState } from "react";

const AdvancedSearch = () => {
  const [location, setLocation] = useState("");
  const [roomType, setRoomType] = useState("Any");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [distance, setDistance] = useState(10);

  const handleSearch = () => {
    console.log("Searching with", { location, roomType, priceRange, distance });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Advanced Room Search
      </h2>

      {/* Location Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Location</label>
        <input
          type="text"
          placeholder="Enter a city or university"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Room Type Dropdown */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Room Type
        </label>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="Any">Any</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
          <option value="Studio">Studio</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Price Range ($)
        </label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Distance Slider */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Distance to Campus (km)
        </label>
        <input
          type="range"
          min="1"
          max="50"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="w-full"
        />
        <div className="text-center text-sm text-gray-600">{distance} km</div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200"
      >
        Search Rooms
      </button>
    </div>
  );
};

export default AdvancedSearch;
