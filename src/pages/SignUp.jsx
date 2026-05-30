import { useState } from "react";

export default function Signup() {

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = () => {

    // Validation
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.password
    ) {

      setError("Please fill all required fields");

      return;
    }

    // Clear Error
    setError("");

    console.log(formData);

    alert("Account Created Successfully");
  };

  return (
    <div className="h-screen bg-[#f7f8f9] flex justify-center items-center">

      {/* Mobile Container */}
      <div className="w-full max-w-sm h-screen bg-white border border-gray-200 flex flex-col justify-between">

        {/* Form Section */}
        <div className="p-6">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Create your <br />
            PopX account
          </h1>

          {/* Full Name */}
          <div className="relative mt-8">

            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
              Full Name*
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
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

          {/* Phone */}
          <div className="relative mt-6">

            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
              Phone number*
            </label>

            <input
              type="text"
              name="phone"
              placeholder="Marry Doe"
              value={formData.phone}
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

          {/* Email */}
          <div className="relative mt-6">

            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
              Email address*
            </label>

            <input
              type="email"
              name="email"
              placeholder="Marry Doe"
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

          {/* Password */}
          <div className="relative mt-6">

            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
              Password*
            </label>

            <input
              type="password"
              name="password"
              placeholder="Marry Doe"
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

          {/* Company */}
          <div className="relative mt-6">

            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
              Company name
            </label>

            <input
              type="text"
              name="company"
              placeholder="Marry Doe"
              value={formData.company}
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

          {/* Agency */}
          <div className="mt-7">

            <p className="text-gray-700 font-medium">
              Are you an Agency?*
            </p>

            <div className="flex items-center gap-6 mt-3">

              {/* Yes */}
              <label className="flex items-center gap-2 cursor-pointer">

                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                  className="accent-purple-600 w-4 h-4"
                />

                <span>Yes</span>

              </label>

              {/* No */}
              <label className="flex items-center gap-2 cursor-pointer">

                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                  className="accent-purple-600 w-4 h-4"
                />

                <span>No</span>

              </label>

            </div>

          </div>

          {/* Error Message */}
          {
            error && (
              <p className="text-red-500 text-sm mt-5">
                {error}
              </p>
            )
          }

        </div>

        {/* Bottom Button */}
        <div className="p-6">

          <button
            onClick={handleSubmit}
            className="
              w-full
              bg-purple-600
              hover:bg-purple-700
              transition-all
              text-white
              py-3
              rounded-md
              font-semibold
            "
          >
            Create Account
          </button>

        </div>

      </div>

    </div>
  );
}