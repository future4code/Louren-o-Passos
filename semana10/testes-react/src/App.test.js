import React from "react";
import {
  render,
  fireEvent,
  getByPlaceholderText,
  queryByText,
  wait,
} from "@testing-library/react";
import App from "./App";

test("Ao clicar no botão,deve adicionar um post, independente do seu conteudo", () => {
  const { getByText } = render(<App />);

  const botaoAdicionar = getByText(/Adicionar/);

  fireEvent.click(botaoAdicionar);

  const botaoCurtir = getByText(/Curtir/);

  expect(botaoCurtir).toBeInTheDocument();
});

test("O valor input digitado deve virar um post após clicar no botão de Adicionar", () => {
  const { getByPlaceholderText, getByText } = render(<App />);

  const input = getByPlaceholderText("Novo post");

  fireEvent.change(input, {
    target: {
      value: "teste",
    },
  });
  expect(input).toHaveValue("teste");
});

test("Ao clicar no botão,deve adicionar um post e ao fazer isso, ser possível curtir", () => {
  const { getByText } = render(<App />);

  const botaoAdicionar = getByText(/Adicionar/);

  fireEvent.click(botaoAdicionar);

  const botaoCurtir = getByText(/Curtir/);
  fireEvent.click(botaoCurtir);

  const botaoDescurtir = getByText(/Descurtir/);

  expect(botaoDescurtir).toBeInTheDocument();
});

test("Deve ser possível deletar um post criado através do Botão de 'apagar'", async () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<App />);

  const input = getByPlaceholderText(/Novo post/i);

  fireEvent.change(input, {
    target: {
      value: "Me delete",
    },
  });
  const botaoAdicionar = getByText(/Adicionar/i);
  fireEvent.click(botaoAdicionar);
  const botaoDeletar = getByText(/Apagar/i);
  fireEvent.click(botaoDeletar);

  await wait(() => {
    expect(queryByText("Me delete")).not.toBeInTheDocument();
  });
});

test("Ao enviar um novo post, deve limpar o campo input", () => {
  const { getByPlaceholderText, getByText } = render(<App />);

  const input = getByPlaceholderText("Novo post");

  fireEvent.change(input, {
    target: {
      value: "teste",
    },
  });
  const botaoAdicionar = getByText(/Adicionar/i);
  fireEvent.click(botaoAdicionar);
  expect(input).not.toHaveValue("teste");
});

test("Se a lista de posts, estiver zerada, mostrar uma mensagem avisando", () => {
    const {  getByText } = render(<App />);
  
    const mensagem = getByText(/Não há posts/);
    expect 
  
    fireEvent.change(input, {
      target: {
        value: "teste",
      },
    });
    const botaoAdicionar = getByText(/Adicionar/);
    fireEvent.click(botaoAdicionar);
    expect(input).not.toHaveValue("teste");
  });
