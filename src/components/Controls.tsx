import React from "react";
import styled from "styled-components";
import { Task } from "../NewApp";

interface Props {
  task: Task;
  handleButtonClick: (direction: string) => void;
}

export default function Controls(props: Props) {
  const isDisabled = (direction: string) => {
    return (
      (direction === "forward" && props.task.stage === 3) ||
      (direction === "back" && props.task.stage === 0) ||
      !props.task.name
    );
  };

  return (
    <Wrapper>
      <Header>Trello Board</Header>
      <Main>
        <input
          type="text"
          id="component-name"
          value={props.task.name}
          readOnly
        />
        <button
          disabled={isDisabled("back")}
          onClick={() => props.handleButtonClick("back")}
        >
          Move back
        </button>
        <button
          disabled={isDisabled("forward")}
          onClick={() => props.handleButtonClick("forward")}
        >
          Move forward
        </button>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: lightblue;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 800;
`;

const Main = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 80%;

  height: 100px;
  input {
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
  }
  button {
    padding: 15px;
    background: #ffd073;
    margin: 10px;
    border-radius: 10px;
    width: 150px;
    height: 50px;
    box-shadow: 3px 3px 5px grey;
  }
`;
const Header = styled.div`
  padding-top: 20px;
  height: 10px;
`;
