import styles from './CasesItem.module.css';
import { FaShekelSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CasesItem = (props) => {
    const navigate = useNavigate();
    const itemSelectHandler = () => {
        navigate('/casesbuild', { state: { product: props.product, forCustomer: props.forCustomer } })
    }

    return (
        <div onClick={itemSelectHandler} className={styles.container}>
            <div className={styles.imageArea}>
                <img className={styles.image} src={props.product.pictureURL} />
            </div>
            <div className={styles.labelsArea}>
                <label className={styles.bold}>{props.product.brand}</label>
                <label >{props.product.description}</label>
                <label className={styles.bold}>{props.product.price} <FaShekelSign /></label>
            </div>
        </div>
    );
}

export default CasesItem;