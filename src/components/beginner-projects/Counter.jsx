import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return <div className=" flex items-center justify-center  ">
<section className=" container"   >
    <h1 className=" text-center text-lg font-bold ">{count}</h1>
    <div className=" space-x-10">
   
    <button className=" text-3xl font-bold" onClick={decrement}>-</button>
    <button className=" text-3xl font-bold" onClick={increment}>+</button>
    </div>

</section>
  </div>;
};

export default Counter;
