import styled from "@emotion/styled/macro";

const Tab = {
  Container: styled.div`
    display: flex;
    margin: 50px auto;
    max-width: 600px;

    border-radius: 8px;
    overflow: hidden;

    min-height: 50px;
    justify-content: center;
    align-items: center;
  `,
  Content: styled.div(
    {
      color: "#2c3e50",
      boxShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.5)",
      padding: "20px",
      position: "absolute",
      left: 0,
      margin: "auto 200px",
    },
    ({ isOpen }: { isOpen: boolean }) => ({
      display: isOpen ? "block" : "none",
    })
  ),
  Item: styled.div``,
  Title: styled.div(
    {
      padding: "1em",
      fontWeight: "bold",
      fontSize: "1.2em",
      color: "white",
      width: "150px",
    },
    ({ isOpen }: { isOpen: boolean }) => ({
      background: isOpen ? "#0d151c" : "#2c3e50",
    })
  ),
};

export default Tab;
