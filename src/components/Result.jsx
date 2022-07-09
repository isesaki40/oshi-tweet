import { getQueriesForElement } from "@testing-library/react";
import React from "react";
import styled from 'styled-components';

export const Result = () => {
  let oshi_count = 10;
  return(
    <div style={{'height':'60em','background-color': '#00FF00'}}>
      <h1>Result</h1>
      <Title>あなたの推しツイートした回数は</Title>
        <Count>{oshi_count}回</Count>
    </div>
  ) 
}

const Count = styled.h1`
  font-size:5em;
  text-align:center;
  padding:-top:0.5em;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  padding-top:0.3em;
`;
