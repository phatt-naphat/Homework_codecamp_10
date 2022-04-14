import React from "react";
import { Switch, Route, Link} from "react-router-dom"
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Topics from "./pages/Topics"
import Greeting from "./pages/Greeting"

export default function App() {
    return(
      <div className="app">
            <Navbar/>
            <Switch>
              <Route exact path = "/" component={Home} />  //exact path means that something inside "" have to be exactly the same
              <Route path = "/about" component={About} />
              <Route path = "/topics" component={Topics} />
              <Route path = "/greeting/:name" component={Greeting} />
            </Switch>
        </div>

    );
}

