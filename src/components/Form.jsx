import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("onSubmit:", data);
  console.log("watch:", watch("example")); // watchは引数に渡した名前の入力値を監視する
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
      <div style={{'height':'15em','background-color': '#00FF00', 'font-family': 'ＭＳ ゴシック'}} align='center'>
        <br></br>
        推しの名前　
        <br></br>
        <input defaultValue=""　placeholder="木村　拓也" {...register("oshiName")} />
        <br></br>
        <br></br>
        検索期間
        <br></br>
        <table> 
          <tr>
            <th align='left'>from:</th>
            <th><input type="date" {...register("firstDate", { valueAsDate: true })} /></th>
            {/* 始めの日付 */}
          </tr>
          <tr></tr>
          <tr>
            <th align='left'>to:</th>
            <th><input type="date"　id='today' {...register("lastDate", { valueAsDate: true })} /></th>
            {/* 終わりの日付 */}
          </tr>
          <br></br>
          <br></br>
        </table>
        <input type="submit" />
      </div>
    </form>
  );
};