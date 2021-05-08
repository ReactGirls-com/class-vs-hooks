import "./App.css";
import MouseTracker from "./Klass";
import MouseTrackerFn, { useMousePosition } from "./Hooks";

function App() {
  return (
    <div className="App">
      <h1>Class</h1>
      <MouseTracker />

      <h1>Hooks</h1>
      <MouseTrackerFn />

      <h1>Better mouse tracker</h1>
      <BetterMouseTracker />
    </div>
  );
}

function BetterMouseTracker() {
  const position = useMousePosition();
  const { x, y } = position;
  return (
    <div>
      [{position.x}, {position.y}]
      <br />[{x}, {y}]
    </div>
  );
}

export default App;
