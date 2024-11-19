import React from "react";
import ParticleTrailCursor from "./ParticleTrailCursor";

const App = () => {
  return (
    <div className="relative">
      <ParticleTrailCursor />
      <div className="h-screen flex items-center justify-center bg-slate-900 text-white">
        <h1>Hover and enjoy the magic!</h1>
      </div>
    </div>
  );
};

export default App;
