import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Museum from "./components/pages/Museum";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/museum/:type/:numbering" element={<Museum/>}/>
      </Routes>
    </Router>
  );
}