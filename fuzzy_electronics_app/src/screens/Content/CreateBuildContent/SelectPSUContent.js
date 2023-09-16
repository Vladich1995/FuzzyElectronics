import styles from './SelectPSUContent.module.css';
import { useState, useEffect } from 'react';
import PSUItem from './CreateBuildItems/PSUItem';
import Button from 'react-bootstrap/Button';
import { useBuild } from '../../../components/Contexts/BuildContext';

const SelectPSUContent = (props) => {
    const [PSUList, setPSUList] = useState([]);
    const [selectedPSU, setSelectedPSU] = useState([]);
    const [page, setPage] = useState(1);
    const [moreToLoad, setMoreToLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const {getPSU} = useBuild();

    useEffect(() => {
        const fetchPSU= async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/PSU?page=${page}&pageSize=16`);
            const responseData = await response.json();
            setPSUList((prevList) => {
                return [...prevList, ...responseData];
            });
            if(responseData.length < 16){
                setMoreToLoad(false);
            }
            setIsLoading(false);
        }

        setSelectedPSU(() => {
            const storedItems = getPSU();
            return storedItems ? storedItems : [];
        })

        fetchPSU();
    }, [page])

    const loadMoreHandler = () => {
        if(moreToLoad){
            setPage(page + 1);
        }
    }

    return (
        <>
            <div className={styles.title}>
                <h1>Select PSU-related items: {selectedPSU.length}</h1>
            </div>
            <div className={styles.content}>
                {PSUList.length > 0 &&
                    PSUList.map((item) => (
                        <PSUItem key={item.makatMorLevi} product={item} />
                    ))}
            </div>
            <div className={styles.buttonsArea}>
                {moreToLoad && <Button onClick={loadMoreHandler} variant="outline-primary">Load more</Button>}
                {selectedPSU.length > 0 &&<Button onClick={props.inc} style={{marginTop: "2vh"}} variant="outline-success">Continue</Button>}
            </div>
        </>
    )
}

export default SelectPSUContent;