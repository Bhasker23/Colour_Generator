import React, { useEffect, useState } from "react";

function ColourGenerator() {
  const [typeOfColour, setTypeOfColour] = useState("hex");
  const [colour, setColour] = useState("#000000");

  function randomColourUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColour() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
    let hexColour = "#";

    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }
    setColour(hexColour);
  }

  function handleCreateRandomRbgColour() {
    console.log("object");
    const r = randomColourUtility(256);
    const g = randomColourUtility(256);
    const b = randomColourUtility(256);

    setColour(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColour === "rgb") handleCreateRandomRbgColour();
    else handleCreateRandomHexColour();
  }, [typeOfColour]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: colour,
      }}
    >
      <button onClick={() => setTypeOfColour("hex")}>Create HEX Colour</button>
      <button onClick={() => setTypeOfColour("rgb")}>Create RBG Colour</button>
      <button
        onClick={
          typeOfColour === "hex"
            ? handleCreateRandomHexColour
            : handleCreateRandomRbgColour
        }
      >
        Generate Random Colour{" "}
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <h3>{typeOfColour === "rgb" ? "RGB Colour" : "HEX Colour"}</h3>
        <h3>{colour}</h3>
      </div>
    </div>
  );
}

export default ColourGenerator;
