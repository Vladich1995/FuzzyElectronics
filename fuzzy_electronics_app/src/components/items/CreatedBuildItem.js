import styles from './CreatedBuildItem.module.css';

const CreatedBuildItem = (props) => {
    return (
        <div className={styles.container}>
            <label>{props.build.buildType}</label>
        </div>
    );
}

export default CreatedBuildItem;