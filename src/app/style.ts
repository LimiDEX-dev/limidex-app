import { styled } from "../styles";

export const App = styled("div", {
  width: "100%",
  minWidth: "100vw",
  height: "100%",
  minHeight: "100vh",
  padding: "70px 16px 70px",

  "@fromLaptop": {
    padding: "0 70px 70px",

    overflowX: "hidden",
  },
});

export const Wrapper = styled("div", {
  height: "100%",
});
