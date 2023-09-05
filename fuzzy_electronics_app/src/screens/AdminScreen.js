import styles from './AdminScreen.module.css';
import Header from '../components/Header';
import AdminSidebar from '../components/sidebars/AdminSidebar';
import AdminPageContent from '../components/containers/AdminPageContent';
import { useState } from 'react';

const AdminScreen = () => {
    const [content, setContent] = useState("CreateBuild");

    const chooseContentHandler = (content) => {
        setContent(content);
    }

    return (
        <div className={styles.container}>
            <Header />
            <AdminSidebar onChoose={chooseContentHandler} />
            <AdminPageContent contentToShow={content} />
        </div>
    );
}

export default AdminScreen;