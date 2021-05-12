import React from "react";
import { singleReducer } from "./accordion/reducers";
import { SampleAccordion } from "./sample-component";

import "./styles.css";

function App() {
  return <SampleAccordion reducers={[singleReducer]} />;
}

export default App;
