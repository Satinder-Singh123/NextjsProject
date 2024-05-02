export const metadata = {
  title: "Work Manager",
};
export default function Home() {
  return (
    <div className="bg-white">
      <div className=" bg-blue-500 min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto bg-blue-400 rounded-lg  overflow-hidden shadow-xl">
          <div className="p-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Welcome to Our Task Manager
            </h2>
            <p className="text-gray-600 mb-6">
              Take control of your day with our powerful task manager. From
              scheduling meetings to tracking project progress, our platform
              helps you stay focused and productive.
            </p>
            <p className="text-gray-600 mb-6">
              You can add your tasks and manage you tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
