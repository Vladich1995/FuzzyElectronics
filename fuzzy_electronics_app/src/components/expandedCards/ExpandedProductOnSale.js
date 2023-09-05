import styles from './ExpandedProductOnSale.module.css';
import { useCart } from '../contexts/CartProvider';
import {useAuth} from '../contexts/AuthProvider';


const ExpandedProductOnSale = (props) => {
    const {addProduct} = useCart();
    const {authUser} = useAuth();

    const closeCardHandler = () => {
        props.onClose();
    }

    const addToCartHandler = () => {
        console.log(props.product)
        addProduct(props.product);
        props.onClose();
    }

    return (
        <div className={styles.container}>
            <label className={styles.exit} onClick={closeCardHandler}>X</label>
            <div className={styles.imageArea}>
                <img className={styles.image} src={props.product.pictureURL} alt="Product image" />
            </div>
            <div className={styles.summaryArea}>
                <label>{props.product.description}</label>
                <label>{props.product.brand}</label>
                <label>{props.product.model}</label>
                <label>Price: {props.product.price}</label>
                <label>Sale: {props.product.isOnSale}</label>
                <div className={`${styles.singleButton}`} >
                    {authUser ?
                    <button className={styles.buttonAdd} type="button" onClick={addToCartHandler}>Add to cart</button>
                    :
                    <label>עליך להתחבר על מנת להוסיף את המוצר לעגלת הקניות</label>}
                </div>
            </div>
        </div>
    );
}

export default ExpandedProductOnSale;