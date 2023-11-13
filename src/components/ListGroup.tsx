import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  // state hook: useState(<initial-value>)
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] = state variable (selectedItem)
  // arr[1] = setter function - setSelectedIndex() setter for state variable
  function emptyItemsMessage(items: any) {
    {
      /* using && operator to render dynamically */
    }
    return items.length === 0 && <p>No item found!!!</p>;
  }
  return (
    <>
      {/* <> is shortcut for <Fragment> tag (Using Fragment over div!!!) */}
      <h1>{heading}</h1>
      {emptyItemsMessage(items)}
      <ul className="list-group">
        {/* Since JSX has no for-loop we must use map which converts
        each item into a list-item <li>...</item> */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
            key={index}
          >
            {item}
          </li>
        ))}
        {/* each li should have a unique 'key=ID'. Here we use the item itself,
        but in real apps you would use a real unique ID */}
      </ul>
    </>
  );
}

export default ListGroup;
