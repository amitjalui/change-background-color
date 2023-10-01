import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#00FF00");

  const colorSets = [
    { hex: "#FF0000", name: "Red" },
    { hex: "#00FF00", name: "Green" },
    { hex: "#ADD8E6", name: "Light Blue" },
    { hex: "#FFFF00", name: "Yellow" },
    { hex: "#0000FF", name: "Blue" },
    { hex: "#FFA500", name: "Orange" },
    { hex: "#800080", name: "Purple" },
    { hex: "#FFC0CB", name: "Pink" },
    { hex: "#008000", name: "Dark Green" },
    { hex: "#FFD700", name: "Gold" },
    { hex: "#8A2BE2", name: "Blue Violet" },
    { hex: "#FF6347", name: "Tomato" },
    { hex: "#4B0082", name: "Indigo" },
    { hex: "#FFFFE0", name: "Light Yellow" },
    { hex: "#7FFF00", name: "Chartreuse" },
    { hex: "#00FFFF", name: "Cyan" },
    { hex: "#800000", name: "Maroon" },
    { hex: "#C0C0C0", name: "Silver" },
    { hex: "#8B4513", name: "Saddle Brown" },
    { hex: "#F0E68C", name: "Khaki" }
  ];

  const getContrast = (hexColor) => {
    const [r, g, b] = hexColor.match(/\w\w/g).map((x) => parseInt(x, 16));
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "black" : "white";
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor }}
    >
      <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-5 py-2 rounded-3xl">
          {colorSets.map((data) => {
            const textColor = getContrast(data.hex);
            return (
              <button
                key={data.hex}
                className="outline-none px-6 py-2 rounded-3xl text-white shadow-lg"
                style={{ backgroundColor: data.hex, color: textColor }}
                onClick={() => setBackgroundColor(data.hex)}
              >
                {data.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
