import {Routes, Route} from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";

function App() {
  return (
    <div>
    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
    </Routes>
    </div>
  );
}

export default App;