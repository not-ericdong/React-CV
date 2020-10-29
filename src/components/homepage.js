import React, {useState} from "react";

const App = () => {
   const [count, setCount] = useState(0);

   const incremntCount = () => {
      setCount(count +1);
   };
   
   return (
      <div>
         <div>{count}</div>
         <button onClick={incremntCount}>Increment</button>
      </div>
   );
}

export default App;

