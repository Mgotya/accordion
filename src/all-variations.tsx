import React from "react";
import { items, SampleAccordion } from "./sample-component";
import { Tabs } from "./tabs";

export const VariationControll = () => (
  <>
    <Tabs items={items} />
    <SampleAccordion />
  </>
);
