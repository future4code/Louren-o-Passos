import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useForm from "../hooks/useForm";
import useTripList from "../hooks/useTripList";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 40px 0 0 20px;
`;

const ImageContainer = styled.div`
  width: 50vw;
  background-color: black;
`;

const ApplicationFormPageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const FormInput = styled.input`
  width: 50%;
`;

const FormSelect = styled.select`
  width: 50%;
`;

const FormSendButton = styled.button`
  width: 50%;
  margin-top: 10px;
`;
function ApplicationFormPage(props) {
  const history = useHistory();

  const trips = useTripList();
  console.log(trips);

  return (
    <ApplicationFormPageContainer>
      <FormContainer>
        <h1>Formulário de inscrição</h1>
        <p>Nome Completo</p>
        <FormInput />
        <p>Profissão</p>
        <FormInput />
        <p>Idade</p>
        <FormInput type="date" min="2002-01-01" />
        <p>País</p>
        <FormInput />
        <p>Por que devo ser selecionado?</p>
        <FormInput />
        <p>Viagem que estou interessado</p>
        <FormSelect>
          {trips &&
            trips.map((trip) => {
              return (
                <option value={}>
                  {trip.name} - {trip.planet}
                </option>
              );
            })}
        </FormSelect>
        <FormSendButton>Enviar formulário</FormSendButton>
      </FormContainer>
      <ImageContainer>
        <div></div>
      </ImageContainer>
    </ApplicationFormPageContainer>
  );
}

export default ApplicationFormPage;
