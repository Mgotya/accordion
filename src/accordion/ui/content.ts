import styled from "@emotion/styled/macro";

const Content = styled.div(
  {
    padding: '15px',
    color: "#2c3e50",
    background: "white",
    fontSize: "1.5em",
  },
  ({ isOpen }: { isOpen: boolean }) => ({ display: isOpen ? "block" : "none" })
);

export default Content;
