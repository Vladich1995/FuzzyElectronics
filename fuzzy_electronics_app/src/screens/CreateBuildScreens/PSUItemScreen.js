import styles from './PSUItemScreen.module.css';
import Header from '../../components/perms/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBuilding, FaShekelSign } from 'react-icons/fa';
import { useBuild } from '../../components/Contexts/BuildContext';

const PSUItemScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {addPSU} = useBuild();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(location.state.product);
    }, [])

    const addToBuildHandler = () => {
        addPSU(            {
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
                    {product.watt && <label className={styles.label}>watt: {product.watt}</label>}
                    {product.vga && <label className={styles.label}>vga: {product.vga}</label>}
                    {product.atX_8pin && <label className={styles.label}>atX_8pin: {product.atX_8pin}</label>}
                    {product.warranty && <label className={styles.label}>warranty: {product.warranty}</label>}
                    {product._80_Efficiency && <label className={styles.label}>_80_Efficiency: {product._80_Efficiency}</label>}
                    <label className={styles.label}>Price: {product.price} <FaShekelSign /></label>
                </div>
            </div>}
        </>
    )
}

export default PSUItemScreen;