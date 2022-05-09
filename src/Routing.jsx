import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Museum from "./components/pages/Museum";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/museum">
          <Route path=":type" element={<Museum/>} />
          <Route path=":type/:numbering" element={<Museum/>} />
        </Route>
      </Routes>
    </Router>
  );
}
