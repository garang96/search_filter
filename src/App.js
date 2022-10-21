import React, { Component, useState } from "react";
import JSONDATA from "./MOCK_DATA.json";

const App = () => {
  const [searchData, setSearchData] = useState("");

  const handleInput = (e) => {
    setSearchData(e.target.value);
  };
  return (
    <div
      style={{ background: "grey", minHeight: "100vh", padding: 20 }}
      className="background"
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchData}
        style={{ margin: 20, width: 350 }}
        className="form-control"
        onChange={handleInput}
      />
      {JSONDATA.filter((name) => {
        if (searchData == "") return name;
        if (
          name.first_name
            .toLocaleLowerCase()
            .includes(searchData.toLocaleLowerCase())
        ) {
          return name;
        }
      }).map((val, key) => {
        {
          return (
            <div
              style={{ margin: 30, lineHeight: 0.5 }}
              className="text-left"
              key={key}
            >
              <p style={{ cursor: "pointer", color: "#222" }}>
                {val.first_name}
              </p>
            </div>
          );
        }
      })}
      ;
    </div>
  );
};

export default App;
