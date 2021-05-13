import React from "react";
import { items, SampleAccordion } from "./sample-component";

import './styles.css';
import { Tabs } from "./tabs";


function App() {
  return <Tabs items={items}/>;
}

export default App;
