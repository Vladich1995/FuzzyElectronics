import { useEffect, useState } from 'react';
import styles from './GeneralInfoContent.module.css';
import { useAuth } from '../../components/Contexts/AuthContext';

const GeneralInfoContent = () => {
    const {user} = useAuth();
    const [waitingOrders, setWaitingOrders] = useState(0);
    const [doneDeals, setDoneDeals] = useState(0);

    useEffect(() => {
        const countWaitingOrders = async () => {
            try{
                const response = await fetch(`https://gatewayapiserv.azurewebsites.net/OrdersAPI/api/v1/Orders/GetBuildOrdersByCustomer?id=${user != null && user.id}`);
                if (response.ok) {
                    const data = await response.json();
                    if(data != null){
                        const waitingObjects = data.filter(item => item.IsConfirmed === false);
                        const countWaiting = waitingObjects.length;
                        setWaitingOrders(waitingOrders + countWaiting);
                        const doneDealsObjects = data.filter(item => item.IsConfirmed === false);
                        const countDoneDeals= doneDealsObjects.length;
                        setDoneDeals(doneDeals + countDoneDeals);
                        console.log("fetched")
                    }
                  } else {
                    console.error(`HTTP error! Status: ${response.status}`);
                  }
            } catch (error) {
                alert(error);
            }
        }

        const countDoneDeals = async () => {
            try{
                const response = await fetch(`https://gatewayapiserv.azurewebsites.net/OrdersAPI/api/v1/Orders/GetProductOrdersByCustomer?id=${user != null && user.id}`);
                if (response.ok) {
                    const data = await response.json();
                    if(data != null){
                        const waitingObjects = data.filter(item => item.IsConfirmed === false);
                        const countWaiting = waitingObjects.length;
                        setWaitingOrders(waitingOrders + countWaiting);
                        const doneDealsObjects = data.filter(item => item.IsConfirmed === false);
                        const countDoneDeals= doneDealsObjects.length;
                        setDoneDeals(doneDeals + countDoneDeals);
                    }
                  } else {
                    console.error(`HTTP error! Status: ${response.status}`);
                  }
            } catch (error) {
                alert(error);
            }
        }

        countWaitingOrders();
        countDoneDeals();

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.infoPair}>
                <label className={styles.label}>{user != null && user.fname}</label>
                <label className={styles.label}>שם פרטי</label>
            </div>
            <div className={styles.infoPair}>
                <label className={styles.label}>{user != null && user.lname}</label>
                <label className={styles.label}>שם משפחה</label>
            </div>
            <div className={styles.infoPair}>
                <label className={styles.label}>{user != null && user.email}</label>
                <label className={styles.label}>כתובת מייל</label>
            </div>
            <div className={styles.infoPair}>
                <label className={styles.label}>{user != null && user.phoneNumber}</label>
                <label className={styles.label}>מספר טלפון</label>
            </div>
            <div className={styles.infoPair}>
                <label className={styles.label}>{waitingOrders}</label>
                <label className={styles.label}>הזמנות ממתינות לאישור</label>
            </div>
            <div className={styles.infoPair}>
                <label className={styles.label}>{doneDeals}</label>
                <label className={styles.label}>עסקאות שבוצעו</label>
            </div>
        </div>
    );
}

export default GeneralInfoContent;