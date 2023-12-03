const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.type),
    React.createElement("h3", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pure React v18"),
    React.createElement(Pet, { name: "Maia", type: "Dog", breed: "Beagle" }),
    React.createElement(Pet, {
      name: "Pepper",
      type: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", type: "Cat", breed: "Mixed" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
