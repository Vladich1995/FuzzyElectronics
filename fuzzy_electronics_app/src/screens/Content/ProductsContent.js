import styles from './ProductsContent.module.css';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import OnSaleItem from '../../components/items/OnSaleItem';
import Form from 'react-bootstrap/Form';
import ClipLoader from "react-spinners/ClipLoader";

const ProductsContent = () => {
    const [toLoad, setToLoad] = useState("Cases");
    const [itemsList, setItemsList] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [lastLength, setLastLength] = useState(0);
    const [moreToLoad, setMoreToLoad] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getList = async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/${toLoad}?page=${page}&pageSize=16`);
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

    }, [page, toLoad])

    const loadMoreHandler = () => {
        if(moreToLoad){
            setPage(page + 1);
        }
    }

    const productSelectHandler = (product) => {
        navigate('/onsale', { state: { product: product, collection: toLoad } });
    }

    const optionSelectHandler = (e) => {
        setToLoad(e.target.value);
        setItemsList([]);
        setPage(1);
    }

    if(isLoading){
        return (
            <div className={styles.loading}>
                <ClipLoader
                    color="black"
                    loading={isLoading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        );
    }
    else{
        return (
            <>
                <Form.Select style={{width: '10vw', fontWeight: "bold"}} onChange={optionSelectHandler} aria-label="Default select example">
                    <option>Cases</option>
                    <option >Capacity</option>
                    <option >MB</option>
                    <option >CPU</option>
                    <option >VGA</option>
                    <option >Memory</option>
                    <option >PSU</option>
                    <option >PCSystem</option>
                    <option >Peripherals</option>
                </Form.Select>
                <div className={`${styles.onSaleArea}`}>
                    {itemsList.length > 0 && itemsList.map((item) => <OnSaleItem key={item.makatMorLevi} product={item} onSelect={productSelectHandler} />)}
                </div>
                <div className={styles.buttonArea}>
                    {moreToLoad && <button onClick={loadMoreHandler}>Load more</button>}
                </div>
            </>
        );
    }
    
}

export default ProductsContent;