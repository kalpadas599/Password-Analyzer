import React, { useState } from "react";
import zxcvbn from "zxcvbn";

function PasswordAnalyzer() {
  const [password, setPassword] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setAnalysis(zxcvbn(newPassword));
  };

  const getStrengthColor = (score) => {
    const colors = ["#e63946", "#f4a261", "#e9c46a", "#2a9d8f", "#4caf50"];
    return colors[score];
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md max-w-lg w-full">
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-4"
      />
      {analysis && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Password Strength</p>
            <span
              style={{
                backgroundColor: getStrengthColor(analysis.score),
              }}
              className="px-3 py-1 text-xs text-white font-bold rounded"
            >
              {["Very Weak", "Weak", "Fair", "Good", "Strong"][analysis.score]}
            </span>
          </div>
          <div className="h-3 rounded-full bg-gray-300 overflow-hidden">
            <div
              style={{
                width: `${(analysis.score + 1) * 20}%`,
                backgroundColor: getStrengthColor(analysis.score),
              }}
              className="h-full transition-all duration-300"
            ></div>
          </div>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            {analysis.feedback.suggestions.length > 0 ? (
              analysis.feedback.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-500 font-semibold">•</span>
                  <span>{suggestion}</span>
                </li>
              ))
            ) : (
              <li className="text-green-600">Your password is strong!</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PasswordAnalyzer;
