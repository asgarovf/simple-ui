import SimpleSelect from "Components/SimpleSelect/SimpleSelect";
import "style/global.scss";

const options = [
  { value: "option1" },
  { value: "option2" },
  { value: "option3" },
  { value: "option4" },
];

function App() {
  return (
    <div className="App">
      <div style={{ width: "200px" }}>
        <SimpleSelect options={options} placeholder="Hello" isSearch />
      </div>
    </div>
  );
}

export default App;
