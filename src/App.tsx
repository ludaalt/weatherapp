import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { observer } from "mobx-react-lite";

import SearchComponent from "./components/SearchComponent";
import WeatherBlock from "./components/WeatherBlock";
import RequestsHistory from "./components/RequestsHistory";

import "./App.css";

const App: React.FC = observer(() => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchComponent />} />
          <Route path="/more" element={<SearchComponent />} />
          <Route path="/weather" element={<WeatherBlock />} />

          <Route path="/requests" element={<RequestsHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
});

export default App;
