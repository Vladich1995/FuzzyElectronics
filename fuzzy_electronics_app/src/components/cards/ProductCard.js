import styles from './ProductCard.module.css';

const ProductCard = (props) => {

    const cardSelectHandler = () => {
        props.onSelect(props.product);
    }

    return (
        <div className={styles.card} onClick={cardSelectHandler}>
            <div className={styles.imageArea}>
                <img src={props.product.pictureURL} alt="Product image" />
            </div>
            <div className={styles.summaryArea}>
                <label>{props.product.brand}</label>
                <label>Price: {props.product.price}</label>
                {isNotBlank(props.product.isOnSale) && <label>Sale: {props.product.isOnSale}</label>}
            </div>
        </div>
    );
}

function isNotBlank(str) {
    // Check if the input is not null or undefined
    if (str === null || str === undefined) {
        return false;
    }

    // Trim the string to remove leading and trailing spaces
    const trimmedStr = str.trim();

    // Check if the trimmed string is empty
    if (trimmedStr.length === 0) {
        return false;
    }

    return true;
}

export default ProductCard;