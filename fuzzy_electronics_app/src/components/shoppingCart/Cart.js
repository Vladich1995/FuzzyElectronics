import styles from './Cart.module.css';
import { useCart } from '../contexts/CartProvider';
import CartItem from './CartItem';
import {FaWindowClose} from "react-icons/fa";

const Cart = (props) => {
    const {products} = useCart();

    const closeCartHandler = () => {
        props.onClose();
    }
    

    return (
        <div className={styles.container}>
            <div style={{position:'fixed', right:'1vw', cursor:'pointer', zIndex:'1'}} onClick={closeCartHandler}>
                    <FaWindowClose size='2em'/>
            </div>
            <div className={styles.cartContainer}>
            {products.map(item => <CartItem product={item} />)}
            </div>
        </div>
    );
}

export default Cart;