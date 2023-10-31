import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShoppingList from "./pages/ShoppingList";
import { Categories } from "./pages/Categories/Categories";

function App() {
  return (
    <Routes>
      <Route path="/shopping-list" element={<ShoppingList />}></Route>/
      <Route path="/categories/:categoryName" element={<Categories />} />
    </Routes>
  );
}

export default App;
