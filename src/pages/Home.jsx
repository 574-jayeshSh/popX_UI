import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (

    // Full Screen Center
    <div className="h-screen bg-[#f7f8f9] flex justify-center items-center">

      {/* Mobile Container */}
      <div className="w-full max-w-sm h-screen bg-white flex items-end border border-gray-200">

        {/* Content */}
        <div className="w-full p-6 mb-10">

          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to PopX
          </h1>

          <p className="text-gray-500 mt-3 leading-6">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
          </p>

          {/* Create Account */}
          <button
            onClick={() => navigate("/signup")}
            className="
              w-full
              bg-purple-600
              hover:bg-purple-700
              transition-all
              text-white
              py-3
              rounded-lg
              mt-6
              font-medium
            "
          >
            Create Account
          </button>

          {/* Login */}
          <button
            onClick={() => navigate("/login")}
            className="
              w-full
              bg-purple-200
              hover:bg-purple-300
              transition-all
              text-purple-900
              py-3
              rounded-lg
              mt-3
              font-medium
            "
          >
            Already Registered? Login
          </button>

        </div>

      </div>

    </div>
  );
}