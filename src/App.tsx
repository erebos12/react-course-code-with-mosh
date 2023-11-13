import { useState } from "react";
import Alert from "./components/Alert";
import Button, { ButtonType, Color } from "./components/Button";

/*
function App() {
  let items = ["New York", "Tokyio", "Paris", "Berlin"];
  let heading = "Cities";
  //let items = ["red", "blue", "yellow", "green"];
  //let heading = "Colors";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}*/

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
      <Button
        color={Color.danger}
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        Button
      </Button>
    </div>
  );
}

export default App;
