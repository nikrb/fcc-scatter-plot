import React from 'react';

export default () => {
  const heading = {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "10px auto"
  };
  const sub_heading = {
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "normal"
  };
  const sub_heading2 = {
    textAlign: "center",
    fontSize: "0.8rem",
    fontWeight: "normal"
  };
  return (
    <div>
      <div style={heading}>
        Doping in Professional Bicycle Racing
      </div>
      <div style={sub_heading}>
        35 fastest times up Alpe d'Huez
      </div>
      <div style={sub_heading2}>
        Normalised to 13.8Km distance
      </div>
    </div>
  );
};
