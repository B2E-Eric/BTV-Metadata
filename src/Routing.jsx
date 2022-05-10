import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Museum from "./components/pages/Museum";
import Default from './components/pages/Default';

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/museum">
          <Route path=":type" element={<Museum/>} />
          <Route path=":type/:numbering" element={<Museum/>} />
          <Route index element={<Default/>} />
        </Route>
      </Routes>
    </Router>
  );
}
