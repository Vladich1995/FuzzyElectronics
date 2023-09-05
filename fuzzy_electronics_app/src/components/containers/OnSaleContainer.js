import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OnSaleCard from '../cards/OnSaleCard';
import styles from './OnSaleContainer.module.css';

const OnSaleContainer = (props) => {
    const [productsOnSale, setProductsOnSale] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [thereAreMore, setThereAreMore] = useState(true);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log("fetching");
                setLoading(true);
                const response = await axios.get(`https://localhost:7192/data/getProductsOnSale?page=${page}&pageSize=16`);
                const newProducts = response.data;
                if (newProducts.length < 10) {
                    setThereAreMore(false);
                    
                }
                setProductsOnSale(prevProducts => [...prevProducts, ...newProducts]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products on sale:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [page]); 

    const fetchMoreHandler = () => {
        setPage(page + 1);
    }

    return (
        <div className={styles.container}>
            <div className={styles.productsGrid}>
                {productsOnSale.map(product => (
                    <OnSaleCard key={product.MakatMorLevi} product={product} onSelect={props.onSelect} />
                ))}
            </div>
            {(loading && thereAreMore) ? <p>Loading...</p>: !thereAreMore ? null : <button type="button" className={styles.fetchMoreButton} onClick={fetchMoreHandler}>Fetch more</button>}
        </div>
    );
}

export default OnSaleContainer;