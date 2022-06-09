import "./App.css";

import React from "react";
import AppBody from "./components/AppBody.jsx";
import AppPogoda from "./components/AppPogoda.jsx";
import Apps from "./components/Apps.jsx";
import Contacts from "./components/Contacts.jsx";

import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<AppBody />} />
        <Route
          exact
          path="/pogoda"
          element={
            <AppPogoda
              sities={props.state.pogoda.sities}
              days={props.state.days}
              api={props.state.api}
            />
          }
        />
        {/* <Route exact path="/worldTime" element={<WorldTime />} /> */}
        <Route exact path="/games/*" element={<Apps />} />
        <Route exact path="/contacts/*" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
