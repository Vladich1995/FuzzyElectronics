import styles from './SelectCPUContent.module.css';
import { useState, useEffect } from 'react';
import CPUItem from './CreateBuildItems/CPUItem';
import Button from 'react-bootstrap/Button';
import { useBuild } from '../../../components/Contexts/BuildContext';
import { useCustomerBuild } from '../../../components/Contexts/CustomerBuildContext';

const SelectCPUContent = (props) => {
    const [CPUList, setCPUList] = useState([]);
    const [selectedCPU, setSelectedCPU] = useState([]);
    const [page, setPage] = useState(1);
    const [moreToLoad, setMoreToLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const {getCPU} = useBuild();
    const {getCustomerCPU} = useCustomerBuild();

    useEffect(() => {
        const fetchCPU= async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/CPU?page=${page}&pageSize=16`);
            const responseData = await response.json();
            setCPUList((prevList) => {
                return [...prevList, ...responseData];
            });
            if(responseData.length < 16){
                setMoreToLoad(false);
            }
            setIsLoading(false);
        }

        setSelectedCPU(() => {
            const storedItems = props.forCustomer == null ? getCPU() : getCustomerCPU();
            return storedItems ? storedItems : [];
        })

        fetchCPU();
    }, [page])

    const loadMoreHandler = () => {
        if(moreToLoad){
            setPage(page + 1);
        }
    }

    return (
        <>
            <div className={styles.title}>
                <h1 className={styles.titleContent}>Select CPU - related items:</h1>
                {selectedCPU.length > 0 &&<Button onClick={props.inc} style={{marginTop: "2vh"}} variant="outline-success">Continue</Button>}
            </div>
            <div className={styles.content}>
                {CPUList.length > 0 &&
                    CPUList.map((item) => (
                        <CPUItem key={item.makatMorLevi} product={item} forCustomer={props.forCustomer} />
                    ))}
            </div>
            <div className={styles.buttonsArea}>
                {moreToLoad && <Button onClick={loadMoreHandler} variant="outline-primary">Load more</Button>}
            </div>
        </>
    )
}

export default SelectCPUContent;