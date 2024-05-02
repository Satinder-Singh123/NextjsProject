import React from 'react';

const UserProfile = () => {
  return (
    <div className=" from-blue-500 min-h-screen flex items-center justify-center">
            <div className="max-w-lg mx-auto bg-blue-300 rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">Welcome to Our Task Manager</h2>
                    <p className="text-gray-600 mb-6">Take control of your day with our powerful task manager. From scheduling meetings to tracking project progress, our platform helps you stay focused and productive.</p>
                    <p className="text-gray-600 mb-6">You can add your tasks and manage your tasks.</p>
                </div>
            </div>
        </div>
  );
}

export default UserProfile;
