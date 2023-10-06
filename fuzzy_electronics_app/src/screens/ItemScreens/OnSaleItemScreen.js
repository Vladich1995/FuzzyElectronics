import styles from './OnSaleItemScreen.module.css';
import Header from '../../components/perms/Header';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaShoppingCart, FaShekelSign } from 'react-icons/fa';
import { useCart } from '../../components/Contexts/CartContext';
import { useAuth } from '../../components/Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const OnSaleItemScreen = () => {
    const location = useLocation();
    const [product, setProduct] = useState(null);
    const [collection, setCollection] = useState(null);
    const { addProduct } = useCart();
    const { getUser} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setProduct(location.state.product);
        setCollection(location.state.collection);
    }, [])

    const addToCartHandler = () => {
        addProduct(product, "single");
        if(getUser() == null){
            navigate('/');
          }
          else {
            navigate('/home');
          }
    }

    if(collection == 'Cases'){
        return (
            <>
                <Header />
                {product != null && <div className={styles.container}>
                    <div className={styles.imageArea}>
                        <img className={styles.image} src={product.pictureURL} />
                        <div className={styles.buttonArea}><button type="button" onClick={addToCartHandler}>Add to Cart</button></div>
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

    if( collection == 'Capacity'){
        return (
            <>
                <Header />
                {product != null && <div className={styles.container}>
                    <div className={styles.imageArea}>
                        <img className={styles.image} src={product.pictureURL} />
                        <div className={styles.buttonArea}><button type="button" onClick={addToCartHandler}>Add to Cart</button></div>
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

    if( collection == 'MB'){
        return (
            <>
                <Header />
                {product != null && <div className={styles.container}>
                    <div className={styles.imageArea}>
                        <img className={styles.image} src={product.pictureURL} />
                        <div className={styles.buttonArea}><button type="button" onClick={addToCartHandler}>Add to Cart</button></div>
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

    if( collection == 'CPU'){
        return (
            <>
                <Header />
                {product != null && <div className={styles.container}>
                    <div className={styles.imageArea}>
                        <img className={styles.image} src={product.pictureURL} />
                        <div className={styles.buttonArea}><button type="button" onClick={addToCartHandler}>Add to Cart</button></div>
                    </div>
                    <div className={styles.labelsArea}>
                        <label className={styles.label}>Brand: {product.brand}</label>
                        <label className={styles.label}>Model: {product.model}</label>
                        <label className={styles.label}>description: {product.description}</label>
                        {product.coresOrThreads && <label className={styles.label}>coresOrThreads: {product.coresOrThreads}</label>}
                        {product.clock_Sp && <label className={styles.label}>clock_Sp: {product.clock_Sp}</label>}
                        {product.pack && <label className={styles.label}>pack: {product.pack}</label>}
                        {product.tdp && <label className={styles.label}>tdp: {product.tdp}</label>}
                        <label className={styles.label}>Price: {product.price} <FaShekelSign /></label>
                    </div>
                </div>}
            </>
        )
    }

    if( collection == 'VGA'){
        return (
            <>
                <Header />
                {product != null && <div className={styles.container}>
                    <div className={styles.imageArea}>
                        <img className={styles.image} src={product.pictureURL} />
                        <div className={styles.buttonArea}><button type="button" onClick={addToCartHandler}>Add to Cart</button></div>
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

    if( collection == 'Memory'){
        return (
            <>
                <Header />
                {product != null && <div className={styles.container}>
                    <div className={styles.imageArea}>
                        <img className={styles.image} src={product.pictureURL} />
                        <div className={styles.buttonArea}><button type="button" onClick={addToCartHandler}>Add to Cart</button></div>
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

    if( collection == 'PSU'){
        return (
            <>
                <Header />
                {product != null && <div className={styles.container}>
                    <div className={styles.imageArea}>
                        <img className={styles.image} src={product.pictureURL} />
                        <div className={styles.buttonArea}><button type="button" onClick={addToCartHandler}>Add to Cart</button></div>
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

    if( collection == 'PCSystem'){
        return (
            <>
                <Header />
                {product != null && <div className={styles.container}>
                    <div className={styles.imageArea}>
                        <img className={styles.image} src={product.pictureURL} />
                        <div className={styles.buttonArea}><button type="button" onClick={addToCartHandler}>Add to Cart</button></div>
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

    if( collection == 'Peripherals'){
        return (
            <>
                <Header />
                {product != null && <div className={styles.container}>
                    <div className={styles.imageArea}>
                        <img className={styles.image} src={product.pictureURL} />
                        <div className={styles.buttonArea}><button type="button" onClick={addToCartHandler}>Add to Cart</button></div>
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
}

export default OnSaleItemScreen;