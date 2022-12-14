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
const DashboardHome = pageLoader(lazy(() => import("./components/DashboardComponents/Home")))

// Events
const Events = pageLoader(lazy(() => import("./components/DashboardComponents/Events")))
const CreateEvent = pageLoader(lazy(() => import("./components/DashboardComponents/Events/CreateEvents")))
const Event = pageLoader(lazy(() => import("./components/DashboardComponents/Events/Event")))
const Guests = pageLoader(lazy(() => import("./components/DashboardComponents/Events/components/Guests")))
const Settings = pageLoader(lazy(() => import("./components/DashboardComponents/Events/components/Settings")))

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
            <Route path="" element={<DashboardHome />} />

            {/* Events */}
            <Route path="events" element={<Events />} />
            <Route path="events/create-event" element={<CreateEvent />} />
            <Route path="events/event/:id" element={<Event />}>
              <Route path="" element={<Guests />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
