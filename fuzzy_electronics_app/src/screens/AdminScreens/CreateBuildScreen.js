import styles from './CreateBuildScreen.module.css';
import { useState } from 'react';
import AdminSideBar from '../../components/perms/AdminSideBar';
import AdminHeader from '../../components/perms/AdminHeader';
import AdminProgressBar from '../../components/perms/AdminProgressBar';
import SelectTypeContent from '../Content/CreateBuildContent/SelectTypeContent';
import SelectCasesContent from '../Content/CreateBuildContent/SelectCasesContent';
import SelectCapacityContent from '../Content/CreateBuildContent/SelectCapacityContent';
import SelectMBContent from '../Content/CreateBuildContent/SelectMBContent';
import SelectCPUContent from '../Content/CreateBuildContent/SelectCPUContent';
import SelectVGAContent from '../Content/CreateBuildContent/SelectVGAContent';
import SelectPCSystemContent from '../Content/CreateBuildContent/SelectPCSystemContent';
import SelectMemoryContent from '../Content/CreateBuildContent/SelectMemoryContent';
import SelectPSUContent from '../Content/CreateBuildContent/SelectPSUContent';
import SelectPeripheralsContent from '../Content/CreateBuildContent/SelectPeripheralsContent';
import ReviewContent from '../Content/CreateBuildContent/ReviewContent';
import { useEffect } from 'react';
import { useBuild } from '../../components/Contexts/BuildContext';

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
    const {addStage, getStage} = useBuild();
    const [stage, setStage] = useState(() => {
        const currentStage = getStage();
        return currentStage;
    });
    const [toRender, setToRender] = useState(null);

    useEffect(() => {
        switch(stage){
            case 1:
                setToRender(<SelectTypeContent inc={incStage} />);
                setTypeComplete('info');
                break;
            case 2:
                setToRender(<SelectCasesContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('info');
                break;
            case 3:
                setToRender(<SelectCapacityContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('info');
                break;
            case 4:
                setToRender(<SelectMBContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                setMBComplete('info');
                break;
            case 5:
                setToRender(<SelectCPUContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                setMBComplete('success');
                setCPUComplete('info');
                break;
            case 6:
                setToRender(<SelectVGAContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                setMBComplete('success');
                setCPUComplete('success');
                setVGAComplete('info');
                break;
            case 7:
                setToRender(<SelectPCSystemContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                setMBComplete('success');
                setCPUComplete('success');
                setVGAComplete('success');
                setPCSystemComplete('info');
                break;
            case 8:
                setToRender(<SelectMemoryContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                setMBComplete('success');
                setCPUComplete('success');
                setVGAComplete('success');
                setPCSystemComplete('success');
                setMemoryComplete('info');
                break;
            case 9:
                setToRender(<SelectPSUContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                setMBComplete('success');
                setCPUComplete('success');
                setVGAComplete('success');
                setPCSystemComplete('success');
                setMemoryComplete('success');
                setPSUComplete('info');
                break;
            case 10:
                setToRender(<SelectPeripheralsContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                setMBComplete('success');
                setCPUComplete('success');
                setVGAComplete('success');
                setPCSystemComplete('success');
                setMemoryComplete('success');
                setPSUComplete('success');
                setPeripheralsComplete('info');
                break;
            case 11:
                setToRender(<ReviewContent />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                setMBComplete('success');
                setCPUComplete('success');
                setVGAComplete('success');
                setPCSystemComplete('success');
                setMemoryComplete('success');
                setPSUComplete('success');
                setPeripheralsComplete('success');
                setReviewComplete('info');
                break;

        }
    }, [stage])

    const incStage = () => {
        setStage(stage + 1);
        addStage();
    }


    return (
        <>
            <AdminHeader />
            <div style={{width: '85vw'}}>
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
            <div className={styles.container}>
                <div className={styles.content}>
                    {toRender}
                </div>
                <div className={styles.sideBar}>
                    <AdminSideBar item={"createBuild"} />
                </div>
            </div>
        </>
    );
}

export default CreateBuildScreen;