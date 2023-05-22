import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import SingleProject from "./pages/SingleProject";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path='/project/:projectId/'
        element={
          <ProtectedRoute>
            <SingleProject/>
          </ProtectedRoute>
        }>
        
      </Route>
      <Route
        path='/profile/:profileId/'
        element={
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
        }
      />
      <Route
        path='/profile/:profileId/edit/'
        element={
          <ProtectedRoute>
            <EditProfile/>
          </ProtectedRoute>
        }
      />

      <Route path="/login/" element={<Login />} />
      <Route path="/register/" element={<Registration />} />
    </Routes>
  );
}

export default App;