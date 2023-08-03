import { useDispatch, useSelector } from "react-redux";
import { SetCounter } from "./SetCounter";
import { decrementAction, incrementAction, setAction } from "./actions";

export const Counter = () => {
	const incident = "Incident";
	const count = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<main className="Counter">
			<h1>Days Since Last {incident}</h1>
			<p className="count">{count}</p>
			<section className="controls">
				<button onClick={() => dispatch(incrementAction())}>Increment</button>
				<button onClick={() => dispatch(setAction(0))}>Reset</button>
				<button onClick={() => dispatch(decrementAction())}>Decrement</button>
			</section>
			<SetCounter />
		</main>
	);
};

export default Counter;
