import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";

import SearchComponent from "./components/SearchComponent";
import WeatherBlock from "./components/WeatherBlock";
import RequestsHistory from "./components/RequestsHistory";

import "./App.css";

const App: React.FC = observer(() => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={SearchComponent} />
        <Route exact path="/more" component={SearchComponent} />
        <Route exact path="/weather" component={WeatherBlock} />

        <Route exact path="/requests" component={RequestsHistory} />
      </div>
    </BrowserRouter>
  );
});

export default App;
