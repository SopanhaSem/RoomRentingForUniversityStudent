// src/components/dashboard/dashboardmenu/SettingsTab.jsx
import React, { useState } from "react";

const SettingsTab = () => {
  const [settings, setSettings] = useState({
    password: "",
    confirmPassword: "",
    emailNotifications: true,
    privacy: "public", // "public" or "private"
  });

  const [isPasswordEditing, setIsPasswordEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setSettings({ ...settings, [name]: checked });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const togglePasswordEdit = () => {
    setIsPasswordEditing(!isPasswordEditing);
  };

  const handleSaveChanges = () => {
    if (settings.password !== settings.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Submit password change request or other settings save action here
    alert("Settings updated successfully.");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Settings</h2>

      {/* Change Password Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Change Password</h3>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={settings.password}
              onChange={handleInputChange}
              disabled={!isPasswordEditing}
              className={`w-full px-4 py-2 border ${
                isPasswordEditing ? "border-blue-500" : "border-gray-300"
              } rounded-lg focus:outline-none`}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={settings.confirmPassword}
              onChange={handleInputChange}
              disabled={!isPasswordEditing}
              className={`w-full px-4 py-2 border ${
                isPasswordEditing ? "border-blue-500" : "border-gray-300"
              } rounded-lg focus:outline-none`}
            />
          </div>

          {/* Toggle for enabling password change */}
          <div className="mt-4">
            <button
              onClick={togglePasswordEdit}
              className={`py-2 px-4 rounded-lg font-medium text-white ${
                isPasswordEditing
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } transition duration-200`}
            >
              {isPasswordEditing ? "Save Password" : "Edit Password"}
            </button>
          </div>
        </div>
      </div>

      {/* Email Notifications Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Email Notifications</h3>
        <div className="flex items-center gap-4">
          <label className="text-gray-700">Enable Email Notifications</label>
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleToggleChange}
            className="toggle-switch"
          />
        </div>
      </div>

      {/* Privacy Settings Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Privacy Settings</h3>
        <div className="flex items-center gap-4">
          <label className="text-gray-700">Account Privacy</label>
          <select
            name="privacy"
            value={settings.privacy}
            onChange={handleSelectChange}
            className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>

      {/* Save Settings Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleSaveChanges}
          className="py-2 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsTab;
