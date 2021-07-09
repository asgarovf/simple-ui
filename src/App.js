import axios from "axios";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react";
import "style/global.scss";

import { ReactComponent as Down } from "assets/icons/arrow/caret_down.svg";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <div style={{ width: "200px" }}>
        <div style={{ marginTop: "2rem" }}>
          <Loader className="lg" />
          <span className="test"></span>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
