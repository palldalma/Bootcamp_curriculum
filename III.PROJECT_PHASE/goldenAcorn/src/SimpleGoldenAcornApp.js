import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WithStates from "./WithStates";

const SimpleGoldenAcornApp = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/simple/states">
              <WithStates />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default SimpleGoldenAcornApp;
