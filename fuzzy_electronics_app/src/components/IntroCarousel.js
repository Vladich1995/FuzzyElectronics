import styles from './IntroCarousel.module.css';

const IntroCarousel = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className={`carousel-item active  ${styles.carouselItem}`} data-bs-interval="3000">
                    <div className={`${styles.slide} ${styles.firstSlide}`}>
                        <div className={styles.labelContainer}>
                            <div className={styles.leftImage}>
                                <img src="images/Case.png" alt="Left Image" />
                            </div>
                            <div className={styles.labels}>
                                <label>מקצועיות.אמינות.מהירות</label>
                                <label>בנה את מחשב חלומותייך</label>
                            </div>
                            <div className={styles.rightImage}>
                                <img src="images/MB.png" alt="Right Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`carousel-item  ${styles.carouselItem}`} data-bs-interval="3000">
                    <div className={`${styles.slide} ${styles.secondSlide}`}>
                        <div className={styles.labelContainer}>
                                <div className={styles.leftImage}>
                                    <img src="images/Mouse.png" alt="Left Image" />
                                </div>
                                <div className={styles.labels}>
                                    <label>שתי שאלות בלבד</label>
                                    <label>ונתאים לך מפרט מושלם</label>
                                </div>
                                <div className={styles.rightImage}>
                                    <img src="images/System.png" alt="Right Image" />
                                </div>
                        </div>
                    </div>
                </div>
                <div className={`carousel-item  ${styles.carouselItem}`} data-bs-interval="3000">
                    <div className={`${styles.slide} ${styles.thirdSlide}`}>
                        <div className={styles.labelContainer}>
                                    <div className={styles.leftImage}>
                                        <img src="images/Keyboard.png" alt="Left Image" />
                                    </div>
                                    <div className={styles.labels}>
                                        <label>אתה מוזמן גם להרכיב מפרט משלך</label>
                                        <label>את הכלים נספק לך</label>
                                    </div>
                                    <div className={styles.rightImage}>
                                        <img src="images/SSD.png" alt="Right Image" />
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        
    );
}

export default IntroCarousel;