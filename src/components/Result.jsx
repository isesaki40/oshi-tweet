import React from "react";
import styled from "styled-components";
import { getTest } from "../apis/getTest";
import { getSearch } from "../apis/getSearch";
import { useState } from 'react';

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
  const countHund=Math.floor(props.count/100);
  const countSrpl=props.count%100;
  return(
    <div >
      <div class="inline-block_test">
      <div className="Headline"><div class="title">あなたの推しツイートした回数は</div></div>
      </div>
      
      <div class="inline-block_test">
      <div className="Headline"><div class="countplt">
     {props.count}回 </div>
     </div>
       </div>

      <div></div>
      
      <div className="inline-block_id">
      <div class="imgplt">
      <div className="Headline"><img src={props.img} className="example1"></img></div>
      </div>
      </div>
      

      <div className="inline-block_coin">
      {/* <div class="flexbox flexbox-right"> */}
      <div class="box flipLeft1"><div className="image_cut_first"></div></div>
      <div class="box flipLeft5"><div className="image_cut"></div></div>
      <div class="box flipLeft9"><div className="image_cut_last"></div>

       
      </div>
      </div>

      <div className="inline-block_coin_second">
      {/* <div class="flexbox flexbox-right"> */}
      <div class="box flipLeft2"><div className="image_cut_first"></div></div>
      <div class="box flipLeft6"><div className="image_cut"></div></div>
      <div class="box flipLeft10"><div className="image_cut_last"></div>
      

       
      </div>
      </div>

      <div className="inline-block_coin_second">
      {/* <div class="flexbox flexbox-right"> */}
      <div class="box flipLeft3"><div className="image_cut_first" ></div></div>
      <div class="box flipLeft7"><div className="image_cut"></div></div>
      <div class="box flipLeft11"><div className="image_cut_last"></div>

       
      </div>
      </div>

      <div className="inline-block_coin_second">
      {/* <div class="flexbox flexbox-right"> */}
      <div class="box flipLeft4"><div className="image_cut_first" ></div></div>
      <div class="box flipLeft8"><div className="image_cut"></div></div>
      {/* <div class="box flipLeft11"><div className="image_cut_last"></div> */}

       
      {/* </div> */}
      </div>

      

      <div></div>
   
      
   
      <div className="Headline"><div className="idplt"> 
      {props.name}さん<br/>
      @{props.id}
      </div>
      </div>

      <div class="kiyword">検索推しワード：</div>
      

      <div className="inline-block_btn">
      <a href="" class="btn btn--orange btn--radius ">前のページへ</a>

      </div>

      <div className="inline-block_by">
      <div className="idplt_by"> 
      by{props.user}さん @{props.userid}
      </div>

      </div>

      
      

     
      
    </div>
  )
}


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;



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
