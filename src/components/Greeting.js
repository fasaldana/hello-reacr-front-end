import { useSelector } from "react-redux";

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.value);
  return <div>{greeting}</div>;
}

export default Greeting;
