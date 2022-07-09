import React from "react";
import styled from "styled-components";
import { getTest } from "../apis/getTest";
import { getSearch } from "../apis/getSearch";

const test = async () => {
  try {
    const res = await getTest();
    console.log(res);
  } catch (e) {
    console.error("Error: ", e);
  }
};

const search = async () => {
  try {
    const res = await getSearch("(apple OR iphone) ipad");
    console.log(res);
  } catch (e) {
    console.error("Error: ", e);
  }
};

test();
search();

/*const redirectToTwitter = () => {*/
  /*window.location.href = "https://twitter.com/ " + "{props.arg1}";*/


export const Result = (props) => {
  return(
    <div style={{'height':'45em','background-color': '#00FF00'}}>
      <h1>Result</h1>
      <Title>あなたの推しツイートした回数は</Title>
      <Count>{props.count}回</Count>
      <img src={props.img}></img>
      <Name>{props.name}さん<br/>
      @{props.id}</Name>
      <User>by{props.user}さん @{props.userid}</User>
    </div>
  )
}

const Count = styled.h1`
  font-size: 5em;
  text-align: center;
  padding:-top: 0.5em;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  padding-top: 0.3em;
`;

const Name = styled.h2`
  text-align:center;
  font-size: 2em;
  padding-top:0.9em;
`;


const User = styled.h2`
  letter-spacing:0.1em;
  float:right;
  font-size: 1.5em;
  padding:2em 0em 0em 0em;

`

export default Result;
