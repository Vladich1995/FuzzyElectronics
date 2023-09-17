import styles from './SelectPeripheralsContent.module.css';
import { useState, useEffect } from 'react';
import PeripheralsItem from './CreateBuildItems/PeripheralsItem';
import Button from 'react-bootstrap/Button';
import { useBuild } from '../../../components/Contexts/BuildContext';

const SelectPeripheralsContent = (props) => {
    const [peripheralsList, setPeripheralsList] = useState([]);
    const [selectedPeripherals, setSelectedPeripherals] = useState([]);
    const [page, setPage] = useState(1);
    const [moreToLoad, setMoreToLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const {getPeripherals} = useBuild();

    useEffect(() => {
        const fetchPeripherals= async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/Peripherals?page=${page}&pageSize=16`);
            const responseData = await response.json();
            setPeripheralsList((prevList) => {
                return [...prevList, ...responseData];
            });
            if(responseData.length < 16){
                setMoreToLoad(false);
            }
            setIsLoading(false);
        }

        setSelectedPeripherals(() => {
            const storedItems = getPeripherals();
            return storedItems ? storedItems : [];
        })

        fetchPeripherals();
    }, [page])

    const loadMoreHandler = () => {
        if(moreToLoad){
            setPage(page + 1);
        }
    }

    return (
        <>
            <div className={styles.title}>
                <h1 className={styles.titleContent}>Select Peripherals - related items:</h1>
                {selectedPeripherals.length > 0 &&<Button onClick={props.inc} style={{marginTop: "2vh"}} variant="outline-success">Continue</Button>}
            </div>
            <div className={styles.content}>
                {peripheralsList.length > 0 &&
                    peripheralsList.map((item) => (
                        <PeripheralsItem key={item.makatMorLevi} product={item} />
                    ))}
            </div>
            <div className={styles.buttonsArea}>
                {moreToLoad && <Button onClick={loadMoreHandler} variant="outline-primary">Load more</Button>}</div>
        </>
    )
}

export default SelectPeripheralsContent;