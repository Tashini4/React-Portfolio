import "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedBackgroundPage from "./components/AnimatedBackgroundPage.tsx";

function App() {
  return (
    <Router>
      <div>
       <AnimatedBackgroundPage/>

      </div>
    </Router>
    
  );
}

export default App;
