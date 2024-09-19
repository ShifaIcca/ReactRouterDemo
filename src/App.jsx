import React from "react";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Setup from "./Components/Setup";
import About from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/Home"
          element={
            <Home
              head={"Home"}
              p1={`React Router is a popular javascript library for building
          robust client-side routing systems in React application. It
          provides declarative routing,dynamic routing,and
          parameterized routes. React Router simlifies navigation
          and enhances user experience with seamless transactions.`}
              p2={`Key features include Router,Route,Link and Switch
          components.React Router v6 is the latest version with
          improvred performance and features.It supports nested
          routes,redirects,and dynamic content.Easy to learn and
          use,React Router integrates well with other React libraries.`}
            />
          }
        />

        <Route
          path="/Setup"
          element={
            <Home head={`Setup`}>
              <Setup />
            </Home>
          }
        />

        <Route
          path="/About"
          element={
            <Home
              head={"About"}
              p1={`React Router is a popular javascript library for building
          robust client-side routing systems in React application. It
          provides declarative routing,dynamic routing,and
          parameterized routes. React Router simlifies navigation
          and enhances user experience with seamless transactions.`}
              p2={`Key features include Router,Route,Link and Switch
          components.React Router v6 is the latest version with
          improvred performance and features.It supports nested
          routes,redirects,and dynamic content.Easy to learn and
          use,React Router integrates well with other React libraries.`}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
