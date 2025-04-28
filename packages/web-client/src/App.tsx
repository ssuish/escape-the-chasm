import "./App.css";
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Onboarding from "./pages/Onboarding";
import Level from "./pages/Level";
import TrophyRoom from "./components/trophy/TrophyRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding/>}/>
        <Route path="/PlayGame" element={<Level/>}/>
        <Route path="/TrophyRoom" element={<TrophyRoom/>}/>
      </Routes>
    </Router>
  );
}

export default App;
