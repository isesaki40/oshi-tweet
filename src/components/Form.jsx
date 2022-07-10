import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getSearchCount } from "../apis/getSearchCount";
import { getImgUrl } from "../apis/getImg";

export const Form = (props) => {
  const { register, handleSubmit, watch } = useForm();

  let navigate = useNavigate();
  const onSubmit = (input) => {
    const searchCount = async (input) => {
      try {
        const count = await getSearchCount(
          `from:${input.userId} ${input.key1} ${input.key2} ${input.key3} ${input.key4} ${input.key5}`
        );
        const img = await getImgUrl(input.oshiId);
        const user = await getImgUrl(input.userId);

        console.log(user);
        // props.handleCountState(count);
        input = {
          ...input,
          count: count.meta.total_tweet_count,
          oshiName: input.oshiName,
          id: input.oshiId,
          img: img.data.profile_image_url,
          keys: [input.key1, input.key2, input.key3, input.key4, input.key5],
          user: user.data.name,
        };
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
          height: "100%",
          "max-width": "100%",
          "max-height":"100%",
          "background-color": "white",
          "font-family": "ＭＳ ゴシック",
          "background-color": "rgba(192, 251, 255, 0.26)",
          "display":"flex",
          "flex-direction":"column",
          "justify-content":"center",
          "align-items":"center",
        }}
        align="center"
      >
        <div
          style={{
          height: "600px",
          width: "500px",
          "border": "0.2em solid #6eaef4",
          "background-color": "#9DCEEA",
          "opcity":"0.26",
          "border-radius":"0.6em",
          "margin-top":"30px",
        }}>
          <p style={{"margin-top":"10px","font-size":"20px",}}>推し活度をチェックする</p>
          <div style={{"padding-left":"40px","display":"flex","justify-content":"space-around",}}>
            <div style={{"margin":"10px", "padding-bottom":"10px","font-size":"20px","font-weight":"400","line-height":"1.4","flex-direction":"column",}}>
              <p style={{"padding-top":"8px",}}>UserID</p>
              <p style={{"padding-top":"6px",}}>OshiID</p>
              <p style={{"padding-top":"4px",}}>OshiName</p>
              <p style={{"padding-top":"2px",}}>Key1</p>
              <p style={{"padding-top":"0px",}}>Key2</p>
              <p style={{"padding-top":"2px",}}>Key3</p>
              <p style={{"padding-top":"2px",}}>Key4</p>
              <p style={{"padding-top":"2px",}}>Key5</p>

            </div>
            <div style={{"display":"flex","flex-direction":"column","flex-wrap":"nowrap","margin-top":"20px","width":"270px",}}>
              <input defaultValue="" placeholder="@watashihoge" {...register("userId")} style={{"border":"1px solid #EEEEEE","border-radius":"4px","height":"50px","margin-top":"2px",}}/>
              <input defaultValue="" placeholder="@Oshihoge" {...register("oshiId")} style={{"border":"1px solid #EEEEEE","border-radius":"4px","height":"50px","margin-top":"2px",}}/>
              <input defaultValue="" placeholder="oshihuge" {...register("oshiName")} style={{"border":"1px solid #EEEEEE","border-radius":"4px","height":"50px","margin-top":"2px",}}/>
              <input defaultValue="" placeholder="hoge1" {...register("key1")} style={{"border":"1px solid #EEEEEE","border-radius":"4px","height":"50px","margin-top":"2px",}}/>
              <input defaultValue="" placeholder="hoge2" {...register("key2")} style={{"border":"1px solid #EEEEEE","border-radius":"4px","height":"50px","margin-top":"2px",}}/>
              <input defaultValue="" placeholder="hoge3" {...register("key3")} style={{"border":"1px solid #EEEEEE","border-radius":"4px","height":"50px","margin-top":"2px",}}/>
              <input defaultValue="" placeholder="hoge4" {...register("key4")} style={{"border":"1px solid #EEEEEE","border-radius":"4px","height":"50px","margin-top":"2px",}}/>
              <input defaultValue="" placeholder="hoge5" {...register("key5")} style={{"border":"1px solid #EEEEEE","border-radius":"4px","height":"50px","margin-top":"2px",}}/>
            </div>
          </div>
          <input type="submit" value="check" style={{
            "height":"30px",
            "width":"160px",
            "margin-top":"30px",
            "color": "white",
            "display": "flex",
            "background-color":"blue",
            "justify-content": "center",
            "position": "relative",
            "border-radius":"0.3em",
            }}
          />
        </div>
      </div>
    </form>
  );
};