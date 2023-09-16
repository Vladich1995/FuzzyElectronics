import styles from './CapacityItemScreen.module.css';
import Header from '../../components/perms/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBuilding, FaShekelSign } from 'react-icons/fa';
import { useBuild } from '../../components/Contexts/BuildContext';

const CapacityItemScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {addCapacity} = useBuild();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(location.state.product);
    }, [])

    const addToBuildHandler = () => {
        addCapacity(
            {
                CollectionName: product.collectionName,
                MakatMorLevi: product.makatMorLevi,
                Description: product.description,
                Price: product.price,
                Category: product.category,
                Brand: product.brand,
                Model: product.model,
                PictureURL: product.pictureURL
            }
        );
        navigate('/createbuild');
    }

    return (
        <>
            <Header />
            {product != null && <div className={styles.container}>
                <div className={styles.imageArea}>
                    <img className={styles.image} src={product.pictureURL} />
                    <div className={styles.buttonArea}><button type="button" onClick={addToBuildHandler}>Add to Build <FaBuilding /></button></div>
                </div>
                <div className={styles.labelsArea}>
                    <label className={styles.label}>Brand: {product.brand}</label>
                    <label className={styles.label}>Model: {product.model}</label>
                    <label className={styles.label}>description: {product.description}</label>
                    {product.size && <label className={styles.label}>size: {product.size}</label>}
                    {product.interface && <label className={styles.label}>interface: {product.interface}</label>}
                    {product.remark && <label className={styles.label}>remark: {product.remark}</label>}
                    {product.remark2 && <label className={styles.label}>remark2: {product.remark2}</label>}
                    <label className={styles.label}>Price: {product.price} <FaShekelSign /></label>
                </div>
            </div>}
        </>
    )
}

export default CapacityItemScreen;