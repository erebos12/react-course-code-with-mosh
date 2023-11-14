import { useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";

// CSS-in-JS/TS
const List = styled.ul`
  list-style: disc;
  padding: 5px;
`;

interface ListItemProps {
  active: boolean;
}

const Item = styled.li<ListItemProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // onSelectItem(item) function as parameter in props
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // state hook: useState(<initial-value>)
  const [selectedIndex, setSelectedIndex] = useState(0);
  // arr[0] = state variable (selectedItem)
  // arr[1] = setter function - setSelectedIndex() setter for state variable
  const emptyItemsMessage = (items: string[]) =>
    items.length === 0 && <p>No item found!!!</p>;
  //function emptyItemsMessage(items: any) {
  //  {
  /* using && operator to render dynamically */
  //  }
  //}
  return (
    <>
      {/* <> is shortcut for <Fragment> tag (Using Fragment over div!!!) */}
      <h1>{heading}</h1>
      {emptyItemsMessage(items)}
      <List>
        {items.map((item, index) => (
          <Item
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </Item>
        ))}
        {/* each li should have a unique 'key=ID'. Here we use the item itself,
        but in real apps you would use a real unique ID */}
      </List>
    </>
  );
}

export default ListGroup;
