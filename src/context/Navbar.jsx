import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl">Car Rental System</h1>
      {user ? (
        <div>
          <span>Welcome, {user.firstName}!</span>
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="ml-4 bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => navigate("/login")} className="bg-blue-500 px-3 py-1 rounded">
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
