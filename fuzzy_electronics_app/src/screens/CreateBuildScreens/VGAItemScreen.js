import styles from './VGAItemScreen.module.css';
import Header from '../../components/perms/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBuilding, FaShekelSign } from 'react-icons/fa';
import { useBuild } from '../../components/Contexts/BuildContext';

const VGAItemScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {addVGA} = useBuild();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(location.state.product);
    }, [])

    const addToBuildHandler = () => {
        addVGA(            {
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
                    {product.chipset && <label className={styles.label}>chipset: {product.chipset}</label>}
                    {product.memory && <label className={styles.label}>memory: {product.memory}</label>}
                    {product.powerConnector && <label className={styles.label}>powerConnector: {product.powerConnector}</label>}
                    {product.powerReq && <label className={styles.label}>powerReq: {product.powerReq}</label>}
                    {product.lengthMm && <label className={styles.label}>lengthMm: {product.lengthMm}</label>}
                    <label className={styles.label}>Price: {product.price} <FaShekelSign /></label>
                </div>
            </div>}
        </>
    )
}

export default VGAItemScreen;