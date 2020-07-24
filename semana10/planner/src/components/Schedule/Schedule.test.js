import React from "react";
import { render, fireEvent, wait, findByText } from "@testing-library/react";
import axios from "axios";
import Schedule from "./Schedule";
import userEvent from "@testing-library/user-event";

describe("Renderização inicial", () => {
  test("Renderiza os dias da semana na tela", async () => {
    const { getByText } = render(<Schedule />);
    const segunda = getByText(/Segunda-feira/i);
    expect(segunda).toBeInTheDocument();
    const terca = getByText(/Terça-feira/i);
    expect(terca).toBeInTheDocument();
    const quarta = getByText(/Quarta-feira/i);
    expect(quarta).toBeInTheDocument();
    const quinta = getByText(/Quinta-feira/i);
    expect(quinta).toBeInTheDocument();
    const sexta = getByText(/Sexta-feira/i);
    expect(sexta).toBeInTheDocument();
    const sabado = getByText(/Sábado/i);
    expect(sabado).toBeInTheDocument();
    const domingo = getByText(/Domingo/i);
    expect(domingo).toBeInTheDocument();
  });
  test("Ao renderizar, chamar o GET para puxar as tarefas de segunda e renderizar no dia correto", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          text: "Tarefa Teste",
          day: "Segunda-Feira",
          id: "sYLgZCjyXTwr3G9lqNIP",
        },
      ],
    });

    const { findByText, getByTestId } = render(<Schedule />);

    await wait(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    const task = await findByText("Tarefa Teste");
    await expect(task).toBeInTheDocument();

    const taskDay = getByTestId(/segunda/i);
    expect(taskDay).toHaveTextContent("Tarefa Teste");
  });
  test("Ao renderizar, chamar o GET para puxar as tarefas de terça e renderizar no dia correto", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          text: "Tarefa Terça",
          day: "Terça-Feira",
          id: "sYLgZCjyXTwr3G9lqNIP",
        },
      ],
    });

    const { findByText, getByTestId } = render(<Schedule />);

    await wait(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    const task = await findByText("Tarefa Terça");
    await expect(task).toBeInTheDocument();

    const taskDay = getByTestId(/terça/i);
    expect(taskDay).toHaveTextContent("Tarefa Terça");
  });
});
