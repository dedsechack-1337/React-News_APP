import "./App.css";
import React from "react";
import NavBar from "./componentes/NavBar";
import News from "./componentes/News";

import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const App = ()=> {
  const [prog,setProg] = useState(0)
const apikey = '33baf05e7df34f59a9eb66ac82268fee'


  const pageNum = 16;
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            shadow="true"
            color="red"
            progress={prog}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                apiKey={apikey}
                  setProg={setProg}
                  key="home"
                  pageSize={pageNum}
                  category="general"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                apiKey={apikey}
                  setProg={setProg}
                  key="science"
                  pageSize={pageNum}
                  category="science"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                apiKey={apikey}
                  setProg={setProg}
                  key="general"
                  pageSize={pageNum}
                  category="general"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                apiKey={apikey}
                  setProg={setProg}
                  key="sports"
                  pageSize={pageNum}
                  category="sports"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                apiKey={apikey}
                  setProg={setProg}
                  key="entertainment"
                  pageSize={pageNum}
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                apiKey={apikey}
                  setProg={setProg}
                  key="health"
                  pageSize={pageNum}
                  category="health"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                apiKey={apikey}
                  setProg={setProg}
                  key="technology"
                  pageSize={pageNum}
                  category="technology"
                  country="in"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                apiKey={apikey}
                  setProg={setProg}
                  key="business"
                  pageSize={pageNum}
                  category="business"
                  country="in"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  
}
App.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 8
};
App.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
};
export default App;
