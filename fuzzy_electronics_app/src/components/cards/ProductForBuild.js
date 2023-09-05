import styles from './ProductForBuild.module.css';
import { useEffect, useState } from 'react';

const ProductForBuild = (props) => {
    const [labels, setLabels] = useState(null);
    useEffect(() => {
        const excludedKeys = ["id", "makatMorLevi", "makatDeveloper", "isOnSale", "isAvailable", "pictureURL"];
        
        const labels = Object.keys(props.product).map((key) => {
          if (!excludedKeys.includes(key)) {
            return (
              <div key={key}>
                <label>{key}:</label>
                <label>{props.product[key]}</label>
              </div>
            );
          }
          return null; // Exclude this key from rendering
        });
        
        setLabels(labels);
      }, []);

    const addToBuildHandler = () => {
        props.onAdd(props.product);
        props.onClose();
    }

    const closeCardHandler = () => {
        props.onClose();
    }

    return (
        <div className={styles.container}>
            <label className={styles.exit} onClick={closeCardHandler}>X</label>
            <div className={styles.imageArea}>
                <img className={styles.image} src={props.product.pictureURL} alt="Product image" />
            </div>
            <div className={styles.summaryArea}>
                {labels}
                <div className={`${styles.singleButton}`} >
                    <button className={styles.buttonAdd} type="button" onClick={addToBuildHandler}>Add to build</button>
                </div>
            </div>
        </div>
    );

}

export default ProductForBuild;