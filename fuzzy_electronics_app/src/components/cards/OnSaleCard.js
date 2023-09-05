import styles from './OnSaleCard.module.css'

const OnSaleCard = (props) => {

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
                <label>Sale: {props.product.isOnSale}</label>
            </div>
        </div>
    );
}

export default OnSaleCard;