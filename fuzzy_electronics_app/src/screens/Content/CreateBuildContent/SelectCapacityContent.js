import styles from './SelectCapacityContent.module.css';
import { useState, useEffect } from 'react';
import CapacityItem from './CreateBuildItems/CapacityItem';
import Button from 'react-bootstrap/Button';
import { useBuild } from '../../../components/Contexts/BuildContext';

const SelectCapacityContent = (props) => {
    const [capacityList, setCapacityList] = useState([]);
    const [selectedCapacity, setSelectedCapacity] = useState([]);
    const [page, setPage] = useState(1);
    const [moreToLoad, setMoreToLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const {getCapacity} = useBuild();

    useEffect(() => {
        const fetchCapacity= async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/Capacity?page=${page}&pageSize=16`);
            const responseData = await response.json();
            setCapacityList((prevList) => {
                return [...prevList, ...responseData];
            });
            if(responseData.length < 16){
                setMoreToLoad(false);
            }
            setIsLoading(false);
        }

        setSelectedCapacity(() => {
            const storedItems = getCapacity();
            return storedItems ? storedItems : [];
        })

        fetchCapacity();
    }, [page])

    const loadMoreHandler = () => {
        if(moreToLoad){
            setPage(page + 1);
        }
    }

    return (
        <>
            <div className={styles.title}>
                <h1 className={styles.titleContent}>Select Storage - related items:</h1>
                {selectedCapacity.length > 0 &&<Button onClick={props.inc} style={{marginTop: "2vh"}} variant="outline-success">Continue</Button>}
            </div>
            <div className={styles.content}>
                {capacityList.length > 0 &&
                    capacityList.map((item) => (
                        <CapacityItem key={item.makatMorLevi} product={item} />
                    ))}
            </div>
            <div className={styles.buttonsArea}>
                {moreToLoad && <Button onClick={loadMoreHandler} variant="outline-primary">Load more</Button>}
            </div>
        </>
    )
}

export default SelectCapacityContent;