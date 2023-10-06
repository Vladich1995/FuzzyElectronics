import styles from './SuggestedBuildItem.module.css';
import { useEffect, useState } from 'react';
import { FaShekelSign } from 'react-icons/fa';


const SuggestedBuildItem = (props) => {
    const [totalPrice, setTotalPrice] = useState(() => {
        let sum = 0;
        props.build.cases.forEach(element => {
          sum += parseInt(element.price);
        });
        props.build.capacity.forEach(element => {
          sum += parseInt(element.price);
        });
        props.build.mb.forEach(element => {
          sum += parseInt(element.price);
        });
        props.build.memory.forEach(element => {
          sum += parseInt(element.price);
        });
        props.build.cpu.forEach(element => {
          sum += parseInt(element.price);
        });
        props.build.pcSystem.forEach(element => {
          sum += parseInt(element.price);
        });
        props.build.peripherals.forEach(element => {
          sum += parseInt(element.price);
        });
        props.build.psu.forEach(element => {
          sum += parseInt(element.price);
        });
        props.build.vga.forEach(element => {
          sum += parseInt(element.price);
        });
        return sum;
      })

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>The suggested build for you:</h1>
            <div className={styles.category}>
                <h3 className={styles.caption}>Cases</h3>
                {props.build.cases.map((item) => 
                <div  className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p className={styles.caption}>{item.description} : <span className={styles.price}>{item.price} <FaShekelSign /></span></p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3 className={styles.caption}>Capacity</h3>
                {props.build.capacity.map((item) => 
                <div  className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p className={styles.caption}>{item.description} : <span className={styles.price}>{item.price} <FaShekelSign /></span></p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3 className={styles.caption}>CPU</h3>
                {props.build.cpu.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p className={styles.caption}>{item.description} : <span className={styles.price}>{item.price} <FaShekelSign /></span></p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3 className={styles.caption}>Motherboards</h3>
                {props.build.mb.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p className={styles.caption}>{item.description} : <span className={styles.price}>{item.price} <FaShekelSign /></span></p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3 className={styles.caption}>Memory</h3>
                {props.build.memory.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p className={styles.caption}>{item.description} : <span className={styles.price}>{item.price} <FaShekelSign /></span></p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3 className={styles.caption}>PC Systems</h3>
                {props.build.pcSystem.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p className={styles.caption}>{item.description} : <span className={styles.price}>{item.price} <FaShekelSign /></span></p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3 className={styles.caption}>Graphic cards</h3>
                {props.build.vga.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p className={styles.caption}>{item.description} : <span className={styles.price}>{item.price} <FaShekelSign /></span></p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3 className={styles.caption}>PSU</h3>
                {props.build.psu.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p className={styles.caption}>{item.description} : <span className={styles.price}>{item.price} <FaShekelSign /></span></p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3 className={styles.caption}>Peripherals</h3>
                {props.build.peripherals.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p className={styles.caption}>{item.description} : <span className={styles.price}>{item.price} <FaShekelSign /></span></p>
                </div>)}
            </div>
            <div className={styles.price}>
                <h3 className={styles.price}>Total Price: {totalPrice} <FaShekelSign /></h3>
            </div>
        </div>
        
    );
}

export default SuggestedBuildItem;