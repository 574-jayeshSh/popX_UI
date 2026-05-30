import { useState } from "react";
import axios from "axios";

import { FaCamera } from "react-icons/fa";

export default function Account() {

  const [image, setImage] = useState("");

  // Upload Image
  const handleImageUpload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const data = new FormData();

    data.append("file", file);

    // Your Upload Preset
    data.append("upload_preset", "popx_upload");

    try {

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dtzvspnxr/image/upload",
        data
      );

      console.log(response.data);

      // Save uploaded image URL
      setImage(response.data.secure_url);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="h-screen bg-[#f7f8f9] flex justify-center items-center">

      {/* Mobile Container */}
      <div className="w-full max-w-sm h-screen bg-white border border-gray-200">

        {/* Header */}
        <div className="bg-white px-6 py-5 border-b border-gray-200 shadow-sm">

          <h1 className="text-xl font-semibold text-gray-800">
            Account Settings
          </h1>

        </div>

        {/* Profile Section */}
        <div className="p-6">

          <div className="flex items-start gap-4">

            {/* Profile Image */}
            <div className="relative">

              <img
                src={
                  image
                    ? image
                    : "https://i.pravatar.cc/150?img=12"
                }
                alt="profile"
                className="
                  w-20
                  h-20
                  rounded-full
                  object-cover
                  border
                "
              />

              {/* Upload Button */}
              <label
                className="
                  absolute
                  bottom-0
                  right-0
                  bg-purple-600
                  w-7
                  h-7
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-white
                  cursor-pointer
                  shadow-md
                "
              >

                <FaCamera size={12} />

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageUpload}
                />

              </label>

            </div>

            {/* User Info */}
            <div>

              <h2 className="text-lg font-bold text-gray-800">
                Marry Doe
              </h2>

              <p className="text-gray-500 mt-1 text-sm">
                marrydoe@gmail.com
              </p>

            </div>

          </div>

          {/* Description */}
          <p className="text-gray-600 leading-7 mt-6 text-sm">

            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam

          </p>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 mt-6"></div>

        </div>

      </div>

    </div>
  );
}