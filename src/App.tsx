import React from "react";
import { preventCloseReducer, singleReducer } from "./accordion/reducers";
import { SampleAccordion } from "./sample-component";

import './styles.css';


function App() {
  return <SampleAccordion reducers={[preventCloseReducer, singleReducer]} />;
}

export default App;
