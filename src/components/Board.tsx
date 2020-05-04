import React, { Component } from "react";
import styled from "styled-components";

import { Task } from "../NewApp";
import Column from "./Column";

interface Props {
  tasks?: Task[];
  handleTaskClick: (task: Task) => void;
}

export default class Board extends Component<Props> {
  render() {
    const { tasks, handleTaskClick } = this.props;
    const todoTasks =
      tasks && !!tasks.length ? tasks.filter((task) => task.stage === 0) : [];
    const doingTasks =
      tasks && !!tasks.length ? tasks.filter((task) => task.stage === 1) : [];
    const testingTasks =
      tasks && !!tasks.length ? tasks.filter((task) => task.stage === 2) : [];
    const doneTasks =
      tasks && !!tasks.length ? tasks.filter((task) => task.stage === 3) : [];
    return (
      <BoardGrid>
        <Column
          header="Todo"
          tasks={todoTasks}
          handleTaskClick={handleTaskClick}
        />
        <Column
          header="Doing"
          tasks={doingTasks}
          handleTaskClick={handleTaskClick}
        />
        <Column
          header="Testing"
          tasks={testingTasks}
          handleTaskClick={handleTaskClick}
        />
        <Column
          header="Done"
          tasks={doneTasks}
          handleTaskClick={handleTaskClick}
        />
      </BoardGrid>
    );
  }
}

const BoardGrid = styled.div`
  display: flex;
  flex-direction: row;
`;
