import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  addWorkOrder,
  fetchWorkOrderData,
} from "./features/workOrder/workOrderSlice";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  const {
    workOrder: { loading, workOrderData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(fetchWorkOrderData());
    })();
  }, []);

  useEffect(() => {
    console.log("state", workOrderData);
  }, [loading]);

  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
