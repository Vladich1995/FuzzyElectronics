import styles from './GeneralInfoContent.module.css';
import { useAuth } from '../../components/Contexts/AuthContext';

const GeneralInfoContent = () => {
    const {user} = useAuth();
    return (
        <div className={styles.container}>
            <div className={styles.infoPair}>
                <label className={styles.label}>{user.fname}</label>
                <label className={styles.label}>שם פרטי</label>
            </div>
            <div className={styles.infoPair}>
                <label className={styles.label}>{user.lname}</label>
                <label className={styles.label}>שם משפחה</label>
            </div>
            <div className={styles.infoPair}>
                <label className={styles.label}>{user.email}</label>
                <label className={styles.label}>כתובת מייל</label>
            </div>
            <div className={styles.infoPair}>
                <label className={styles.label}>{user.phoneNumber}</label>
                <label className={styles.label}>מספר טלפון</label>
            </div>
            <div className={styles.infoPair}>
                <label className={styles.label}>{user.phoneNumber}</label>
                <label className={styles.label}>הזמנות ממתינות לאישור</label>
            </div>
            <div className={styles.infoPair}>
                <label className={styles.label}>{user.phoneNumber}</label>
                <label className={styles.label}>עסקאות שבוצעו</label>
            </div>
        </div>
    );
}

export default GeneralInfoContent;