import styles from './CreatedBuildItem.module.css';
import { useEffect, useState } from 'react';

const CreatedBuildItem = (props) => {
    const [buildType, setBuildType] = useState("");

    useEffect(() => {
        switch (props.build.buildType) {
            case 0:
                setBuildType('GamesCheap');
                break;
            case 1:
                setBuildType('OfficeCheap');
                break;
            case 2:
                setBuildType('DesignCheap');
                break;
            case 3:
                setBuildType('GamesMiddle');
                break;
            case 4:
                setBuildType('OfficeMiddle');
                break;
            case 5:
                setBuildType('DesignMiddle');
                break;
            case 6:
                setBuildType('GamesExpensive');
                break;
            case 7:
                setBuildType('OfficeExpensive');
                break;
            case 8:
                setBuildType('DesignExpensive');
                break;
        }

    }, [])
    return (
        <div className={styles.container}>
            <h1>{buildType}</h1>
            <div className={styles.category}>
                <h3>Cases</h3>
                {props.build.cases.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p>{item.description}</p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3>Capacity</h3>
                {props.build.capacity.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p>{item.description}</p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3>CPU</h3>
                {props.build.cpu.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p>{item.description}</p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3>Motherboards</h3>
                {props.build.mb.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p>{item.description}</p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3>Memory</h3>
                {props.build.memory.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p>{item.description}</p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3>PC Systems</h3>
                {props.build.pcSystem.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p>{item.description}</p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3>Graphic cards</h3>
                {props.build.vga.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p>{item.description}</p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3>PSU</h3>
                {props.build.psu.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p>{item.description}</p>
                </div>)}
            </div>
            <div className={styles.category}>
                <h3>Peripherals</h3>
                {props.build.peripherals.map((item) => 
                <div className={styles.productInfo}>
                    <img className={styles.image} src={item.pictureURL} />
                    <p>{item.description}</p>
                </div>)}
            </div>
        </div>
    );
}

export default CreatedBuildItem;