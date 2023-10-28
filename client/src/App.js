import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShoppingList from "./pages/ShoppingList";

function App() {
  return (
    <Routes>
      <Route path="/shopping-list" element={<ShoppingList />}></Route>/
    </Routes>
  );
}

export default App;
