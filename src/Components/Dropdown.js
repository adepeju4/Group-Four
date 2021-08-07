/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../stylesheets/dropdown.module.css";

const DropDownFilter = ({ dishes, category, setCategory }) => {
  const handleFilterChange = (event) => {
    const { value } = event.target;

    setCategory(value);
  };

  return (
    <div className={styles.select}>
      <select
        name="category"
        value={category}
        id="category"
        onChange={handleFilterChange}
      >
        <option value="">Sort By</option>
        <option value="seafood">Seafood</option>
        <option value="vegetables">Vegetables</option>
        <option value="proteins">Proteins</option>
        <option value="pastries">Pastries</option>
      </select>
    </div>
  );
};

export default DropDownFilter;
