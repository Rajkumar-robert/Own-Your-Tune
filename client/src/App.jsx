import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import TestPage from "./pages/TestPage";
import UploadPage from "./pages/UploadPage";

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/purchases" element={<UploadPage />} />
      </Routes>
    </Router>
  </>
);

export default App;
