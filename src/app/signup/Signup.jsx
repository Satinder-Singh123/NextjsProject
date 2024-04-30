"use client";
import { signUp } from "@/sevices/userService";
import React, { useState } from "react";
import { toast } from "react-toastify";


const Signup = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Call the signUp function with the form data
      const result = await signUp(formData);
      
      // If signup is successful, display success message and reset form data
      toast.success("User is registered successfully!", {
        position: "top-center",
      });
      setFormData({
        name: "",
        email: "",
        password: "",
        about: "",
      });
    } catch (error) {
      // If an error occurs during signup, display error message
      toast.error("Signup Error: " + error.message, {
        position: "top-center",
      });
    }
  };

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to reset form data
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  // JSX for the Signup component
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5">
          <h1 className="text-3xl text-center">Signup Here </h1>
          <form onSubmit={handleSubmit} className="mt-5">
            {/* Form fields */}
            {/* Name */}
            <div className="mt-3">
              <label htmlFor="user_name" className="block text-sm font-medium mb-2 ps-2">
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder="Enter here"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            {/* Email */}
            <div className="mt-3">
              <label htmlFor="user_email" className="block text-sm font-medium mb-2 ps-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder="Enter here"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {/* Password */}
            <div className="mt-3">
              <label htmlFor="user_password" className="block text-sm font-medium mb-2 ps-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder="Enter here"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            {/* About */}
            <div className="mt-3">
              <label htmlFor="user_about" className="block text-sm font-medium mb-2 ps-2">
                About
              </label>
              <textarea
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                placeholder="Enter here"
                name="about"
                rows={8}
                value={formData.about}
                onChange={handleInputChange}
              ></textarea>
            </div>
            {/* Submit button */}
            <div className="mt-3 text-center">
              <button
                type="submit"
                className="px-3 py-2 bg-green-600 rounded hover:bg-green-400"
              >
                Signup
              </button>
              {/* Reset button */}
              <button
                type="button"
                onClick={resetForm}
                className="px-3 py-2 bg-orange-600 ms-3 rounded hover:bg-orange-400"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
