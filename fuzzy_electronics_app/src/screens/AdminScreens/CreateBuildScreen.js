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
                break;
            case 2:
                setToRender(<SelectCasesContent inc={incStage} />);
                changeTypeComplete();
                break;
            case 3:
                setToRender(<SelectCapacityContent inc={incStage} />);
                setTypeComplete('success');
                changeCasesComplete();
                break;
            case 4:
                setToRender(<SelectMBContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                changeCapacityComplete();
                break;
            case 5:
                setToRender(<SelectCPUContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                changeMBComplete();
                break;
            case 6:
                setToRender(<SelectVGAContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                setMBComplete('success');
                changeCPUComplete();
                break;
            case 7:
                setToRender(<SelectPCSystemContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                setMBComplete('success');
                setCPUComplete('success');
                changeVGAComplete();
                break;
            case 8:
                setToRender(<SelectMemoryContent inc={incStage} />);
                setTypeComplete('success');
                setCasesComplete('success');
                setCapacityComplete('success');
                setMBComplete('success');
                setCPUComplete('success');
                setVGAComplete('success');
                changePCSystemComplete();
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
                changeMemoryComplete();
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
                changePSUComplete();
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
                changePeripheralsComplete();
                break;

        }
    }, [stage])

    const incStage = () => {
        setStage(stage + 1);
        addStage();
    }

    const changeTypeComplete = () => {
        if(typeComplete == 'warning'){
            setTypeComplete('success');
        }
        else if(typeComplete == 'success'){
            setTypeComplete('warning');
        }
    }

    const changeCasesComplete = () => {
        if(casesComplete == 'warning'){
            setCasesComplete('success');
        }
        else if(casesComplete == 'success'){
            setCasesComplete('warning');
        }
    }

    const changeCapacityComplete = () => {
        if(capacityComplete == 'warning'){
            setCapacityComplete('success');
        }
        else if(capacityComplete == 'success'){
            setCapacityComplete('warning');
        }
    }

    const changeMBComplete = () => {
        if(MBComplete == 'warning'){
            setMBComplete('success');
        }
        else if(MBComplete == 'success'){
            setMBComplete('warning');
        }
    }

    const changeCPUComplete = () => {
        if(CPUComplete == 'warning'){
            setCPUComplete('success');
        }
        else if(CPUComplete == 'success'){
            setCPUComplete('warning');
        }
    }

    const changeVGAComplete = () => {
        if(VGAComplete == 'warning'){
            setVGAComplete('success');
        }
        else if(VGAComplete == 'success'){
            setVGAComplete('warning');
        }
    }
    
    const changePCSystemComplete = () => {
        if(PCSystemComplete == 'warning'){
            setPCSystemComplete('success');
        }
        else if(PCSystemComplete == 'success'){
            setPCSystemComplete('warning');
        }
    }

    const changeMemoryComplete = () => {
        if(memoryComplete == 'warning'){
            setMemoryComplete('success');
        }
        else if(memoryComplete == 'success'){
            setMemoryComplete('warning');
        }
    }

    const changePSUComplete = () => {
        if(PSUComplete == 'warning'){
            setPSUComplete('success');
        }
        else if(PSUComplete == 'success'){
            setPSUComplete('warning');
        }
    }

    const changePeripheralsComplete = () => {
        if(peripheralsComplete == 'warning'){
            setPeripheralsComplete('success');
        }
        else if(peripheralsComplete == 'success'){
            setPeripheralsComplete('warning');
        }
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