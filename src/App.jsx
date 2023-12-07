import "./App.css";
import Content from "./components/Content";
import EditDetails from "./components/EditDetails";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <Hero />
        <Content />
        <EditDetails />
      </div>
    </>
  );
}

export default App;
