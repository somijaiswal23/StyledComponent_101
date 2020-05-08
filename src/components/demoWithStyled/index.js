import React from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;

  margin: 0 1em;
  padding: 0.25em 1em;
  border: ${props =>
    props.success
      ? "2px solid green"
      : props.warning
      ? "2px solid orange"
      : props.danger
      ? "2px solid red"
      : "2px solid pink"};
  color: ${props =>
    props.success
      ? "green"
      : props.warning
      ? "orange"
      : props.danger
      ? "red"
      : "pink"};
  &:hover {
    background-color: ${props =>
      props.success
        ? "green"
        : props.warning
        ? "orange"
        : props.danger
        ? "red"
        : "pink"};
     color:white;
  }
`;
const Header = styled.h1`color: red;`;

const NewButton = styled(Button)`font-size: 30px;`;

function DemoWithStyled() {
  return (
    <div>
      <Button danger>I am a Button</Button>
      <Button success>I am a Button</Button>
      <Button warning>I am a Button</Button>
      <NewButton>I am a Button</NewButton>
      <Header> This is now a link! </Header>
      <Header as="h2"> This is now a link! </Header>
      <Header as="h3"> This is now a link! </Header>
    </div>
  );
}

export default DemoWithStyled;
