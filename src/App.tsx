//import { useState } from "react";
import "./index.css";
import { Container } from "./components/container";
import Homepage from "./app/presentation/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./app/presentation/dashboard/dashboard";
//import Products from "./app/presentation/dashboard/products";
function App() {
  //const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Homepage />
            </Container>
          }
        />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
