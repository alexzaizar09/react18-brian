import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Pure React v18</h1>
      <Pet name="Maia" type="Dog" breed="Beagle" />
      <Pet name="Doink" type="Cat" breed="Mixed" />
      <Pet name="Pepper" type="Bird" breed="Cockatiel" />
    </div>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
