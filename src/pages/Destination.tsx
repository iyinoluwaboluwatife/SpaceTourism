import { useState } from "react";
import { destinations } from "../data/destinations";


export default function Destination() {
  const [current, setCurrent] = useState(0);

  return (
    <main className="destination">
      <h2>
        <span>01</span> Pick your destination
      </h2>

      <div className="content">
        <img src={destinations[current].image} alt={destinations[current].name} />

        
        <div className="info">
          <ul className="tabs">
            {destinations.map((planet, index) => (
              <li
                key={planet.name}
                className={current === index ? "active" : ""}
                onClick={() => setCurrent(index)}
              >
                {planet.name}
              </li>
            ))}
          </ul>

        
          <h1>{destinations[current].name}</h1>
          <p>{destinations[current].description}</p>

          
          <div className="stats">
            <div>
              <p>Avg. Distance</p>
              <h3>{destinations[current].distance}</h3>
            </div>
            <div className="traveltime">
              <p>Est. Travel Time</p>
              <h3>{destinations[current].travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
