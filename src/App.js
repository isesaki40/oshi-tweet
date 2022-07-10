import "./App.css";
import { Form } from "./components/Form";
import { Result } from "./components/Result";
import image from "./components/image/test.png";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route
          path="result"
          element={
            <Result
              count={4}
              img={image}
              name={`ほげ`}
              id={"hogehoge"}
              user={"ふが"}
              userid={"hugahuga"}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
