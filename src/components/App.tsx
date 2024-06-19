import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Welcome } from "../routes/Welcome";

function App() {
  return (
    <Router>
      <div className="realtive flex flex-col items-center justify-center m-auto overflow-hidden">
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
