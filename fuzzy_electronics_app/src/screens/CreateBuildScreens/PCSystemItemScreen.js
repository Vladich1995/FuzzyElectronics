import styles from './ItemScreenStyles.module.css';
import Header from '../../components/perms/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBuilding, FaShekelSign } from 'react-icons/fa';
import { useBuild } from '../../components/Contexts/BuildContext';
import { useCustomerBuild } from '../../components/Contexts/CustomerBuildContext';

const PCSystemItemScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {addPCSystem} = useBuild();
    const {addCustomerPCSystem} = useCustomerBuild();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(location.state.product);
    }, [])

    const addToBuildHandler = () => {
        if(location.state.forCustomer == null){
            addPCSystem(            {
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
            addCustomerPCSystem(            {
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
                    {product.model && <label className={styles.label}>Model: {product.model}</label>}
                    <label className={styles.label}>description: {product.description}</label>
                    {product.mb && <label className={styles.label}>mb: {product.mb}</label>}
                    {product.cpu && <label className={styles.label}>cpu: {product.cpu}</label>}
                    {product.hdd && <label className={styles.label}>hdd: {product.hdd}</label>}
                    {product.ddr && <label className={styles.label}>ddr: {product.ddr}</label>}
                    {product.ram && <label className={styles.label}>ram: {product.ram}</label>}
                    {product.graphic && <label className={styles.label}>graphic: {product.graphic}</label>}
                    {product.case_PSU && <label className={styles.label}>case_PSU: {product.case_PSU}</label>}
                    {product.remark && <label className={styles.label}>remark: {product.remark}</label>}
                    <label className={styles.label}>Price: {product.price} <FaShekelSign /></label>
                </div>
            </div>}
        </>
    )
}

export default PCSystemItemScreen;