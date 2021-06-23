import "./styles.css";
import styled, { css } from "styled-components";
import Avatar from "./Avatar";

const src =
  "https://images.unsplash.com/photo-1622925492533-67508d80cc66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";

const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
`;

const Wrapper = styled.div`
  ${(props) => props.isFlex && flexStyles};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  padding: ${(props) => props.padding || " 0"};
  margin: ${(props) => props.margin || "0"};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
`;

export default function App() {
  return (
    <Wrapper className="App" isFlex flexDirection="column" alignItems="center">
      <h1>Styled Components</h1>
      <h2>Avatar Component</h2>
      <Wrapper
        className="app__avatarContainer"
        isFlex
        flexDirection="column"
        background="lightgrey"
        justifyContent="space-between"
        alignItems="center"
        width="25%"
        padding="1rem 0"
        borderRadius=".75rem"
        height="400px"
      >
        {" "}
        <Avatar hasBadge isActive src={src} name="Lm" />
        <Avatar hasBadge isActive name="Lm" height="80px" width="80px" />
        <Avatar name="Lm" height="60px" width="60px" />
      </Wrapper>
    </Wrapper>
  );
}
