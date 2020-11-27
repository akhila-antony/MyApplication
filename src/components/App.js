import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

const App = () => (
  <div>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Main />
    </div>
  </div>
);

export default App;
