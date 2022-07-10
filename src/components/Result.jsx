import React from "react";
import styled from "styled-components";
// import { getTest } from "../apis/getTest";

// const test = async () => {
//   try {
//     const res = await getTest();
//     console.log(res);
//   } catch (e) {
//     console.error("Error: ", e);
//   }
// };

// test();

/*const redirectToTwitter = () => {*/
/*window.location.href = "https://twitter.com/ " + "{props.arg1}";*/

export const Result = (props) => {
  const countHund = Math.floor(props.count / 100);
  const countSrpl = props.count % 100;
  return (
    <div class="bkcolor">
      <div class="inline-block_test">
        <div className="Headline">
          <div class="title">あなたの推しツイートした回数は</div>
        </div>
      </div>

      <div class="inline-block_test">
        <div className="Headline">
          <div class="countplt">{props.data.count}回 </div>
        </div>
      </div>

      <div></div>

      <div className="inline-block_id">
        <div class="imgplt">
          <div className="Headline">
            <img src={props.data.img} className="example1"></img>
          </div>
        </div>
      </div>

      <div className="inline-block_coin">
        {/* <div class="flexbox flexbox-right"> */}
        <div class="box flipLeft1">
          <ImgFirst img={props.data.img} />
          <p class="text100">100</p>
        </div>
        <div class="box flipLeft5">
          <ImgCut img={props.data.img} />
          <p class="text100">500</p>
        </div>
        <div class="box flipLeft9">
          <ImgLast img={props.data.img} />
          <p class="text100">900</p>
        </div>
      </div>

      <div className="inline-block_coin_second">
        {/* <div class="flexbox flexbox-right"> */}
        <div class="box flipLeft2">
          <ImgFirst img={props.data.img} />
          <p class="text100">200</p>
        </div>
        <div class="box flipLeft6">
          <ImgCut img={props.data.img} />
          <p class="text100">600</p>
        </div>
        <div class="box flipLeft10">
          <ImgLast img={props.data.img} />
          <p class="text1000">1000</p>
        </div>
      </div>

      <div className="inline-block_coin_second">
        {/* <div class="flexbox flexbox-right"> */}
        <div class="box flipLeft3">
          <ImgFirst img={props.data.img} />
          <p class="text100">300</p>
        </div>
        <div class="box flipLeft7">
          <ImgCut img={props.data.img} />
          <p class="text100">700</p>
        </div>
        <div class="box flipLeft11">
          <ImgLast img={props.data.img} />
          <p class="text1000">1050</p>
        </div>
      </div>

      <div className="inline-block_coin_second">
        {/* <div class="flexbox flexbox-right"> */}
        <div class="box flipLeft4">
          <ImgFirst img={props.data.img} />
          <p class="text100">400</p>
        </div>
        <div class="box flipLeft8">
          <ImgCut img={props.data.img} />
          <p class="text100">800</p>
        </div>
        {/* <div class="box flipLeft11"><div className="image_cut_last"></div> */}

        {/* </div> */}
      </div>

      <div></div>

      <div className="Headline">
        <div className="idplt">
          {props.data.oshiName}さん
          <br />@{props.data.id}
        </div>
      </div>

      <div class="kiyword">
        検索推しワード：
        {props.data.keys.map((key) => (
          <p>{key}</p>
        ))}
      </div>

      <div class="ajs">
        <div className="inline-block_btn">
          <a href="" class="btn btn--orange btn--radius ">
            前のページへ
          </a>
        </div>

        <div className="inline-block_by">
          <div className="idplt_by">
            by{props.data.user}さん @{props.data.userId}
          </div>
        </div>
      </div>
    </div>
  );
};

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${(props) => (props.primary ? "palevioletred" : "white")};
//   color: ${(props) => (props.primary ? "white" : "palevioletred")};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// const Count = styled.h1`
//   font-size: 5em;
//   text-align: center;
//   padding:-top: 0.5em;
// `;

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   padding-top: 0.3em;
// `;

// const Name = styled.h2`
//   text-align: center;
//   font-size: 2em;
//   padding-top: 0.9em;
// `;

// const User = styled.h2`
//   letter-spacing: 0.1em;
//   float: right;
//   font-size: 1.5em;
//   padding: 2em 0em 0em 0em;
// `;

const ImgCut = styled.div`
  width: 150px;
  height: 150px;
  /* padding: 5px; */
  border-radius: 50%;
  margin-right: 1px;
  margin-left: 2px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-position: center;
  ${(props) => `background-image: url(${props.img})`};
`;

const ImgFirst = styled.div`
  width: 150px;
  height: 150px;
  /* padding: 5px; */
  border-radius: 50%;
  margin-right: 1px;
  margin-left: 4px;
  margin-top: 40px;
  margin-bottom: 20px;
  background-position: center;
  ${(props) => `background-image: url(${props.img})`};
`;

const ImgLast = styled.div`
  width: 150px;
  height: 150px;
  /* padding: 5px; */
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 3px;
  margin-top: 3px;
  margin-bottom: 1px;
  background-position: center;
  ${(props) => `background-image: url(${props.img})`};
`;

export default Result;
