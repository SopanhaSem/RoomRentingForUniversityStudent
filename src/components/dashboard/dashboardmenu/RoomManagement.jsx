import React, { useState } from "react";

const RoomManagement = () => {
  const [rooms, setRooms] = useState([
    // Sample room data
    {
      id: 1,
      name: "Single Room",
      price: 300,
      type: "Single",
      location: "University A",
    },
    {
      id: 2,
      name: "Shared Room",
      price: 200,
      type: "Shared",
      location: "University B",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false); // New state for edit mode
  const [newRoom, setNewRoom] = useState({
    name: "",
    price: "",
    type: "Single",
    location: "",
  });

  const [selectedRoom, setSelectedRoom] = useState(null); // Track selected room for editing

  const openModal = () => {
    setIsModalOpen(true);
    setIsEditModal(false); // Reset to add mode
  };

  const openEditModal = (room) => {
    setSelectedRoom(room);
    setNewRoom({
      name: room.name,
      price: room.price,
      type: room.type,
      location: room.location,
    });
    setIsModalOpen(true);
    setIsEditModal(true); // Switch to edit mode
  };

  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  const addRoom = () => {
    setRooms([...rooms, { ...newRoom, id: Date.now() }]);
    setNewRoom({ name: "", price: "", type: "Single", location: "" });
    closeModal();
  };

  const updateRoom = () => {
    setRooms(
      rooms.map((room) =>
        room.id === selectedRoom.id
          ? { ...room, ...newRoom }
          : room
      )
    );
    setNewRoom({ name: "", price: "", type: "Single", location: "" });
    closeModal();
  };

  const deleteRoom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Room Management</h2>

      {/* Room List */}
      <div className="overflow-auto max-h-80 mb-6">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left font-semibold">Room Name</th>
              <th className="py-2 px-4 text-left font-semibold">Price ($)</th>
              <th className="py-2 px-4 text-left font-semibold">Type</th>
              <th className="py-2 px-4 text-left font-semibold">Location</th>
              <th className="py-2 px-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id} className="border-b">
                <td className="py-2 px-4">{room.name}</td>
                <td className="py-2 px-4">${room.price}</td>
                <td className="py-2 px-4">{room.type}</td>
                <td className="py-2 px-4">{room.location}</td>
                <td className="py-2 px-4 text-center space-x-2">
                  <button
                    onClick={() => openEditModal(room)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteRoom(room.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Room Button */}
      <button
        onClick={openModal}
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition duration-200"
      >
        Add New Room
      </button>

      {/* Modal for Adding or Editing Room */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">
              {isEditModal ? "Edit Room" : "Add New Room"}
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Room Name</label>
              <input
                type="text"
                name="name"
                value={newRoom.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Price ($)</label>
              <input
                type="number"
                name="price"
                value={newRoom.price}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Room Type</label>
              <select
                name="type"
                value={newRoom.type}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="Single">Single</option>
                <option value="Shared">Shared</option>
                <option value="Studio">Studio</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={newRoom.location}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="py-2 px-4 bg-gray-300 rounded-lg mr-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={isEditModal ? updateRoom : addRoom}
                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {isEditModal ? "Update Room" : "Add Room"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomManagement;
