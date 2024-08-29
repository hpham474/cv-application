import General from "./components/General";
import Education from "./components/Education";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <h1>CV Builder</h1>
      </nav>
      <div className="content">
        <div className="sidebar">
          <General></General>
          <Education></Education>
        </div>
        <div className="display"></div>
      </div>
    </>
  );
}

export default App;
