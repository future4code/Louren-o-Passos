import React from "react";
import axios from "axios";
import { Container, TaskInput, DaySelect } from "./styles";
import { useState, useEffect } from "react";

function Header() {
  const [taskInput, setTaskInput] = useState("");
  const [daySelect, setDaySelect] = useState("");

  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-lourenco";

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleSelectChange = (event) => {
    setDaySelect(event.target.value);
    console.log(daySelect);
  };

  const createTask = () => {
    if (taskInput && daySelect) {
      const body = {
        text: taskInput,
        day: daySelect,
      };

      axios
        .post(url, body)
        .then((response) => {
          console.log(response);
          setTaskInput("");
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Não pode ser em branco!");
    }
  };
  return (
    <Container>
      <TaskInput
        placeholder="Adicione aqui sua tarefa"
        value={taskInput}
        onChange={handleInputChange}
      />
      <div>
        <label htmlFor={"Select dia da semana"}>Dia da Semana </label>
        <DaySelect
          value={daySelect}
          onChange={handleSelectChange}
          id={"Select dia da semana"}
        >
          <option value=""></option>
          <option value="Segunda-Feira">Segunda-Feira</option>
          <option value="Terça-Feira">Terça-Feira</option>
          <option value="Quarta-Feira">Quarta-Feira</option>
          <option value="Quinta-Feira">Quinta-Feira</option>
          <option value="Sexta-Feira">Sexta-Feira</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </DaySelect>
      </div>

      <button onClick={createTask}>Adicionar</button>
    </Container>
  );
}

export default Header;
