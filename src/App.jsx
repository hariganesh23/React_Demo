import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import FruitList from "./components/FruitList";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./reduxStore/counterStore";


const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

const App = () => {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  const [searched, setSearched] = useState(false);

  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold">Fruit Search</h1>
      <SearchBar items={items}
      setSearched={setSearched} />
       {console.log("searched -- ", searched)}
      {searched ? <FruitList items={items} /> 
      : <div className="text-center text-gray-500">Please search for fruits</div> }
{/* 
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div> */}
    </div>
  );
};

export default App;