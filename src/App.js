import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  reduceCounter,
  resetCounter
} from "./redux/actions/counterActions";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <h1 style={{ color: "black" }}>{counter}</h1>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(reduceCounter())}>Decrement</button>
      <button onClick={() => dispatch(resetCounter())}>reset</button>
    </div>
  );
}
