import styles from './SelectMemoryContent.module.css';
import { useState, useEffect } from 'react';
import MemoryItem from './CreateBuildItems/MemoryItem';
import Button from 'react-bootstrap/Button';
import { useBuild } from '../../../components/Contexts/BuildContext';
import { useCustomerBuild } from '../../../components/Contexts/CustomerBuildContext';

const SelectMemoryContent = (props) => {
    const [memoryList, setMemoryList] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [page, setPage] = useState(1);
    const [moreToLoad, setMoreToLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const {getMemory} = useBuild();
    const {getCustomerMemory} = useCustomerBuild();

    useEffect(() => {
        const fetchMemory= async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/Memory?page=${page}&pageSize=16`);
            const responseData = await response.json();
            setMemoryList((prevList) => {
                return [...prevList, ...responseData];
            });
            if(responseData.length < 16){
                setMoreToLoad(false);
            }
            setIsLoading(false);
        }

        setSelectedMemory(() => {
            const storedItems = props.forCustomer == null ? getMemory() : getCustomerMemory();
            return storedItems ? storedItems : [];
        })

        fetchMemory();
    }, [page])

    const loadMoreHandler = () => {
        if(moreToLoad){
            setPage(page + 1);
        }
    }

    return (
        <>
            <div className={styles.title}>
                <h1 className={styles.titleContent}>Select Memory - related items:</h1>
                {selectedMemory.length > 0 &&<Button onClick={props.inc} style={{marginTop: "2vh"}} variant="outline-success">Continue</Button>}
            </div>
            <div className={styles.content}>
                {memoryList.length > 0 &&
                    memoryList.map((item) => (
                        <MemoryItem key={item.makatMorLevi} product={item} forCustomer={props.forCustomer} />
                    ))}
            </div>
            <div className={styles.buttonsArea}>
                {moreToLoad && <Button onClick={loadMoreHandler} variant="outline-primary">Load more</Button>}
            </div>
        </>
    )
}

export default SelectMemoryContent;