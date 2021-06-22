import {
  useIndexToggle,
  firstReducerPipe,
  toggleDefaultReducer,
} from "../hooks";
import { preventCloseReducer } from "../hooks/prevent-close";
import { singleReducer } from "../hooks/single-item";
import Tab from "./tabs-ui";

const useTabs = () => {
  return useIndexToggle({
    reducer: firstReducerPipe(
      preventCloseReducer,
      singleReducer,
      toggleDefaultReducer
    ),
  });
};

const Tabs = ({ items }: { items: any[] }) => {
  const { openIndexes, toggleIndex } = useTabs();

  return (
    <Tab.Container>
      {items.map((item, index) => (
        <Tab.Item key={index}>
          <Tab.Title
            onClick={() => toggleIndex(index)}
            isOpen={openIndexes.includes(index)}
          >
            {item.title}
          </Tab.Title>
          <Tab.Content isOpen={openIndexes.includes(index)}>
            {item.content}
          </Tab.Content>
        </Tab.Item>
      ))}
    </Tab.Container>
  );
};

export default Tabs;
