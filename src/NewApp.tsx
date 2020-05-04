import React, { Component } from "react";
import Board from "./components/Board";
import Controls from "./components/Controls";
import styled from "styled-components";

interface Props {
  test?: string;
}
export interface Task {
  name: string;
  stage: number;
}
interface State {
  tasks: Task[];
  selected: Task;
}
export default class NewApp extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tasks: [
        { name: "task1", stage: 0 },
        { name: "task2", stage: 0 },
        { name: "task3", stage: 0 },
        { name: "task4", stage: 1 },
        { name: "task5", stage: 3 },
        { name: "task6", stage: 4 },
        { name: "task7", stage: 0 },
        { name: "task8", stage: 1 },
        { name: "task9", stage: 2 },
        { name: "task10", stage: 2 },
      ],
      selected: { name: "", stage: 0 },
    };
  }

  handleTaskClick = (task: Task) => {
    this.setState({ selected: task });
  };

  handleButtonClick = (direction: string) => {
    const { selected, tasks } = this.state;
    const taskId = this.state.tasks
      .map((task) => task.name)
      .indexOf(selected.name);

    const stage = direction === "forward" ? ++selected.stage : --selected.stage;
    const newTask = { ...selected, stage };
    const newTasks = tasks;
    newTasks[taskId] = newTask;

    this.setState({
      tasks: newTasks,
      selected: { name: "", stage: 0 },
    });
  };

  render() {
    return (
      <div className="App">
        <Wrap>
          <Controls
            task={this.state.selected}
            handleButtonClick={this.handleButtonClick}
          />
          <Board
            tasks={this.state.tasks}
            handleTaskClick={this.handleTaskClick}
          />
        </Wrap>
      </div>
    );
  }
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
`;
