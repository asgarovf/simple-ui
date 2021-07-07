import SimpleSelect from "components/SimpleSelect/SimpleSelect";
import "style/global.scss";

const options = [
  { value: "option1" },
  { value: "option2" },
  { value: "option3" },
  { value: "option5" },
  { value: "option6" },
  { value: "option7" },
  { value: "option8" },
  { value: "option9" },
  { value: "option10" },
];

function App() {
  const noresults = <span>hello</span>;

  return (
    <div className="App">
      <div style={{ width: "200px" }}>
        <SimpleSelect
          options={options}
          placeholder="Hello"
          isSearch
          noResultsMessage={noresults}
        />
      </div>
    </div>
  );
}

export default App;
