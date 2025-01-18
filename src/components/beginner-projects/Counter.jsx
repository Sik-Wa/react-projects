import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return <div className=" my-52 flex items-center justify-center  ">
<section className="bg-blue-500 border rounded-md  w-[60px] h-[60px] m-5"   >
    <h1 className=" text-center text-lg font-bold ">{count}</h1>
    <div className=" flex items-center justify-center  gap-5">
   
    <button className=" text-3xl font-bold" onClick={decrement}>-</button>
    <button className=" text-3xl font-bold" onClick={increment}>+</button>
    </div>

</section>
  </div>;
};

export default Counter;
