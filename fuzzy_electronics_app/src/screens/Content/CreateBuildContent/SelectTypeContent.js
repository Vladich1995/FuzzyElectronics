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

    const handleItemClick = (index) => {
        // Update the selected item when a div is clicked
        addBuildType(index);
        setSelectedItem(index);
      };

    return (
        <>
            <div className={styles.title}>
                <h1>Select build type from the following:</h1>
            </div>
            <div className={styles.content}>
                {availableTypes!=null && availableTypes.map((item, index)=> <div key={index}
                className={`${styles.item} ${
                index === selectedItem ? styles.selectedItem : ''
                }`}
                onClick={() => handleItemClick(index)}>{item}</div>)}
            </div>
            {selectedItem!=null && <div className={styles.buttonArea}><Button  onClick={props.inc} variant="outline-success">Continue</Button>{' '}</div>}
        </>
    );
}

export default SelectTypeContent;

