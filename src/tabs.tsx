import React from "react";
import {
  useAccordion,
  useFirstReducer,
  preventCloseReducer,
  singleReducer,
  accordionReducer,
} from "./accordion/reducers";
import Tab from "./tabs-ui";

const useTabs = () => {
  return useAccordion({
    reducer: useFirstReducer(
      preventCloseReducer,
      singleReducer,
      accordionReducer
    ),
  });
};

export const Tabs = ({ items }: { items: any[] }) => {
  const { openIndexes, toggleIndex } = useTabs();

  return (
    <Tab.Container>
      {items.map((item, index) => (
        <Tab.Item key={index}>
          <Tab.Title onClick={() => toggleIndex(index)} isOpen={openIndexes.includes(index)}>
            {item.title}
          </Tab.Title>
          <Tab.Content
            isOpen={openIndexes.includes(index)}
          >
            {item.content}
          </Tab.Content>
        </Tab.Item>
      ))}
    </Tab.Container>
  );
};
