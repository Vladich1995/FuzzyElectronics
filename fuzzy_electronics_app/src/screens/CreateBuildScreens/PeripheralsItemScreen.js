import styles from './PeripheralsItemScreen.module.css';
import Header from '../../components/perms/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBuilding, FaShekelSign } from 'react-icons/fa';
import { useBuild } from '../../components/Contexts/BuildContext';

const PeripheralsItemScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {addPeripherals} = useBuild();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(location.state.product);
    }, [])

    const addToBuildHandler = () => {
        addPeripherals(            {
            CollectionName: product.collectionName,
            MakatMorLevi: product.makatMorLevi,
            Description: product.description,
            Price: product.price,
            Category: product.category,
            Brand: product.brand,
            Model: product.model,
            PictureURL: product.pictureURL
        });
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
                    {product.interface && <label className={styles.label}>interface: {product.interface}</label>}
                    {product.type && <label className={styles.label}>type: {product.type}</label>}
                    {product.remark && <label className={styles.label}>remark: {product.remark}</label>}
                    <label className={styles.label}>Price: {product.price} <FaShekelSign /></label>
                </div>
            </div>}
        </>
    )
}

export default PeripheralsItemScreen;