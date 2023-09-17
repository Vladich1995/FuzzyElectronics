import styles from './SelectTypeContent.module.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useBuild } from '../../../components/Contexts/BuildContext';

const SelectTypeContent = (props) => {
    const [availableTypes, setAvailableTypes] = useState([]);
    const [selectedItem, setSelectedItem] = useState();
    const {addBuildType} = useBuild();

    useEffect(() => {
        const getAvailableTypes = async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/types`);
            const responseData = await response.json();
            setAvailableTypes(responseData.buildTypes)
            console.log(responseData);
        }

        getAvailableTypes();
    }, [])

    const handleItemClick = (index, item) => {
        switch (item) {
            case 'GamesCheap':
                addBuildType(0);
                break;
            case 'OfficeCheap':
                addBuildType(1);
                break;
            case 'DesignCheap':
                addBuildType(2);
                break;
            case 'GamesMiddle':
                addBuildType(3);
                break;
            case 'OfficeMiddle':
                addBuildType(4);
                break;
            case 'DesignMiddle':
                addBuildType(5);
                break;
            case 'GamesExpensive':
                addBuildType(6);
                break;
            case 'OfficeExpensive':
                addBuildType(7);
                break;
            case 'DesignExpensive':
                addBuildType(8);
                break;
            
        }
        setSelectedItem(index);
      };

    return (
        <>
            <div className={styles.title}>
                <h1 className={styles.titleContent}>Select build type from the following:</h1>
                {selectedItem != null && (
                    <div className={styles.button}>
                    <Button onClick={props.inc} variant="outline-success">
                        Continue
                    </Button>
                    </div>
                )}
            </div>
            <div className={styles.content}>
                {availableTypes!=null && availableTypes.map((item, index)=> <div key={index}
                className={`${styles.item} ${
                index === selectedItem ? styles.selectedItem : ''
                }`}
                onClick={() => handleItemClick(index, item)}>{item}</div>)}
            </div>
        </>
    );
}

export default SelectTypeContent;

