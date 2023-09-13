import styles from './OnSaleItemsContent.module.css';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import OnSaleItem from '../../components/items/OnSaleItem';

const OnSaleItemsContent = () => {
    const [itemsList, setItemsList] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [lastLength, setLastLength] = useState(0);
    const [moreToLoad, setMoreToLoad] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getList = async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/OnSale?page=${page}&pageSize=16`);
            const responseData = await response.json();
            setItemsList((prevList) => {
                return [...prevList, ...responseData];
            })
            if(responseData.length < 16){
                setMoreToLoad(false);
            }
            setLastLength(responseData.length);
            setIsLoading(false);
        }

        getList();

    }, [page])

    const loadMoreHandler = () => {
        if(moreToLoad){
            setPage(page + 1);
        }
    }

    const productSelectHandler = (product) => {
        navigate('/onsale', { state: { product: product } });
    }

    return (
        <>
            <div className={`${styles.onSaleArea}`}>
                {itemsList.length > 0 && itemsList.map((item) => <OnSaleItem key={item.makatMorLevi} product={item} onSelect={productSelectHandler} />)}
            </div>
            <div className={styles.buttonArea}>
                {moreToLoad && <button onClick={loadMoreHandler}>Load more</button>}
            </div>
        </>

    );
}

export default OnSaleItemsContent;