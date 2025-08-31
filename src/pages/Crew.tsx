import { useState } from "react";
import { crew } from "../data/crew";


export default function Crew() {
  const [current, setCurrent] = useState(0);

  return (
    <main className="crew">
      <h2>
        <span>02</span> Meet your crew
      </h2>

      <div className="content">
        
        <div className="text">
          <h3>{crew[current].role}</h3>
          <h1>{crew[current].name}</h1>
          <p>{crew[current].bio}</p>

          
          <div className="dots">
            {crew.map((_, index) => (
              <span
                key={index}
                className={current === index ? "active" : ""}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>

        
        <img className="crew-img"  src={crew[current].image} alt={crew[current].name} />
      </div>
    </main>
  );
}
