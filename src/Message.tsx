function Message() {
  // here comes JSX content
  // This is NOT HTML. Its is JSX (JS XML) !!!!
  const name = "Du";
  if (name) return <h1>Hallo {name}</h1>;
  return <h1>Hallo World</h1>;
}

export default Message;
