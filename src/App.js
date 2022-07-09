import "./App.css";
import { Form } from "./components/Form";
import { Result } from "./components/Result";
import image from  "./components/image/test.png";

function App() {
  return (
    <div>
      <Form />
      <Result
        count={4}
        img={image}
        name={`ほげ`}
        id={'hogehoge'}
        user={'ふが'}
        userid={'hugahuga'}
      />
    </div>
  );
}

export default App;