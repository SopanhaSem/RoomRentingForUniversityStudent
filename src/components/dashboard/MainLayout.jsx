// src/components/layout/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Dashboard } from "../dashboard/Dashboard";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Dashboard /> {/* Sidebar remains static */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Outlet /> {/* Renders the selected dashboard content */}
      </div>
    </div>
  );
};

export default MainLayout;
