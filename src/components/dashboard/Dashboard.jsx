import { Sidebar } from "flowbite-react";
import {
  HiHome,
  HiDocumentReport,
  HiPencil,
  HiUser,
  HiLogout,
} from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signin");
  };

  return (
    <Sidebar aria-label="University Student Room Renting Dashboard Sidebar">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} to="home" icon={HiHome}>
            Home
          </Sidebar.Item>

          <Sidebar.Item as={Link} to="monthly-report" icon={HiDocumentReport}>
            Monthly Rent Report
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="room-management" icon={HiPencil}>
            Room Management
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiUser} label="Account">
            <Sidebar.Item as={Link} to="profile">
              Profile
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="settings">
              Settings
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item
            onClick={handleLogout}
            icon={HiLogout}
            className="text-red-500 cursor-pointer"
          >
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
