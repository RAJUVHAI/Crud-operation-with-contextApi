import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ".././node_modules/bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/Create/Create";
import Delete from "./components/Deletes/Delete";
import Edit from "./components/Edit/Edit";
import Home from "./components/Home/Home";
import Read from "./components/Read/Read";
import { UserProvider } from "./components/UserContext/UserContext";
export default function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </UserProvider>
    </div>
  );
}
