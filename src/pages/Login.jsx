import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error while typing
    setError("");
  };

  // Handle Login
  const handleLogin = () => {

    const correctEmail = "admin@gmail.com";
    const correctPassword = "123456";

    // Empty Fields Validation
    if (
      !formData.email ||
      !formData.password
    ) {

      setError("Please fill all fields");

      return;
    }

    // Check Credentials
    if (
      formData.email === correctEmail &&
      formData.password === correctPassword
    ) {

      alert("Login Successful");

      // Navigate to account page
      navigate("/account");

    } else {

      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="h-screen bg-[#f7f8f9] flex justify-center items-center">

      {/* Mobile Container */}
      <div className="w-full max-w-sm h-screen bg-white border border-gray-200">

        <div className="p-6">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Signin to your <br />
            PopX account
          </h1>

          {/* Description */}
          <p className="text-gray-500 mt-4 leading-7 text-lg">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
          </p>

          {/* Email Input */}
          <div className="relative mt-8">

            <label
              className="
                absolute
                -top-2.5
                left-3
                bg-white
                px-1
                text-sm
                text-purple-600
                font-medium
              "
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                border
                border-gray-300
                rounded-md
                px-4
                py-3
                outline-none
                focus:border-purple-500
              "
            />

          </div>

          {/* Password Input */}
          <div className="relative mt-6">

            <label
              className="
                absolute
                -top-2.5
                left-3
                bg-white
                px-1
                text-sm
                text-purple-600
                font-medium
              "
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="
                w-full
                border
                border-gray-300
                rounded-md
                px-4
                py-3
                outline-none
                focus:border-purple-500
              "
            />

          </div>

          {/* Error */}
          {
            error && (
              <p className="text-red-500 text-sm mt-5">
                {error}
              </p>
            )
          }

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={
              !formData.email ||
              !formData.password
            }
            className={`
              w-full
              py-3
              rounded-md
              mt-7
              font-semibold
              text-white
              transition-all
              ${
                formData.email &&
                formData.password
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-300 cursor-not-allowed"
              }
            `}
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}