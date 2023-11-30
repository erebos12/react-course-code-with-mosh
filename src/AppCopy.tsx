//import { useState } from "react";
//import Alert from "./components/Alert";
//import Button, { Color } from "./components/button/Button";
//import ListGroup from "./components/listGroups/ListGroup";
//import { SlCalender } from "react-icons/sl";
//import { BiSolidLike } from "react-icons/bi";
import { useState } from "react";
//import Like from "./components/Like";
import TestEditor from "./MyEditor";
import ExpandableText from "./components/ExpandableText";

// function App() {
//   let items = ["New York", "Tokyio", "Paris", "Berlin", "Frankfurt"];
//   let heading = "Cities";
//   //let items = ["red", "blue", "yellow", "green"];
//   //let heading = "Colors";
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading={heading}
//         onSelectItem={handleSelectItem}
//       />
//       {/* icons from react-icons */}
//       <SlCalender color="red" size="40" />
//       <BiSolidLike color="blue" size="40" />
//     </div>
//   );
// }

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

// function App() {
//   return (
//     <div>
//       <Like
//         initStatus={true}
//         onClick={() => {
//           console.log("clicked");
//         }}
//       ></Like>
//     </div>
//   );
// }

/* using the right  state structure */
// function App() {
//   const [person, setPerson] = useState({
//     firstName: "Alex",
//     lastName: "Sahm",
//   });

//   const [contact, setContact] = useState({
//     email: "alex.sahm@gmx.de",
//     phone: "0174166448",
//   });
//   return (
//     <div>
//       {person.firstName} {person.lastName}
//     </div>
//   );
// }

// updating state objects - here updating the price
// function App() {
//   // do not mutate input object for drink,
//   // instead create a new one in handleClick() and call state setter function
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   });

//   const handleClick = () => {
//     // we need to create a brand new object of a drink
//     // using the spread operator
//     setDrink({ ...drink, price: 8 });
//   };

//   return (
//     <div>
//       {drink.price}
//       <button onClick={handleClick}> Click me</button>
//     </div>
//   );
// }

// updating nested objects
// function App() {
//   const [customer, setCustomer] = useState({
//     name: "John Smith",
//     address: {
//       city: "Frankfurt",
//       zipCode: 65934,
//     },
//   });

//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, zipCode: 66987 },
//     });
//   };

//   return (
//     <div>
//       {customer.address.city} {customer.address.zipCode}
//       <button onClick={handleClick}>Change zipCode on click</button>
//     </div>
//   );
// }

// updating array in state
// function App() {
//   const [tags, setTags] = useState(["red", "yellow", "green"]);

//   const handleClick = () => {
//     setTags([...tags, "blue"]);
//   };

//   return (
//     <div>
//       <ul>
//         {tags.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <button onClick={handleClick}>Change array on click</button>
//     </div>
//   );
// }

// updating an array in state
// function App() {
//   const [tags, setTags] = useState(["red", "yellow", "green"]);

//   const handleClick = () => {
//     let newTags = { ...tags }; // COPY input (Immutablilty!!!)
//     // adding 'blue'
//     newTags = [...tags, "blue"];
//     // remove  'red'
//     newTags = newTags.filter((tag) => tag !== "red");
//     // update - replace 'yellow' with 'orange'
//     newTags = newTags.map((tag) => (tag === "yellow" ? "orange" : tag));
//     setTags(newTags);
//     console.log("updated: " + newTags);
//     console.log("original: " + tags);
//   };

//   return (
//     <div>
//       <ul>
//         {tags.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <button onClick={handleClick}>Change array on click</button>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <ExpandableText
        maxChars={50}
        children="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        animi soluta iure ullam perferendis maxime reiciendis sapiente deleniti
        voluptatibus nostrum, recusandae labore voluptas iusto, eos iste commodi
        veniam accusamus? Repellat praesentium minima nostrum inventore ad
        commodi, cumque a! Provident, voluptates dicta! Aliquam, minima minus in
        ab est dolor debitis maiores soluta nisi inventore velit! Impedit, illum
        sapiente. Laboriosam, sequi ab, eaque dolorum recusandae harum
        consequuntur quia magni animi pariatur debitis fugiat labore rem
        voluptatum reprehenderit voluptate consectetur voluptatibus! Vel
        officiis nemo dolor quaerat ipsa. Quibusdam, ad, nisi nobis animi iure
        enim, dolores libero repudiandae debitis sint excepturi? Doloribus,
        blanditiis nostrum."
      />
    </div>
  );
}

export default App;
