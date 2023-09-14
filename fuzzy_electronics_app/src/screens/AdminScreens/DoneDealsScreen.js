import styles from './DoneDealsScreen.module.css';
import AdminSideBar from '../../components/perms/AdminSideBar';
import AdminHeader from '../../components/perms/AdminHeader';

const DoneDealsScreen = () => {
    return (
        <>
            <AdminHeader />
            <div className={styles.container}>
                <div className={styles.content}>

                </div>
                <div className={styles.sideBar}>
                    <AdminSideBar item={"doneDeals"} />
                </div>
            </div>
        </>
    );
}

export default DoneDealsScreen;