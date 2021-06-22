import { items } from "../items";
import Tabs from "../tabs";
import Accordions from "../accordion";
import Accordion from "../accordion/accordion-ui";
import {
  firstReducerPipe,
  toggleDefaultReducer,
  useIndexToggle,
} from "../hooks";
import { singleReducer } from "../hooks/single-item";
import { preventCloseReducer } from "../hooks/prevent-close";

const SideAccordion = ({
  reducers = [],
}: {
  reducers?: Array<SingleActionReducer>;
}) => {
  const { openIndexes, toggleIndex } = useIndexToggle({
    reducer: firstReducerPipe(...reducers, toggleDefaultReducer),
  });

  return (
    <Accordion.Container>
      {items.map((item, index) => (
        <Accordion.Item key={index} className="itemContainer">
          <Accordion.Title
            onClick={() => toggleIndex(index)}
            className="itemTitle"
          >
            {item.title}
            <span>{openIndexes.includes(index) ? "👉" : "👈"}</span>
          </Accordion.Title>
          <Accordion.Content
            isOpen={openIndexes.includes(index)}
            className="itemBody"
          >
            {item.content}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Container>
  );
};

const DemoComponent = () => (
  <>
    <Accordions items={items} />
    {/* <SideAccordion /> */}
    {/* <Accordions items={items} reducers={[singleReducer]} /> */}
    {/* <Accordions items={items} reducers={[preventCloseReducer]} /> */}
    {/* <Accordions items={items} reducers={[preventCloseReducer, singleReducer]} /> */}
    {/* <Tabs items={items} /> */}
  </>
);

export default DemoComponent;
