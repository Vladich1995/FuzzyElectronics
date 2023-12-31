import styles from './OnSaleItem.module.css';
import { FaShekelSign } from 'react-icons/fa';

const OnSaleItem = (props) => {

    const selectHandler = () => {
        props.onSelect(props.product);
    }

    return (
        <div className={styles.container} onClick={selectHandler}>
            <div className={styles.imageArea}>
                <img className={styles.image} src={props.product.pictureURL} />
            </div>
            <div className={styles.labelsArea}>
                <label className={styles.brand}>{props.product.brand}</label>
                <label className={styles.brand}>{props.product.model}</label>
                <label className={styles.price}>{props.product.price} <FaShekelSign /></label>
                {/* <label className={styles.sale}>{props.product.isOnSale}</label> */}
            </div>
        </div>
    );
}

export default OnSaleItem;