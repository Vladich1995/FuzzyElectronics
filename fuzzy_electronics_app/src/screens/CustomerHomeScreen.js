import styles from './CustomerHomeScreen.module.css';
import Header from '../components/perms/Header';
import HomeCarousel from '../components/perms/HomeCarousel';
import OnSaleItemsContent from './Content/OnSaleItemsContent';

const CustomerHomeScreen = () => {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <HomeCarousel />
            <OnSaleItemsContent />
        </div>
    );
}

export default CustomerHomeScreen;