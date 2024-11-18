// src/components/dashboard/dashboardmenu/ProfileTab.jsx
import React, { useState } from "react";

const ProfileTab = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 University Street",
    facebook: "https://facebook.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newProfileImage, setNewProfileImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageUpload = (e) => {
    setNewProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>

      {/* Profile Image */}
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <img
            src={newProfileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-gray-300"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute bottom-0 left-0 w-full opacity-0 cursor-pointer h-full"
            />
          )}
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border ${
              isEditing ? "border-blue-500" : "border-gray-300"
            } rounded-lg focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border ${
              isEditing ? "border-blue-500" : "border-gray-300"
            } rounded-lg focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border ${
              isEditing ? "border-blue-500" : "border-gray-300"
            } rounded-lg focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border ${
              isEditing ? "border-blue-500" : "border-gray-300"
            } rounded-lg focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border ${
              isEditing ? "border-blue-500" : "border-gray-300"
            } rounded-lg focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Facebook
          </label>
          <input
            type="url"
            name="facebook"
            value={profile.facebook}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border ${
              isEditing ? "border-blue-500" : "border-gray-300"
            } rounded-lg focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Twitter
          </label>
          <input
            type="url"
            name="twitter"
            value={profile.twitter}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border ${
              isEditing ? "border-blue-500" : "border-gray-300"
            } rounded-lg focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Instagram
          </label>
          <input
            type="url"
            name="instagram"
            value={profile.instagram}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border ${
              isEditing ? "border-blue-500" : "border-gray-300"
            } rounded-lg focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            LinkedIn
          </label>
          <input
            type="url"
            name="linkedin"
            value={profile.linkedin}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border ${
              isEditing ? "border-blue-500" : "border-gray-300"
            } rounded-lg focus:outline-none`}
          />
        </div>
      </div>

      {/* Save / Edit Button */}
      <div className="text-center mt-6">
        <button
          onClick={toggleEdit}
          className={`py-2 px-4 rounded-lg font-medium text-white ${
            isEditing
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-green-600 hover:bg-green-700"
          } transition duration-200`}
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;
