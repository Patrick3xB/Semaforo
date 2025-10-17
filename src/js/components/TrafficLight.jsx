import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);
  const [autoMode, setAutoMode] = useState(false);

  // Cambiar color manualmente
  const handleClick = (selectedColor) => {
    setColor(selectedColor);
    setAutoMode(false);
  };

  // Pasar al siguiente color
  const nextColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  // Modo automático
  useEffect(() => {
    if (autoMode) {
      const interval = setInterval(nextColor, 2000);
      return () => clearInterval(interval);
    }
  }, [autoMode, color, colors]);

  // Añadir color púrpura
  const addPurple = () => {
    if (!colors.includes("purple")) setColors([...colors, "purple"]);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      {/* Poste metálico */}
      <div
        style={{
          width: "20px",
          height: "150px",
          background: "linear-gradient(to bottom, #555, #222)",
        }}
      ></div>

      {/* Caja del semáforo */}
      <div
        className="bg-dark d-flex flex-column align-items-center justify-content-around p-3 rounded"
        style={{
          width: "100px",
          height: `${colors.length * 90}px`,
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.7)",
        }}
      >
        {colors.map((c) => (
          <div
            key={c}
            onClick={() => handleClick(c)}
            className={`light ${c} ${color === c ? "active" : ""}`}
          ></div>
        ))}
      </div>

      {/* Botones de control */}
      <div className="mt-4 d-flex gap-2 flex-wrap justify-content-center">
        <button className="btn btn-success" onClick={() => setAutoMode(!autoMode)}>
          {autoMode ? "⏸️ Parar ciclo" : "▶️ Iniciar ciclo"}
        </button>
        <button className="btn btn-warning" onClick={nextColor}>
          🔄 Siguiente
        </button>
        <button className="btn btn-info" onClick={addPurple}>
          🟣 Añadir púrpura
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
