import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being baught`);
  }

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`${styles.button} btn-solid btn-styled theme-info`} onClick={(event) => handleBuyButtonClicked(event)}>Buy</button>
    </li>
  );
};

export default Item;
