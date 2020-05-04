import React from "react";
import styled from "styled-components";
import { Task } from "../NewApp";

interface Props {
  task: Task;
  onClick: (task: Task) => void;
}

export default function TaskComponent(props: Props) {
  const handleClick = () => {
    props.onClick(props.task);
  };
  return <TaskContainer onClick={handleClick}>{props.task.name}</TaskContainer>;
}

const TaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-content: center; */
  border: 1px solid black;
  border-radius: 20px;
  height: 200px;
  width: 150px;
  overflow: auto;
  margin: 10px;
  box-shadow: 3px 3px 5px 6px #ccc;
`;
