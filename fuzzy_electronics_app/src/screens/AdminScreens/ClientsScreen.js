import styles from './ClientsScreen.module.css';
import AdminSideBar from '../../components/perms/AdminSideBar';
import AdminHeader from '../../components/perms/AdminHeader';

const ClientsScreen = () => {
    return (
        <>
            <AdminHeader />
            <div className={styles.container}>
                <div className={styles.content}>

                </div>
                <div className={styles.sideBar}>
                    <AdminSideBar item={"clients"} />
                </div>
            </div>
        </>
    );
}

export default ClientsScreen;