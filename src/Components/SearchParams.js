/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../stylesheets/searchParams.module.css";

export const DropdownFilter = () => {
  const CATEGORIES = ["seafood", "most ordered meals", "swallows"];
  // const [dishes, setDishes] = useState("");
  const [category, setCategory] = useState([]);
  return (
    <div className={styles.dropDownForm}>
      <form>
        <select
          name="category"
          className={styles.selectInput}
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onBlur={(e) => setCategory(e.target.value)}
        >
          <option> Sort by</option>
          {CATEGORIES.map((categ) => (
            <option value={categ} key={categ}>
              {categ}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export const Search = ({ filterDishes }) => {
  return (
    <form>
      <input
        type="search"
        name="dishes"
        id={styles.dishes}
        placeholder="Search"
        onChange={filterDishes}
        className={styles.searchInput}
      />
    </form>
  );
};
