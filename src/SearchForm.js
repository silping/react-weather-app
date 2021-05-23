import React from "react";

export default function SearchForm() {
  return (
    <form className="SearchForm">
      <input type="search" placeholder="Enter city"></input>
      <input type="submit" value="search"></input>
    </form>
  );
}
