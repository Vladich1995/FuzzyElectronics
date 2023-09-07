import Carousel from 'react-bootstrap/Carousel';
import styles from './HomeCarousel.module.css';


const HomeCarousel = () => {
    return (
        <>
            <Carousel className={styles.container}>
                <Carousel.Item interval={1000} className={styles.carouselItem}>
                    <div className={styles.itemContainer}>
                        <div className={styles.leftImage}>
                            <img src='images/MB.png' alt="Image 1" className={`${styles.image}`} />
                        </div>
                        <div className={styles.labelsContainer}>
                            <label className={styles.label}>First slide label</label>
                            <label className={styles.label}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
                        </div>
                        <div className={styles.rightImage}>
                            <img src='images/Mouse.png' alt="Image 2" className={`${styles.image}`} />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1000} className={styles.carouselItem}>
                    <div className={styles.itemContainer}>
                        <div className={styles.leftImage}>
                            <img src='images/Case.png' alt="Image 1" className={`${styles.image}`} />
                        </div>
                        <div className={styles.labelsContainer}>
                            <label className={styles.label}>Second slide label</label>
                            <label className={styles.label}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
                        </div>
                        <div className={styles.rightImage}>
                            <img src='images/Keyboard.png' alt="Image 2" className={`${styles.image}`} />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1000} className={styles.carouselItem}>
                    <div className={styles.itemContainer}>
                        <div className={styles.leftImage}>
                            <img src='images/SSD.png' alt="Image 1" className={`${styles.image}`} />
                        </div>
                        <div className={styles.labelsContainer}>
                            <label className={styles.label}>Third slide label</label>
                            <label className={styles.label}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
                        </div>
                        <div className={styles.rightImage}>
                            <img src='images/System.png' alt="Image 2" className={`${styles.image}`} />
                        </div>
                    </div>
                </Carousel.Item>
      </Carousel>
    </>
    );
}

export default HomeCarousel;