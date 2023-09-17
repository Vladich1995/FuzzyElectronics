import styles from './ItemScreenStyles.module.css';
import Header from '../../components/perms/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBuilding, FaShekelSign } from 'react-icons/fa';
import { useBuild } from '../../components/Contexts/BuildContext';

const CasesItemScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {addCase} = useBuild();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(location.state.product);
    }, [])

    const addToBuildHandler = () => {
        addCase(            {
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
                    {product.psu && <label className={styles.label}>PSU: {product.psu}</label>}
                    {product.mB_Type_Support && <label className={styles.label}>mB_Type_Support: {product.mB_Type_Support}</label>}
                    {product.drive_Bays && <label className={styles.label}>drive_Bays: {product.drive_Bays}</label>}
                    {product.connections && <label className={styles.label}>connections: {product.connections}</label>}
                    {product.size_mm && <label className={styles.label}>size_mm: {product.size_mm}</label>}
                    {product.watter_Coling_Size && <label className={styles.label}>watter_Coling_Size: {product.watter_Coling_Size}</label>}
                    {product.cpU_Cooler_Height_mm && <label className={styles.label}>cpU_Cooler_Height_mm: {product.cpU_Cooler_Height_mm}</label>}
                    <label className={styles.label}>Price: {product.price} <FaShekelSign /></label>
                </div>
            </div>}
        </>
    )
}

export default CasesItemScreen;