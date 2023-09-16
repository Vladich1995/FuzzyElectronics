import styles from './SelectVGAContent.module.css';
import { useState, useEffect } from 'react';
import VGAItem from './CreateBuildItems/VGAItem';
import Button from 'react-bootstrap/Button';
import { useBuild } from '../../../components/Contexts/BuildContext';

const SelectVGAContent = (props) => {
    const [VGAList, setVGAList] = useState([]);
    const [selectedVGA, setSelectedVGA] = useState([]);
    const [page, setPage] = useState(1);
    const [moreToLoad, setMoreToLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const {getVGA} = useBuild();

    useEffect(() => {
        const fetchVGA= async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/VGA?page=${page}&pageSize=16`);
            const responseData = await response.json();
            setVGAList((prevList) => {
                return [...prevList, ...responseData];
            });
            if(responseData.length < 16){
                setMoreToLoad(false);
            }
            setIsLoading(false);
        }

        setSelectedVGA(() => {
            const storedItems = getVGA();
            return storedItems ? storedItems : [];
        })

        fetchVGA();
    }, [page])

    const loadMoreHandler = () => {
        if(moreToLoad){
            setPage(page + 1);
        }
    }

    return (
        <>
            <div className={styles.title}>
                <h1>Select Graphic card-related items: {selectedVGA.length}</h1>
            </div>
            <div className={styles.content}>
                {VGAList.length > 0 &&
                    VGAList.map((item) => (
                        <VGAItem key={item.makatMorLevi} product={item} />
                    ))}
            </div>
            <div className={styles.buttonsArea}>
                {moreToLoad && <Button onClick={loadMoreHandler} variant="outline-primary">Load more</Button>}
                {selectedVGA.length > 0 &&<Button onClick={props.inc} style={{marginTop: "2vh"}} variant="outline-success">Continue</Button>}
            </div>
        </>
    )
}

export default SelectVGAContent;