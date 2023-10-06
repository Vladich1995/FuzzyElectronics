import styles from './SuggestedBuild.module.css';
import { useEffect, useState } from 'react';
import SuggestedBuildItem from '../../../components/items/SuggestedBuildItem';

const SuggestedBuild = (props) => {
    const [build, setBuild] = useState(null);

    useEffect(() => {
        const getBuild = async () => {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/GetBuild?type=${props.buildType}`);
            const responseData = await response.json();
            props.storeBuild(responseData);
            setBuild(responseData);
        }

        getBuild();
    }, [])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.buildContainer}>
                    {build != null &&<SuggestedBuildItem build={build} />}
                </div>
            </div>
        </>
    )

}

export default SuggestedBuild;