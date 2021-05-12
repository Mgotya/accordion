import React from "react";
import { preventCloseReducer } from "./accordion/reducers";
import { SampleAccordion } from "./sample-component";

import "./styles.css";

function App() {
  return <SampleAccordion reducers={[preventCloseReducer]} />;
}

export default App;
