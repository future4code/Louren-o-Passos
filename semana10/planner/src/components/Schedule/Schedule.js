import React, { useEffect, useState } from "react";
import {
  ScheduleContainer,
  ScheduleGrid,
  GridHeader,
  GridLine,
  GridHeaderContainer,
  TaskNumberContainer,
  Task,
} from "./styles";
import axios from "axios";

function Schedule(props) {
  const [taskList, setTaskList] = useState([]);
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-lourenco";

  const fetchTaskList = () => {
    axios
      .get(url)
      .then((response) => {
        setTaskList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTaskList();
  }, [taskList]);

  return (
    <ScheduleContainer>
      <TaskNumberContainer>
        <p>
          Número de Tarefas: <span>{taskList.length}</span>
        </p>
      </TaskNumberContainer>
      <ScheduleGrid>
        <GridLine>
          <GridHeaderContainer>
            <GridHeader>Segunda-feira</GridHeader>
          </GridHeaderContainer>
          <div data-testid={"segunda"}>
            {taskList &&
              taskList.map((task) => {
                if (task.day === "Segunda-Feira") {
                  return <Task>{task.text}</Task>;
                }
              })}
          </div>
        </GridLine>
        <GridLine>
          <GridHeaderContainer>
            <GridHeader>Terça-feira</GridHeader>
          </GridHeaderContainer>
          <div div data-testid={"terça"}>
            {taskList &&
              taskList.map((task) => {
                if (task.day === "Terça-Feira") {
                  return <Task>{task.text}</Task>;
                }
              })}
          </div>
        </GridLine>
        <GridLine>
          <GridHeaderContainer>
            <GridHeader>Quarta-feira</GridHeader>
          </GridHeaderContainer>
          <div>
            {taskList &&
              taskList.map((task) => {
                if (task.day === "Quarta-Feira") {
                  return <Task>{task.text}</Task>;
                }
              })}
          </div>
        </GridLine>
        <GridLine>
          <GridHeaderContainer>
            <GridHeader>Quinta-feira</GridHeader>
          </GridHeaderContainer>
          <div>
            {taskList &&
              taskList.map((task) => {
                if (task.day === "Quinta-Feira") {
                  return <Task>{task.text}</Task>;
                }
              })}
          </div>
        </GridLine>
        <GridLine>
          <GridHeaderContainer>
            <GridHeader>Sexta-feira</GridHeader>
          </GridHeaderContainer>
          <div>
            {taskList &&
              taskList.map((task) => {
                if (task.day === "Sexta-Feira") {
                  return <Task>{task.text}</Task>;
                }
              })}
          </div>
        </GridLine>
        <GridLine>
          <GridHeaderContainer>
            <GridHeader>Sábado</GridHeader>
          </GridHeaderContainer>
          <div>
            {taskList &&
              taskList.map((task) => {
                if (task.day === "Sábado") {
                  return <Task>{task.text}</Task>;
                }
              })}
          </div>
        </GridLine>
        <GridLine>
          <GridHeaderContainer>
            <GridHeader>Domingo</GridHeader>
          </GridHeaderContainer>
          <div>
            {taskList &&
              taskList.map((task) => {
                if (task.day === "Domingo") {
                  return <Task>{task.text}</Task>;
                }
              })}
          </div>
        </GridLine>
      </ScheduleGrid>
    </ScheduleContainer>
  );
}

export default Schedule;
