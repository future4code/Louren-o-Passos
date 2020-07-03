import styled from "styled-components";

export const ScheduleContainer = styled.div`
  width: 100vw;
  height: 90vh;
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-columns: repeat(7, 3fr);
  justify-content: space-around;
  margin: 30px 50px;
  height: 40vh;
`;

export const GridHeader = styled.p`
  padding: 10px 20px;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

export const GridLine = styled.div`
  border: 1px solid black;
`;

export const GridHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TaskNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const Task = styled.p`
  margin-left: 10px;
`;
