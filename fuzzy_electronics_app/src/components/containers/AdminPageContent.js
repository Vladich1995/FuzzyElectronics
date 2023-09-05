import styles from './AdminPageContent.module.css';
import CreateBuildContent from '../adminContent/CreateBuildContent';

const AdminPageContent = (props) => {

    return (
        <div className={styles.container}>
            {props.contentToShow === "CreateBuild" && <CreateBuildContent />}
        </div>
    );
}

export default AdminPageContent;