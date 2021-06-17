import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Post from "./components/Post";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
        <Route component={UnderConstruction} path="/underconstruction" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;