import styles from './CreateBuildScreen.module.css';
import AdminSideBar from '../../components/perms/AdminSideBar';
import AdminHeader from '../../components/perms/AdminHeader';
import AdminProgressBar from '../../components/perms/AdminProgressBar';
import { useState } from 'react';

const CreateBuildScreen = () => {
    const [typeComplete, setTypeComplete] = useState("warning");
    const [casesComplete, setCasesComplete] = useState("warning");
    const [capacityComplete, setCapacityComplete] = useState("warning");
    const [MBComplete, setMBComplete] = useState("warning");
    const [CPUComplete, setCPUComplete] = useState("warning");
    const [VGAComplete, setVGAComplete] = useState("warning");
    const [PCSystemComplete, setPCSystemComplete] = useState("warning");
    const [memoryComplete, setMemoryComplete] = useState("warning");
    const [PSUComplete, setPSUComplete] = useState("warning");
    const [peripheralsComplete, setPeripheralsComplete] = useState("warning");
    const [reviewComplete, setReviewComplete] = useState("warning");

    return (
        <>
            <AdminHeader />
            <div className={styles.container}>
                <div className={styles.content}>
                    <AdminProgressBar 
                        typeComplete={typeComplete} 
                        casesComplete={casesComplete} 
                        capacityComplete={capacityComplete} 
                        CPUComplete={CPUComplete}
                        MBComplete={MBComplete}
                        VGAComplete={VGAComplete}
                        PCSystemComplete={PCSystemComplete}
                        memoryComplete={memoryComplete}
                        PSUComplete={PSUComplete}
                        peripheralsComplete={peripheralsComplete}
                        reviewComplete={reviewComplete}
                    />
                </div>
                
                <div className={styles.sideBar}>
                    <AdminSideBar item={"createBuild"} />
                </div>
            </div>
        </>
    );
}

export default CreateBuildScreen;