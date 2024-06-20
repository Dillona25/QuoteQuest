import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Welcome } from "../routes/Welcome";
import { useState } from "react";
import { LoginModal } from "./LoginModal/LoginModal";
import { RegisterModal } from "./RegisterModal/RegisterModal";
import { Home } from "../routes/Home";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn] = useState(true);

  const closeModal = () => {
    setActiveModal("");
  };

  const handleSigninModal = () => {
    setActiveModal("Login");
  };

  const handleRegisterModal = () => {
    setActiveModal("Register");
  };

  return (
    <Router>
      <div className="realtive flex flex-col items-center justify-center m-auto overflow-hidden">
        <Routes>
          <Route
            path="/Welcome"
            element={
              <Welcome
                handleSigninModal={handleSigninModal}
                handleRegisterModal={handleRegisterModal}
              />
            }
          />
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
        {activeModal === "Login" && (
          <LoginModal
            handleRegisterModal={handleRegisterModal}
            closeModal={closeModal}
          />
        )}
        {activeModal === "Register" && (
          <RegisterModal
            closeModal={closeModal}
            handleSigninModal={handleSigninModal}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
