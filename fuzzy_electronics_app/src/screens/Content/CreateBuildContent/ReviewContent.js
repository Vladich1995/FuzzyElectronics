import { useEffect, useState } from 'react';
import styles from './ReviewContent.module.css';
import { useBuild } from '../../../components/Contexts/BuildContext';
import { useNavigate } from 'react-router-dom';

const ReviewContent = () => {
    const {getBuildType,getCases,getCapacity,getMB,getMemory,getCPU,getPCSystem,getPeripherals,getPSU,getVGA, removeData} = useBuild();
    const navigate = useNavigate();

    const [buildType, setBuildType] = useState(() => {
        const storedBuildType = getBuildType();
        return storedBuildType;
    });

    const [cases, setCases] = useState(() => {
        const storedCases = getCases();
        return storedCases;
    });

    const [capacity, setCapacity] = useState(() => {
        const storedCapacity = getCapacity();
        return storedCapacity;
    });

    const [MB, setMB] = useState(() => {
        const storedMB = getMB();
        return storedMB;
    });

    const [memory, setMemory] = useState(() => {
        const storedMemory = getMemory();
        return storedMemory;
    });

    const [CPU, setCPU] = useState(() => {
        const storedCPU = getCPU();
        return storedCPU;
    });

    const [PCSystem, setPCSystem] = useState(() => {
        const storedPCSystem = getPCSystem();
        return storedPCSystem;
    });

    const [peripherals, setPeripherals] = useState(() => {
        const storedPeripherals = getPeripherals();
        return storedPeripherals;
    });

    const [PSU, setPSU] = useState(() => {
        const storedPSU = getPSU();
        return storedPSU;
    });

    const [VGA, setVGA] = useState(() => {
        const storedVGA = getVGA();
        return storedVGA;
    });



    const createBuildHandler = async () => {
        try {
            const response = await fetch('https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/CreateBuild', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                BuildType: buildType,
                Cases: cases,
                Capacity: capacity,
                CPU: CPU,
                MB: MB,
                Memory: memory,
                PCSystem: PCSystem,
                Peripherals: peripherals,
                PSU: PSU,
                VGA: VGA
              }),
            });
            if(response.status == 200){
              alert("Build created")
              removeUnusedData();
            }
      } catch (error) {
        console.log(error);
      }
    }


    const removeUnusedData = async () => {
        try {
            const response = await fetch(`https://gatewayapiserv.azurewebsites.net/ProductsAPI/api/v1/Products/subtype?type=${buildType}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            if(response.status == 200){
              alert("Type substracted")
              removeData();
              navigate('/createbuild');
            }
      } catch (error) {
        console.log(error);
      }
    }


    console.log(
        JSON.stringify({
            BuildType: buildType,
            Cases: cases,
            Capacity: capacity,
            CPU: CPU,
            MB: MB,
            Memory: memory,
            PCSystem: PCSystem,
            Peripherals: peripherals,
            PSU: PSU,
            VGA: VGA
          })
    )

    return (
        <>
            <button onClick={createBuildHandler} type="button">Create Build</button>
        </>
    );
}

export default ReviewContent;