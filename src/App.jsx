import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./layout/Main";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ExpensesPage from "./pages/ExpensesPage";
import BudgetPage from "./pages/BudgetPage";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/budget/:id" element={<BudgetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </>;
}

export default App;