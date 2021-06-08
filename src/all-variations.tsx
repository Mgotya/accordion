import React from "react";
import { preventCloseReducer, singleReducer } from "./accordion/reducers";
import { items, SideAccordion, DefaultAccordion } from "./sample-component";
import { Tabs } from "./tabs";

export const VariationControls = () => (
  <>
    {/* <DefaultAccordion /> */}
    {/* <SideAccordion /> */}
    {/* <DefaultAccordion reducers={[singleReducer]} /> */}
    {/* <DefaultAccordion reducers={[preventCloseReducer]} /> */}
    {/* <DefaultAccordion reducers={[preventCloseReducer, singleReducer]} /> */}
    <Tabs items={items} />
  </>
);
