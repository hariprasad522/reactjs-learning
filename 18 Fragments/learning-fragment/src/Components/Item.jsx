import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButtonClicked}) => {
  


  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`} aria-current="true">
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`${styles.button} btn-solid btn-styled theme-info`} onClick={handleBuyButtonClicked}>Buy</button>
    </li>
  );
};

export default Item;
