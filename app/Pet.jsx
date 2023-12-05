const Pet = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h2> {props.type} </h2>
      <h3> {props.breed} </h3>
    </div>
  );
};

export default Pet;
