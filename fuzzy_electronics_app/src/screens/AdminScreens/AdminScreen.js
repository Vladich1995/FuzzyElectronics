import styles from './AdminScreen.module.css';
import AdminSideBar from '../../components/perms/AdminSideBar';
import AdminHeader from '../../components/perms/AdminHeader';

const AdminScreen = () => {
    return (
        <>
            <AdminHeader />
            <div className={styles.container}>
                <div className={styles.content}>

                </div>
                <div className={styles.sideBar}>
                    <AdminSideBar item={"builds"}/>
                </div>
            </div>
        </>
    );
}

export default AdminScreen;