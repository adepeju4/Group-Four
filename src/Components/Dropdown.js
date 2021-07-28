import styles from "../stylesheets/dropdown.module.css"

const DropDownFilter = () => {
  const CATEGORIES = ["protein", "carbohydrates", "soups", "barbeque"];
//   let params = {
//     param1: "category",
//     param2: "",
//   };
// let query = Object.keys(params)
//   .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
//   .join("&");
  return (
    <div className={styles.select}>
      <select name="slct" id="slct">
        <option selected disabled>
          Sort By
        </option>

        {CATEGORIES.map((categ) => (
          <option value={categ} key={categ}>
            {categ}
          </option>
        ))}
      </select>
    </div>
  );
}
 
export default DropDownFilter;