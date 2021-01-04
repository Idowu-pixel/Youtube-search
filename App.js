import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideo from "./RecommendedVideo";
import SearchPage from "./SearchPage";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/search/:searchTerm">
          <div className="app__page">
            <Sidebar />
            <SearchPage />
          </div>
        </Route>
        <Route path="/">
          <div className="app__page">
            <Sidebar />
            <RecommendedVideo />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//https://clone-71e67.web.app
