import ListGroup from "./components/ListGroup";

function App() {
  //let items = ["New York", "Tokyio", "Paris", "Berlin"];
  //let heading = "Cities";
  let items = ["red", "blue", "yellow", "green"];
  let heading = "Colors";
  return (
    <div>
      <ListGroup items={items} heading={heading} />
    </div>
  );
}

export default App;
