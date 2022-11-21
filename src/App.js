import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./store/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, Unsubscribe } from "firebase/auth";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch( { type: "SET_USER", payload: authUser });
      } else {
        dispatch({ type: "SET_USER", payload: null });
      }
    });

    return () =>{
      unsubscribe()
    }
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
