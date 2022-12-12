import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import pageLoader from "./HOCs/pageLoader";

// Home Component
const Home = pageLoader(lazy(() => import("./pages/Home")));
// Auth Component
const SignUp = pageLoader(lazy(() => import("./pages/Auth/SignUp")))
const Login = pageLoader(lazy(() => import("./pages/Auth/Login")))

// Dashboard Components
const Dashboard = pageLoader(lazy(() => import("./pages/Dashboard")))
const CreateEvent = pageLoader(lazy(() => import("./components/DashboardComponents/Events/CreateEvents")))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboard" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="events/create-event" element={<CreateEvent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
