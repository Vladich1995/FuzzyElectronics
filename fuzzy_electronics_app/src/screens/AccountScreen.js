import { useState } from 'react';
import styles from './AccountScreen.module.css';
import Header from '../components/perms/Header';
import GeneralInfoContent from './Content/GeneralInfoContent';
import UpdateLoginContent from './Content/UpdateLoginContent';

const AccountScreen = () => {
    const [generalClicked, setGeneralClicked] = useState(true);
    const [loginInfoClicked, setLoginInfoClicked] = useState(false);
    const [cardInfoClicked, setCardInfoClicked] = useState(false);
    const [dealsClicked, setDealsClicked] = useState(false);

    const handleGeneralClicked = () => {
        setGeneralClicked(true);
        setLoginInfoClicked(false);
        setCardInfoClicked(false);
        setDealsClicked(false);
    }

    const handleLoginInfoClicked = () => {
        setGeneralClicked(false);
        setLoginInfoClicked(true);
        setCardInfoClicked(false);
        setDealsClicked(false);
    }

    const handleCardInfoClicked = () => {
        setGeneralClicked(false);
        setLoginInfoClicked(false);
        setCardInfoClicked(true);
        setDealsClicked(false);
    }

    const handleDealsClicked = () => {
        setGeneralClicked(false);
        setLoginInfoClicked(false);
        setCardInfoClicked(false);
        setDealsClicked(true);
    }

    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.centeredContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.content}>
                {generalClicked && <GeneralInfoContent />}
                {loginInfoClicked && <UpdateLoginContent />}
            </div>
            <div className={styles.menu}>
                <div className={styles.menuItem} style={{backgroundColor: generalClicked && 'grey'}} onClick={handleGeneralClicked}><span className={styles.text}>כללי</span></div>
                <div className={styles.menuItem} style={{backgroundColor: loginInfoClicked && 'grey'}} onClick={handleLoginInfoClicked}><span className={styles.text}>עדכן פרטי התחברות</span></div>
                <div className={styles.menuItem} style={{backgroundColor: cardInfoClicked && 'grey'}} onClick={handleCardInfoClicked}><span className={styles.text}>עדכן פרטי אשראי</span></div>
                <div className={styles.menuItem} style={{backgroundColor: dealsClicked && 'grey'}} onClick={handleDealsClicked}><span className={styles.text}>העסקאות שלי</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AccountScreen;