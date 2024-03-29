import "./App.css";
import { Form } from "./components/Form";
import { Result } from "./components/Result";
import image from "./components/image/test.png";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const initialState = {
    count: 100,
    img: image,
    oshiName: "ほげ",
    id: "hogehoge",
    user: "ふが",
    userId: "fugafuga",
    keys: ["key1", "key2", "key3", "key4", "key5"],
  };

  const [state, setState] = useState(initialState);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Form
              handleFormState={(data) => {
                setState({
                  ...state,
                  count: data.count,
                  img: data.img,
                  oshiName: data.oshiName,
                  id: data.id,
                  user: data.user,
                  userId: data.userId,
                  keys: data.keys,
                });
              }}
              // handleCountState={(count) => {
              //   setState({
              //     ...state,
              //     count: count.meta.total_tweet_count,
              //     // img: data.img,
              //     // oshiName: data.oshiName,
              //     // id: data.id,
              //     // user: data.user,
              //     // userId: data.userId,
              //   });
              // }}
            />
          }
        />
        <Route path="result" element={<Result data={state} />} />
      </Routes>
    </div>
  );
}

export default App;
