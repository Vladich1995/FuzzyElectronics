import styles from './CustomerHomeScreen.module.css';
import { useEffect } from 'react';
import Header from '../components/perms/Header';
import HomeCarousel from '../components/perms/HomeCarousel';
import ProductsContent from './Content/ProductsContent';
import { useAuth } from '../components/Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const CustomerHomeScreen = () => {
    const {getUser} = useAuth();
    const navigate = useNavigate();
    console.log(getUser().email);
    useEffect(() => {
        console.log(getUser().email);
        if(getUser().email == 'alex@gmail.com'){
            console.log("navigating to admin")
            navigate('/admin');
        }
    }, [])
    return (
        <div className={styles.pageContainer}>
            <Header />
            <HomeCarousel />
            <ProductsContent />
        </div>
    );
}

export default CustomerHomeScreen;