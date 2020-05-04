import React from "react";
import styled from "styled-components";
import { Task } from "../NewApp";
import TaskComponent from "./TaskComponent";

interface Props {
  header: string;
  tasks?: Task[];
  handleTaskClick: (task: Task) => void;
}

export default function Column(props: Props) {
  const { tasks, handleTaskClick } = props;
  return (
    <ColumnWrapper>
      <header>{props.header}</header>
      {tasks &&
        tasks.map((task) => (
          <TaskComponent
            key={task.name}
            task={task}
            onClick={handleTaskClick}
          />
        ))}
    </ColumnWrapper>
  );
}
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 170px;
  overflow: auto;
`;
