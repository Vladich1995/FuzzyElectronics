import styles from './ItemScreenStyles.module.css';
import Header from '../../components/perms/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBuilding, FaShekelSign } from 'react-icons/fa';
import { useBuild } from '../../components/Contexts/BuildContext';
import { useCustomerBuild } from '../../components/Contexts/CustomerBuildContext';

const MemoryItemScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {addMemory} = useBuild();
    const {addCustomerMemory} = useCustomerBuild();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(location.state.product);
    }, [])

    const addToBuildHandler = () => {
        if(location.state.forCustomer == null){
            addMemory(            {
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
        else{
            addCustomerMemory(            {
                collectionName: product.collectionName,
                makatMorLevi: product.makatMorLevi,
                description: product.description,
                price: product.price,
                category: product.category,
                brand: product.brand,
                model: product.model,
                pictureURL: product.pictureURL
            });
            navigate('/selfBuild');
        }
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
                    {product.kind && <label className={styles.label}>kind: {product.kind}</label>}
                    {product.size && <label className={styles.label}>size: {product.size}</label>}
                    {product.speed && <label className={styles.label}>speed: {product.speed}</label>}
                    <label className={styles.label}>Price: {product.price} <FaShekelSign /></label>
                </div>
            </div>}
        </>
    )
}

export default MemoryItemScreen;