import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/Screen/HomeScreen";
import DetailScreen from "./components/Screen/DetailScreen";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="product/" element={<DetailScreen/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
