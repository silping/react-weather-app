import React from "react";

export default function SearchForm() {
  return (
    <form className="SearchForm">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter city"
            className="form-control"
          ></input>
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="search"
            className="btn btn-primary"
          ></input>
        </div>
      </div>
    </form>
  );
}
