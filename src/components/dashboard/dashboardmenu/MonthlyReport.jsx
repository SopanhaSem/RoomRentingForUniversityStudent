

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const monthlyData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Total Rent Collected",
      data: [400, 520, 600, 710, 450, 500, 700, 650, 630, 590, 680, 750], 
      backgroundColor: "rgba(54, 162, 235, 0.7)",
    },
  ],
};

const topRooms = [
  { room: "Studio Apartment", rentals: 15, revenue: "$7500" },
  { room: "1-Bedroom", rentals: 10, revenue: "$5000" },
  { room: "2-Bedroom Suite", rentals: 8, revenue: "$4800" },
  
];

const MonthlyReport = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Monthly Rent Report</h2>
      <p className="text-gray-600 mb-6">
        View monthly rental income, room performance, and more insights.
      </p>

      {/* Bar Chart for Monthly Rent Collection */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2">Rent Collection by Month</h3>
        <Bar
          data={monthlyData}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } },
          }}
        />
      </div>

      {/* Table for Top Performing Rooms */}
      <div className="overflow-x-auto mt-8">
        <h3 className="text-lg font-medium mb-2">Top Performing Rooms</h3>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Room Type</th>
              <th className="py-2 px-4 border-b">Rentals</th>
              <th className="py-2 px-4 border-b">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {topRooms.map((room, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{room.room}</td>
                <td className="py-2 px-4 border-b text-center">
                  {room.rentals}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {room.revenue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonthlyReport;
