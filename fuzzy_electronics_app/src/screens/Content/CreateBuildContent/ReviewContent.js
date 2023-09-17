import { useEffect, useState } from 'react';
import styles from './ReviewContent.module.css';
import { useBuild } from '../../../components/Contexts/BuildContext';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaShekelSign } from 'react-icons/fa';

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

    const [total, setTotal] = useState(() => {
      let sum = 0;
      cases.forEach(element => {
        sum += parseInt(element.Price);
      });
      capacity.forEach(element => {
        sum += parseInt(element.Price);
      });
      MB.forEach(element => {
        sum += parseInt(element.Price);
      });
      memory.forEach(element => {
        sum += parseInt(element.Price);
      });
      CPU.forEach(element => {
        sum += parseInt(element.Price);
      });
      PCSystem.forEach(element => {
        sum += parseInt(element.Price);
      });
      peripherals.forEach(element => {
        sum += parseInt(element.Price);
      });
      PSU.forEach(element => {
        sum += parseInt(element.Price);
      });
      VGA.forEach(element => {
        sum += parseInt(element.Price);
      });
      return sum;
    })

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
              removeData();
              navigate('/admin');
            }
      } catch (error) {
        console.log(error);
      }
    }


   const cancelCreateHandler = () => {
    removeData();
    navigate('/admin');
   }

    return (
        <>
            <div className={styles.content}>
              <label className={styles.title}>Cases related items:</label>
              {cases != null && cases.map((item) =>               
              <div>
                <img className={styles.image} src={item.PictureURL} />
                <p>{item.Description}</p> 
                <p>{item.Price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Capacity related items:</label>
              {capacity != null && capacity.map((item) =>               
              <div>
                <img className={styles.image} src={item.PictureURL} />
                <p>{item.Description}</p> 
                <p>{item.Price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Motherboard related items:</label>
              {MB != null && MB.map((item) =>               
              <div>
                <img className={styles.image} src={item.PictureURL} />
                <p>{item.Description}</p>
                <p>{item.Price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Memory related items:</label>
              {memory != null && memory.map((item) =>               
              <div>
                <img className={styles.image} src={item.PictureURL} />
                <p>{item.Description}</p> 
                <p>{item.Price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>CPU related items:</label>
              {CPU != null && CPU.map((item) =>               
              <div>
                <img className={styles.image} src={item.PictureURL} />
                <p>{item.Description}</p> 
                <p>{item.Price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>PC System related items:</label>
              {PCSystem != null && PCSystem.map((item) =>               
              <div>
                <img className={styles.image} src={item.PictureURL} />
                <p>{item.Description}</p> 
                <p>{item.Price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Peripherals related items:</label>
              {peripherals != null && peripherals.map((item) =>               
              <div>
                <img className={styles.image} src={item.PictureURL} />
                <p>{item.Description}</p> 
                <p>{item.Price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>PSU related items:</label>
              {PSU != null && PSU.map((item) =>               
              <div>
                <img className={styles.image} src={item.PictureURL} />
                <p>{item.Description}</p> 
                <p>{item.Price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Graphics card related items:</label>
              {VGA != null && VGA.map((item) => 
              <div>
                <img className={styles.image} src={item.PictureURL} />
                <p>{item.Description}</p> 
                <p>{item.Price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Total deal sum:{total}<FaShekelSign /></label>
            </div>
            
            <div className={styles.buttonsArea}>
                <Button onClick={createBuildHandler} variant="success">Create build</Button>
                <Button onClick={cancelCreateHandler} style={{marginTop: "2vh"}} variant="outline-danger">Cancel</Button>
            </div>
            
        </>
    );
}

export default ReviewContent;