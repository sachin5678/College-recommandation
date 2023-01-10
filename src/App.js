import React, { useState } from "react";
import "./styles.css";

var Maharashtra = {
  first: {
    name: "IIT Bombay - Indian Institute of Technology",
    rating: "NIRF Ranking 3"
  },
  Second: {
    name: "IIT Bombay - Indian Institute of Technology",
    rating: "NIRF Ranking 18"
  }
};

var Delhi = {
  first: {
    name: "IIT Delhi - Indian Institute of Technology",
    rating: "NIRF Ranking 2"
  },
  Second: {
    name: "JMI New Delhi - Jamia Millia Islamia",
    rating: "NIRF Ranking 25"
  }
};

var Hydrabad = {
  first: {
    name: "IIT Hyderabad - Indian Institute of Technology",
    rating: "NIRF Ranking 9"
  },
  Second: {
    name: "IIIT Hyderabad - International Institute of Information Technology",
    rating: "NIRF Ranking 62"
  }
};

export default function App() {
  var [clg, setClg] = useState([]);

  function handleClick(event) {
    var input = event.target.value;

    if ("Maharashtra" === input) {
      clg = Object.entries(Maharashtra);

      setClg(clg);

      console.log(clg);
    } else if ("Delhi" === input) {
      clg = Object.entries(Delhi);

      setClg(clg);

      console.log(clg);
    } else {
      clg = Object.entries(Hydrabad);

      setClg(clg);

      console.log(clg);
    }
  }
  return (
    <div className="App">
      <h1>Top Engineering Colleges in Respective States</h1>
      <h2> Click on your state to see the best colleges</h2>
      <button
        style={{ margin: "1rem" }}
        value="Maharashtra"
        onClick={handleClick}
      >
        Maharashtra
      </button>
      <button style={{ margin: "1rem" }} value="Delhi" onClick={handleClick}>
        Delhi
      </button>
      <button style={{ margin: "1rem" }} value="Hydrabad" onClick={handleClick}>
        Hydrabad
      </button>
      <hr style={{ width: "50vw", margin: "0.5rem auto" }} />
      {clg.map(function (value) {
        return (
          <div
            key={value[1].rating}
            style={{
              border: "1px solid grey",
              margin: "2rem auto",
              width: "25vw",
              borderRadius: "7px"
            }}
          >
            <h4 style={{ margin: "0", padding: "0.5rem" }}>{value[1].name}</h4>
            <h6 style={{ margin: "0", padding: "0.5rem" }}>
              {value[1].rating}
            </h6>
          </div>
        );
      })}
    </div>
  );
}
