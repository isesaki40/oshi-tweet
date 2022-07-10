import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getSearchCount } from "../apis/getSearchCount";

export const Form = (props) => {
  const { register, handleSubmit, watch } = useForm();

  let navigate = useNavigate();
  const onSubmit = (input) => {
    const searchCount = async (input) => {
      try {
        const count = await getSearchCount(
          `from:${input.oshiId} ${input.key1}`
        );
        props.handleCountState(count);
        props.handleFormState(input);
        navigate("../result", { replace: true });
      } catch (e) {
        console.error("Error: ", e);
      }
    };
    searchCount(input);
  };
  console.log("watch:", watch("oshiName")); // watchは引数に渡した名前の入力値を監視する
  /*
  var date = new Date();
  var yyyy = date.getFullYear();
  var mm = ("0"+(date.getMonth()+1)).slice(-2);
  var dd = ("0"+date.getDate()).slice(-2);
  document.getElementById("today").value=yyyy+'-'+mm+'-'+dd;
  ここがあると動いたり動かなかったりする
  */
  return (
    /* handleSubmitはフォームの入力を確かめたうえで、引数に渡した関数(onSubmit)を呼び出す */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register関数の呼び出しにより、フォーム入力の要素を引数の名前で登録する */}
      <div
        style={{
          height: "50em",
          "background-color": "white",
          "font-family": "ＭＳ ゴシック",
        }}
        align="center"
      >
        <div
          style={{
          height: "70%",
          width: "30%",
          "border": "0.2em solid #6eaef4",
          "background-color": "#9DCEEA",
          "opcity":"0.26",
          "border-radius":"0.6em",
          "display":"block",
          "margin-top":"auto",
        }}
        align="center"
      >
          <br></br>
          推し活度をチェックする
          <br></br>
          <div style={{"display":"flex","justify-content":"flex-end","margin-right":"100px",}}>
            <p style={{"margin-right":"40px",}}>UserID</p>
            <input defaultValue="" placeholder="@watashihoge" {...register("UserName")} />
          </div>
          <div style={{"display":"flex","justify-content":"flex-end","margin-right":"100px",}}>
            <p style={{"margin-right":"40px",}}>OshiID</p>
            <input defaultValue="" placeholder="@Oshihoge" {...register("oshiId")}/>
          </div>
          <div style={{"display":"flex","justify-content":"flex-end","margin-right":"100px",}}>
            <p style={{"margin-right":"40px",}}>Oshi</p>
            <input defaultValue="" placeholder="oshihuge" {...register("oshiName")} />
          </div>
          <div style={{"display":"flex","justify-content":"flex-end","margin-right":"100px",}}>
           <p style={{"margin-right":"40px",}}>Key1</p>
            <input defaultValue="" placeholder="hoge1" {...register("key1")}/>
          </div>
          <div style={{"display":"flex","justify-content":"flex-end","margin-right":"100px",}}>
            <p style={{"margin-right":"40px",}}>Key2</p>
            <input defaultValue="" placeholder="hoge2" {...register("key2")}/>
          </div>
          <div style={{"display":"flex","justify-content":"flex-end","margin-right":"100px",}}>
            <p style={{"margin-right":"40px",}}>Key3</p>
            <input defaultValue="" placeholder="hoge3" {...register("key3")}/>
          </div>
          <div style={{"display":"flex","justify-content":"flex-end","margin-right":"100px",}}>
            <p style={{"margin-right":"40px",}}>Key4</p>
            <input defaultValue="" placeholder="hoge4" {...register("key4")}/>
          </div>
          <div style={{"display":"flex","justify-content":"flex-end","margin-right":"100px",}}>
            <p style={{"margin-right":"40px",}}>Key5</p>
            <input defaultValue="" placeholder="hoge5" {...register("key5")}/>
          </div>
          <input type="submit" value="check" style={{
            "height":"30px",
            "width":"160px",
            "margin-top":"2em",
            "color": "white",
            "display": "flex",
            "background-color":"blue",
            "justify-content": "center",
            "position": "relative",
            "border-radius":"0.3em",
            }}
          />
          <br></br>
          <br></br>
          検索期間
          <br></br>
          <table>
            <tr>
              <th align="left">from:</th>
              <th>
                <input
                  type="date"
                  {...register("firstDate", { valueAsDate: true })}
                />
              </th>
              {/* 始めの日付 */}
            </tr>
            <tr></tr>
            <tr>
              <th align="left">to:</th>
              <th>
                <input
                  type="date"
                  id="today"
                  {...register("lastDate", { valueAsDate: true })}
                />
              </th>
              {/* 終わりの日付 */}
            </tr>
            <br></br>
            <br></br>
          </table>
        </div>
      </div>
    </form>
  );
};
