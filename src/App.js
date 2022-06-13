
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";
import Register from './pages/Register';
import Login from "./pages/login";
import Datapage from "./pages/datapage";



function App() {
  return (
    <div>
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/reg" element={<Register />}></Route>    
            <Route path="/log" element={<Login />}></Route>
            <Route path="/datapage" element={<Datapage />}></Route>
        </Routes>
    </Router>

    </div>
  );
}

export default App;
