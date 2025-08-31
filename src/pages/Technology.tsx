import { useState } from "react";
import { technology } from "../data/technology";


export default function Technology() {
  const [active, setActive] = useState(0);
  const tech = technology[active];

  return (
    <section className="technology">
      <h2 className="tech-heading">
        <span>03</span> Space Launch 101
      </h2>

      <div className="tech-content">
        
        <div className="tech-left">
          
          <div className="tech-buttons">
            {technology.map((item, index) => (
              <button
                key={item.id}
                className={`circle-btn ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
              >
                {item.id}
              </button>
            ))}
          </div>

          
          <div className="tech-text">
            <h2 className="term">The terminology…</h2>
            <h1 className="tech-name">{tech.name}</h1>
            <p className="tech-desc">{tech.desc}</p>
          </div>
        </div>

       
        <div className="tech-right">
          <img src={tech.image} alt={tech.name} />
        </div>
      </div>
    </section>
  );
}
