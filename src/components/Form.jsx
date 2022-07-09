import React from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log("onSubmit:", data);
  console.log("watch:", watch("example")); // watchは引数に渡した名前の入力値を監視する
  return (
    /* handleSubmitはフォームの入力を確かめたうえで、引数に渡した関数(onSubmit)を呼び出す */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register関数の呼び出しにより、フォーム入力の要素を引数の名前で登録する */}
      <label>
        OshiName
        <input defaultValue="test" {...register("example")} />
      </label>
      <br></br>
      <label>
        FirstDate
        <input type="date" {...register("firstDate", { valueAsDate: true })} />
        {/* 始めの日付 */}
      </label>
      <br></br>
      <label>
        LastDate
        <input type="date" {...register("lastDate", { valueAsDate: true })} />
        {/* 終わりの日付 */}
      </label>
      <br></br>
      <input type="submit" />
    </form>
  );
};
