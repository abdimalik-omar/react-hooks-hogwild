import React, { useState } from "react";

function HogTile({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="ui eight wide column" onClick={handleToggleDetails}>
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3>{hog.name}</h3>
          {showDetails && (
            <div className="extra content">
              <p><strong>Specialty:</strong> {hog.specialty}</p>
              <p><strong>Weight:</strong> {hog.weight}</p>
              <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
              <p><strong>Highest Medal:</strong> {hog["highest medal achieved"]}</p>
            </div>
          )}
        </div>
        <button onClick={(e) => { e.stopPropagation(); onHide(hog.name); }}>Hide Hog</button>
      </div>
    </div>
  );
}

export default HogTile;
