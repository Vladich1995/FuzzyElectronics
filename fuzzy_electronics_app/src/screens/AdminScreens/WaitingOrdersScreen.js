import styles from './WaitingOrdersScreen.module.css';
import AdminSideBar from '../../components/perms/AdminSideBar';
import AdminHeader from '../../components/perms/AdminHeader';

const WaitingOrdersScreen = () => {
    return (
        <>
            <AdminHeader />
            <div className={styles.container}>
                <div className={styles.content}>

                </div>
                <div className={styles.sideBar}>
                    <AdminSideBar item={"waitingOrders"} />
                </div>
            </div>
        </>
    );
}

export default WaitingOrdersScreen;