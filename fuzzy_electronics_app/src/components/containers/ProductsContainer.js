import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../cards/ProductCard';
import styles from './ProductsContainer.module.css';

const ProductsContainer = (props) => {
    const [productsOnSale, setProductsOnSale] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [thereAreMore, setThereAreMore] = useState(true);
    const [defaultCategory, setDefaultCategory] = useState("Cases");
    useEffect(() => {
        if(props.category != null){
            setDefaultCategory(props.category);
            console.log(props.category)
            setPage(1);
        }
    }, [props.category])

    useEffect(() => {
        const fetchProducts = async () => {
            
            if(page > 0){
                if(page == 1){
                    setProductsOnSale([]);
                }
                try {
                    console.log("fetching");
                    setLoading(true);
                    const response = await axios.get(`https://localhost:7192/data/get${defaultCategory}Products?page=${page}&pageSize=16`);
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
            }
        };

        fetchProducts();
    }, [page, defaultCategory]); 


    const fetchMoreHandler = () => {
        setPage(page + 1);
    }

    return (
        <div className={styles.container}>
            <div className={styles.productsGrid}>
                {productsOnSale.map(product => (
                    <ProductCard key={product.MakatMorLevi} product={product} onSelect={props.onSelect} />
                ))}
            </div>
            {(loading && thereAreMore) ? <p>Loading...</p>: !thereAreMore ? null : <button type="button" className={styles.fetchMoreButton} onClick={fetchMoreHandler}>Fetch more</button>}
        </div>
    );
}

export default ProductsContainer;