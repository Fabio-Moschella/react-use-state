import Languages from "../languages";
import React, { useState } from "react";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0]);

  return (
    <div className="container">
      <div className="button-group">
        {Languages.map((lang) => (
          <button
            key={lang.title}
            onClick={() => setSelectedLanguage(lang)}
            className="language-button"
          >
            {lang.title}
          </button>
        ))}
      </div>
      <div className="card">
        <h2 className="card-title">{selectedLanguage.title}</h2>
        <p className="card-description">{selectedLanguage.description}</p>
      </div>
    </div>
  );
}
