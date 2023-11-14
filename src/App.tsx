//import { useState } from "react";
//import Alert from "./components/Alert";
//import Button, { Color } from "./components/Button";
import ListGroup from "./components/listGroups/ListGroup";
import { SlCalender } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";

function App() {
  let items = ["New York", "Tokyio", "Paris", "Berlin", "Frankfurt"];
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
      {/* icons from react-icons */}
      <SlCalender color="red" size="40" />
      <BiSolidLike color="blue" size="40" />
    </div>
  );
}

/*  Calling Button component in App component */
// function App() {
//   const [alertVisible, setAlertVisible] = useState(false);
//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
//       )}
//       <Button
//         color={Color.dark}
//         onClick={() => {
//           setAlertVisible(true);
//         }}
//       >
//         Button
//       </Button>
//     </div>
//   );
// }

export default App;
