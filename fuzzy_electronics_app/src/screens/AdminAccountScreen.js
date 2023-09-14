import { useState } from 'react';
import styles from './AdminAccountScreen.module.css';
import AdminHeader from '../components/perms/AdminHeader';
import GeneralInfoContent from './Content/GeneralInfoContent';
import UpdateLoginContent from './Content/UpdateLoginContent';

const AdminAccountScreen = () => {
    const [generalClicked, setGeneralClicked] = useState(true);
    const [loginInfoClicked, setLoginInfoClicked] = useState(false);
    const [scrapingClicked, setScrapingClicked] = useState(false);

    const handleGeneralClicked = () => {
        setGeneralClicked(true);
        setLoginInfoClicked(false);
        setScrapingClicked(false);
    }

    const handleLoginInfoClicked = () => {
        setGeneralClicked(false);
        setLoginInfoClicked(true);
        setScrapingClicked(false);
    }

    const handleScrapingClicked = () => {
        setGeneralClicked(false);
        setLoginInfoClicked(false);
        setScrapingClicked(true);
    }

    return (
      <div className={styles.page}>
        <AdminHeader />
        <div className={styles.centeredContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.content}>
                {generalClicked && <GeneralInfoContent />}
                {loginInfoClicked && <UpdateLoginContent />}
            </div>
            <div className={styles.menu}>
                <div className={styles.menuItem} style={{backgroundColor: generalClicked && 'grey'}} onClick={handleGeneralClicked}><span className={styles.text}>כללי</span></div>
                <div className={styles.menuItem} style={{backgroundColor: loginInfoClicked && 'grey'}} onClick={handleLoginInfoClicked}><span className={styles.text}>עדכן פרטי התחברות</span></div>
                <div className={styles.menuItem} style={{backgroundColor: scrapingClicked && 'grey'}} onClick={handleScrapingClicked}><span className={styles.text}>עדכן פרטי יבואן</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AdminAccountScreen;