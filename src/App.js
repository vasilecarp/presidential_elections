import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import CandidatesList from "./components/CandidatesList";
import CandidateProfile from "./components/CandidateProfile";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [candidates, setCandidates] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/candidates"
          element={<CandidatesList candidates={candidates} />}
        />
        <Route path="/candidate/:id" element={<CandidateProfile />} />
        <Route path="/results" element={<Results candidates={candidates} />} />
      </Routes>
    </Router>
  );
}

export default App;
