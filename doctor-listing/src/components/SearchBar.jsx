import React, { useState } from "react";

const SearchBar = ({ doctors, setFilteredDoctors }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Ensure doctors is not undefined or empty
    if (!doctors || doctors.length === 0) {
      console.warn("Doctors data is unavailable or empty.");
      return;
    }

    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for doctors"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
