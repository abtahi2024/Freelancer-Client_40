import {
  FiMenu,
  FiSun,
  FiMoon,
  FiPackage,
  FiUser,
  FiUsers,
  FiStar,
  FiBarChart2,
} from "react-icons/fi";
import { Link } from "react-router";
import Card from "../components/Home/Deshboard/Card";
import Tables from "../components/Home/Deshboard/Tables";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome to your Freelancer Platform dashboard!</p>
      {/* card */}
      <Card />

      {/* Tables */}
      <Tables />
    </div>
  );
};

export default Dashboard;
