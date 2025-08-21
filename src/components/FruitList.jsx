// SampleDropdown.jsx
import React, { useState } from "react";


function FruitList(props) {
const [selected, setSelected] = useState("");
const options= props.items
console.log(" options -- ", options)

  return (
    <div className="flex flex-col items-center p-6">
      <label htmlFor="fruit-dropdown" className="mb-2 font-semibold">
        Select a fruit:
      </label>
      <select
        id="fruit-dropdown"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="border rounded-lg px-4 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value=""> Choose a fruit </option>
        {options.map((fruit) => (
          <option key={fruit} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
 {selected ? (
        <div className="mt-4 text-green-700 font-medium">
          You selected: {selected}
        </div>
      ) : <div className="mt-4 text-green-700 font-medium">
          You selected: NA
        </div> }
    </div>
  );
}

export default FruitList;