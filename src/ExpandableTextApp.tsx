import ExpandableText from "./components/ExpandableText";

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
