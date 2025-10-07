//import { useState } from "react";
import "./index.css";
import { Container } from "./components/container";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Container>
      <h1 className="text-3xl font-bold underline text-black bg-red-500">
        Hello world!
      </h1>
    </Container>
  );
}

export default App;
