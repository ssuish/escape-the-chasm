import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Level from "./pages/Level";
import TrophyRoom from "./components/trophy/TrophyRoom";
import CharacterSelect from "./pages/CharacterSelect";
import { SequenceConnect } from "@0xsequence/connect";
import { SequenceCheckoutProvider } from "@0xsequence/checkout";
import { config } from "./config";
import ProtectedRoute from "./components/wallet/ProtectedRoute";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, repeat: true });
    AOS.refresh();
  }, []);
  return (
    <SequenceConnect config={config}>
      <SequenceCheckoutProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route
              path="/play-game"
              element={
                <ProtectedRoute>
                  <Level />
                </ProtectedRoute>
              }
            />
            <Route
              path="/trophy-room"
              element={
                <ProtectedRoute>
                  <TrophyRoom />
                </ProtectedRoute>
              }
            />
            <Route
              path="/character-select"
              element={
                <ProtectedRoute>
                  <CharacterSelect />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </SequenceCheckoutProvider>
    </SequenceConnect>
    
  );
}

export default App;
