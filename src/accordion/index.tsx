import {
  firstReducerPipe,
  toggleDefaultReducer,
  useIndexToggle,
} from "../hooks";
import Accordion from "./accordion-ui";

const Accordions = ({
  reducers = [],
  items,
}: {
  reducers?: Array<SingleActionReducer>;
  items: any[];
}) => {
  const { openIndexes, toggleIndex } = useIndexToggle({
    reducer: firstReducerPipe(...reducers, toggleDefaultReducer),
  });

  return (
    <Accordion.Container>
      {items.map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Title onClick={() => toggleIndex(index)}>
            {item.title}
            <span>{openIndexes.includes(index) ? "👉" : "👈"}</span>
          </Accordion.Title>
          <Accordion.Content isOpen={openIndexes.includes(index)}>
            {item.content}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Container>
  );
};

export default Accordions;
