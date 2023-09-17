import styles from './SelectCasesContent.module.css';
import { useState, useEffect } from 'react';
import CasesItem from './CreateBuildItems/CasesItem';
import Button from 'react-bootstrap/Button';
import { useBuild } from '../../../components/Contexts/BuildContext';

const SelectCasesContent = (props) => {
    const [casesList, setCasesList] = useState([]);
    const [selectedCases, setSelectedCases] = useState([]);
    const [page, setPage] = useState(1);
    const [moreToLoad, setMoreToLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const {getCases} = useBuild();

    useEffect(() => {
        const fetchCases = async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/Cases?page=${page}&pageSize=16`);
            const responseData = await response.json();
            setCasesList((prevList) => {
                return [...prevList, ...responseData];
            });
            if(responseData.length < 16){
                setMoreToLoad(false);
            }
            setIsLoading(false);
        }
        
        setSelectedCases(() => {
            const storedItems = getCases();
            return storedItems ? storedItems : [];
        })

        fetchCases();
    }, [page])

    const loadMoreHandler = () => {
        if(moreToLoad){
            setPage(page + 1);
        }
    }

    return (
        <>
            <div className={styles.title}>
                <h1 className={styles.titleContent}>Select Cases - related items:</h1>
                {selectedCases.length > 0 &&<Button onClick={props.inc} style={{marginTop: "2vh"}} variant="outline-success">Continue</Button>}
            </div>
            <div className={styles.content}>
                {casesList.length > 0 &&
                    casesList.map((item) => (
                        <CasesItem key={item.makatMorLevi} product={item} />
                    ))}
            </div>
            <div className={styles.buttonsArea}>
                {moreToLoad && <Button onClick={loadMoreHandler} variant="outline-primary">Load more</Button>}
            </div>
        </>
    )
}

export default SelectCasesContent;