import styles from './SelectMBContent.module.css';
import { useState, useEffect } from 'react';
import MBItem from './CreateBuildItems/MBItem';
import Button from 'react-bootstrap/Button';
import { useBuild } from '../../../components/Contexts/BuildContext';

const SelectMBContent = (props) => {
    const [MBList, setMBList] = useState([]);
    const [selectedMB, setSelectedMB] = useState([]);
    const [page, setPage] = useState(1);
    const [moreToLoad, setMoreToLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const {getMB} = useBuild();

    useEffect(() => {
        const fetchMB = async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/MB?page=${page}&pageSize=16`);
            const responseData = await response.json();
            setMBList((prevList) => {
                return [...prevList, ...responseData];
            });
            if(responseData.length < 16){
                setMoreToLoad(false);
            }
            setIsLoading(false);
        }

        setSelectedMB(() => {
            const storedItems = getMB();
            return storedItems ? storedItems : [];
        })

        fetchMB();
    }, [page])

    const loadMoreHandler = () => {
        if(moreToLoad){
            setPage(page + 1);
        }
    }

    return (
        <>
            <div className={styles.title}>
                <h1>Select Motherboard-related items: {selectedMB.length}</h1>
            </div>
            <div className={styles.content}>
                {MBList.length > 0 &&
                    MBList.map((item) => (
                        <MBItem key={item.makatMorLevi} product={item} />
                    ))}
            </div>
            <div className={styles.buttonsArea}>
                {moreToLoad && <Button onClick={loadMoreHandler} variant="outline-primary">Load more</Button>}
                {selectedMB.length > 0 &&<Button onClick={props.inc} style={{marginTop: "2vh"}} variant="outline-success">Continue</Button>}
            </div>
        </>
    )
}

export default SelectMBContent;