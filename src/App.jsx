import React from "react";
import PasswordAnalyzer from "./components/PasswordAnalyzer";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100">
      <div className="bg-white shadow-2xl p-8 rounded-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Password Analyzer
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Analyze your password strength and get suggestions for improvement.
        </p>
        <PasswordAnalyzer />
      </div>
    </div>
  );
}

export default App;
