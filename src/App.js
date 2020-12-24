import React, { useState } from "react";
import Filter from "./components/Filter";
import RecordTable from "./components/RecordTable";

const App = () => {
  const [columnName, setColumnName] = useState("");

  const handleChange = (label) => {
    setColumnName(label);
  };
  return (
    <div className="container-fluid">
      <h1 className="main-header">Birthday Records</h1>
      <Filter handleChange={handleChange} columnName={columnName} />
      <RecordTable name={columnName} />
    </div>
  );
};

export default App;
