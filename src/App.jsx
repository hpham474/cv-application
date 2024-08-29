import "./App.css";
import General from "./components/General";

function App() {
  return (
    <>
      <nav>
        <h1>CV Builder</h1>
      </nav>
      <div className="content">
        <div className="sidebar">
          <General></General>
        </div>
        <div className="display"></div>
      </div>
    </>
  );
}

export default App;
