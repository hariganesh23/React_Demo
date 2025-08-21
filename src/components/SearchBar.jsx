import React, { useState } from "react";

function SearchBar (props) {
  const [query, setQuery] = useState("");
  

  const filteredItems = props.items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    props.setSearched(e.target.value.length > 0);
  }

  return (
    <div className="flex flex-col items-center p-6">
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => handleSearch(e) }
        className="border rounded-lg px-4 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <ul className="mt-4 w-64 border rounded-lg shadow-sm bg-white divide-y">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
              {item}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500 italic">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;