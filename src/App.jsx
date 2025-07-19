import React from "react";
import rutina from "./data/rutina.json";
import Rutina from "./components/Rutina";
import "./index.css";

function App() {
  return (
    <main className="bg-gray-50 min-h-screen p-4 sm:p-8 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
          Rutina GYM 2025
        </h1>
        <Rutina data={rutina} />
      </div>
    </main>
  );
}

export default App;
