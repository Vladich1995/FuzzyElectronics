import styles from './ItemScreenStyles.module.css';
import Header from '../../components/perms/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBuilding, FaShekelSign } from 'react-icons/fa';
import { useBuild } from '../../components/Contexts/BuildContext';
import { useCustomerBuild } from '../../components/Contexts/CustomerBuildContext';

const MBItemScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {addMB} = useBuild();
    const {addCustomerMB} = useCustomerBuild();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(location.state.product);
    }, [])

    const addToBuildHandler = () => {
        if(location.state.forCustomer == null){
            addMB(            {
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
        else {
            addCustomerMB(            {
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
                    {product.chipset && <label className={styles.label}>chipset: {product.chipset}</label>}
                    {product.ddR5 && <label className={styles.label}>ddR5: {product.ddR5}</label>}
                    {product.ddR4 && <label className={styles.label}>ddR4: {product.ddR4}</label>}
                    {product.size && <label className={styles.label}>size: {product.size}</label>}
                    {product.remark && <label className={styles.label}>remark: {product.remark}</label>}
                    <label className={styles.label}>Price: {product.price} <FaShekelSign /></label>
                </div>
            </div>}
        </>
    )
}

export default MBItemScreen;