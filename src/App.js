import { Routes, Route, Outlet, Link } from "react-router-dom";

import FinalScreen from "./pages/FinalScreen";
import NoMatch from "./pages/NoMatch";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/score" element={<FinalScreen />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
