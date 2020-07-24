import React from "react";
import {
  render,
  fireEvent,
  getAllByPlaceholderText,
  getByLabelText,
  wait,
} from "@testing-library/react";
import Header from "./Header";
import axios from "axios";
import userEvent from "@testing-library/user-event";

axios.get = jest.fn().mockResolvedValue({ data: [] });
axios.post = jest.fn().mockResolvedValue();

const createTask = () => {
  const utilis = render(<Header />);

  const input = utilis.getByPlaceholderText(/Adicione aqui sua tarefa/i);
  userEvent.type(input, "Tarefa Teste");

  const button = utilis.getByText(/Adicionar/i);
  userEvent.click(button);

  return utilis;
};

describe("Renderização inicial", () => {
  test("Verificar se input existe na tela", () => {
    const { getByPlaceholderText } = render(<Header />);
    const input = getByPlaceholderText(/Adicione aqui sua tarefa/i);
    expect(input).toBeInTheDocument();
  });

  test("Verifica se há o botão de adicionar tarefa na tela", () => {
    const { getByText } = render(<Header />);
    const button = getByText(/Adicionar/i);
    expect(button).toBeInTheDocument();
  });
});

describe("Criação de tarefas", () => {
  test("Testa se os value estão correspondente ao digitado e selecionado pelo usuário", async () => {
    axios.post = jest.fn().mockResolvedValue({
      data: [
        {
          text: "Tarefa Teste",
          day: "Segunda-Feira",
        },
      ],
    });

    const { getByPlaceholderText, getByText, getByLabelText } = render(
      <Header />
    );

    const input = getByPlaceholderText(/Adicione aqui sua tarefa/i);
    await userEvent.type(input, "Tarefa Teste");
    await expect(input).toHaveValue("Tarefa Teste");

    const select = getByLabelText(/Dia da Semana/i);
    userEvent.selectOptions(select, "Segunda-Feira");
    await expect(select).toHaveValue("Segunda-Feira");

    const button = getByText(/Adicionar/i);
    userEvent.click(button);

    expect(axios.post).toHaveBeenCalledWith(
      "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-lourenco",
      {
        text: "Tarefa Teste",
        day: "Segunda-Feira",
      }
    );

    // await expect(input).toHaveValue("");
    await wait(() => expect(input).toHaveValue(""));
  });
});
