import styles from './AdminScreen.module.css';
import { useEffect, useState } from 'react';
import AdminSideBar from '../../components/perms/AdminSideBar';
import AdminHeader from '../../components/perms/AdminHeader';
import CreatedBuildItem from '../../components/items/CreatedBuildItem';

const AdminScreen = () => {
    const [buildsList, setBuildsList] = useState([]);

    useEffect(() => {
        const fetchBuilds = async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/allbuilds`);
            const responseData = await response.json();
            console.log(responseData)
            if(responseData.length == 0){
                alert("No builds to show");
            }
            else {
                setBuildsList(responseData);
            }
        }

        fetchBuilds();
    }, [])
    return (
        <>
            <AdminHeader />
            <div className={styles.container}>
                <div className={styles.content}>
                    {buildsList != null && buildsList.map((item) => <CreatedBuildItem build={item} />)}
                </div>
                <div className={styles.sideBar}>
                    <AdminSideBar item={"builds"}/>
                </div>
            </div>
        </>
    );
}

export default AdminScreen;