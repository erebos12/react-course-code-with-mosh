function ListGroup() {
  let items = ["New York", "Tokyio", "Paris", "Berlin"];
  items = [];
  function message(items: any) {
    {
      /* using && operator to render dynamically */
    }
    return items.length === 0 && <p>No item found!!!</p>;
  }
  return (
    <>
      {/* <> is shortcut for <Fragment> tag (Using Fragment over div!!!) */}
      <h1>List Group:</h1>
      {message(items)}
      <ul className="list-group">
        {/* Since JSX has no for-loop we must use map which converts
        each item into a list-item <li>...</item> */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {/* each li should have a unique 'key=ID'. Here we use the item itself,
        but in real apps you would use a real unique ID */}
      </ul>
    </>
  );
}

export default ListGroup;
