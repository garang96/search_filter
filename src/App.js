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
    </div>
  );
};

export default App;
