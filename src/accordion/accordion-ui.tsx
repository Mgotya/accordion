import styled from "@emotion/styled/macro";

const Accordion = {
  Container: styled.div`
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
    margin: 200px auto;
    max-width: 1800px;
  `,
  Content: styled.div(
    {
      padding: "15px",
      color: "#2c3e50",
      background: "white",
      fontSize: "1.5em",
    },
    ({ isOpen }: { isOpen: boolean }) => ({
      display: isOpen ? "block" : "none",
    })
  ),
  Item: styled.div`
    width: 100%;
    color: white;
    overflow: hidden;
  `,
  Title: styled.label`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: #2c3e50;
    font-weight: bold;
    font-size: 1.8em;
    cursor: pointer;
    &:hover {
      background: #0d151c;
    }
  `,
};

export default Accordion;
