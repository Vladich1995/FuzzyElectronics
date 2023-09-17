import styles from './SelectPCSystemContent.module.css';
import { useState, useEffect } from 'react';
import PCSystemItem from './CreateBuildItems/PCSystemItem';
import Button from 'react-bootstrap/Button';
import { useBuild } from '../../../components/Contexts/BuildContext';

const SelectPCSystemContent = (props) => {
    const [PCSystemList, setPCSystemList] = useState([]);
    const [selectedPCSystem, setSelectedPCSystem] = useState([]);
    const [page, setPage] = useState(1);
    const [moreToLoad, setMoreToLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const {getPCSystem} = useBuild();

    useEffect(() => {
        const fetchPCSystem= async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/PCSystem?page=${page}&pageSize=16`);
            const responseData = await response.json();
            setPCSystemList((prevList) => {
                return [...prevList, ...responseData];
            });
            if(responseData.length < 16){
                setMoreToLoad(false);
            }
            setIsLoading(false);
        }

        setSelectedPCSystem(() => {
            const storedItems = getPCSystem();
            return storedItems ? storedItems : [];
        })

        fetchPCSystem();
    }, [page])

    const loadMoreHandler = () => {
        if(moreToLoad){
            setPage(page + 1);
        }
    }

    return (
        <>
            <div className={styles.title}>
                <h1 className={styles.titleContent}>Select PC System - related items:</h1>
                {selectedPCSystem.length > 0 &&<Button onClick={props.inc} style={{marginTop: "2vh"}} variant="outline-success">Continue</Button>}
            </div>
            <div className={styles.content}>
                {PCSystemList.length > 0 &&
                    PCSystemList.map((item) => (
                        <PCSystemItem key={item.makatMorLevi} product={item} />
                    ))}
            </div>
            <div className={styles.buttonsArea}>
                {moreToLoad && <Button onClick={loadMoreHandler} variant="outline-primary">Load more</Button>}              
            </div>
        </>
    )
}

export default SelectPCSystemContent;