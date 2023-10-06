import { useEffect, useState } from 'react';
import styles from './ReviewContent.module.css';
import { useBuild } from '../../../components/Contexts/BuildContext';
import { useCart } from '../../../components/Contexts/CartContext';
import { useAuth } from '../../../components/Contexts/AuthContext';
import { useCustomerBuild } from '../../../components/Contexts/CustomerBuildContext';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaShekelSign } from 'react-icons/fa';

const ReviewContent = (props) => {
    const {getBuildType,getCases,getCapacity,getMB,getMemory,getCPU,getPCSystem,getPeripherals,getPSU,getVGA, removeData} = useBuild();
    const {getCustomerCases,getCustomerCapacity,getCustomerMB,getCustomerMemory,getCustomerCPU,getCustomerPCSystem,getCustomerPeripherals,getCustomerPSU,getCustomerVGA, removeCustomerData} = useCustomerBuild();
    const navigate = useNavigate();
    const { addProduct } = useCart();
    const { getUser} = useAuth();

    const [buildType, setBuildType] = useState(() => {
        const storedBuildType = getBuildType();
        return storedBuildType;
    });

    const [cases, setCases] = useState(() => {
        const storedCases = props.forCustomer == null ? getCases() : getCustomerCases();
        return storedCases;
    });


    const [capacity, setCapacity] = useState(() => {
        const storedCapacity = props.forCustomer == null ? getCapacity() : getCustomerCapacity();
        return storedCapacity;
    });

    const [MB, setMB] = useState(() => {
        const storedMB = props.forCustomer == null ? getMB() : getCustomerMB();
        return storedMB;
    });

    const [memory, setMemory] = useState(() => {
        const storedMemory = props.forCustomer == null ? getMemory() : getCustomerMemory();
        return storedMemory;
    });

    const [CPU, setCPU] = useState(() => {
        const storedCPU = props.forCustomer == null ? getCPU() : getCustomerCPU();
        return storedCPU;
    });

    const [PCSystem, setPCSystem] = useState(() => {
        const storedPCSystem = props.forCustomer == null ? getPCSystem() : getCustomerPCSystem();
        return storedPCSystem;
    });

    const [peripherals, setPeripherals] = useState(() => {
        const storedPeripherals = props.forCustomer == null ? getPeripherals() : getCustomerPeripherals();
        return storedPeripherals;
    });

    const [PSU, setPSU] = useState(() => {
        const storedPSU = props.forCustomer == null ? getPSU() : getCustomerPSU();
        return storedPSU;
    });

    const [VGA, setVGA] = useState(() => {
        const storedVGA = props.forCustomer == null ? getVGA() : getCustomerVGA();
        return storedVGA;
    });

    const [total, setTotal] = useState(() => {
      let sum = 0;
      cases.forEach(element => {
        sum += parseInt(element.price);
      });
      capacity.forEach(element => {
        sum += parseInt(element.price);
      });
      MB.forEach(element => {
        sum += parseInt(element.price);
      });
      memory.forEach(element => {
        sum += parseInt(element.price);
      });
      CPU.forEach(element => {
        sum += parseInt(element.price);
      });
      PCSystem.forEach(element => {
        sum += parseInt(element.price);
      });
      peripherals.forEach(element => {
        sum += parseInt(element.price);
      });
      PSU.forEach(element => {
        sum += parseInt(element.price);
      });
      VGA.forEach(element => {
        sum += parseInt(element.price);
      });
      return sum;
    })

    const createBuildHandler = async () => {
      if(props.forCustomer == null){
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
      else {
        const build = {
          cases,
          capacity,
          CPU,
          MB,
          memory,
          PCSystem,
          peripherals,
          PSU,
          VGA
        }
        for (const key in build) {
          if (build.hasOwnProperty(key)) {
            const currentList = build[key];
            // Iterate through the elements of each list
            if(Array.isArray(build[key])){
              for (const item of currentList) {
                  addProduct(item, 'build');
                }
            }
          }
        }
        removeCustomerData();
        if(getUser() == null){
          navigate('/');
        }
        else {
          navigate('/home');
        }
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
    if(props.forCustomer == null){
      removeData();
      navigate('/admin');
    }
    else {
      removeCustomerData();
      if(getUser() == null){
        navigate('/');
      }
      else {
        navigate('/home');
      }
    }
   }

    return (
        <>
            <div className={styles.content}>
              <label className={styles.title}>Cases related items:</label>
              {cases != null && cases.map((item) =>               
              <div>
                <img className={styles.image} src={item.pictureURL} />
                <p>{item.description}</p> 
                <p>{item.price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Capacity related items:</label>
              {capacity != null && capacity.map((item) =>               
              <div>
                <img className={styles.image} src={item.pictureURL} />
                <p>{item.description}</p> 
                <p>{item.price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Motherboard related items:</label>
              {MB != null && MB.map((item) =>               
              <div>
                <img className={styles.image} src={item.pictureURL} />
                <p>{item.description}</p>
                <p>{item.price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Memory related items:</label>
              {memory != null && memory.map((item) =>               
              <div>
                <img className={styles.image} src={item.pictureURL} />
                <p>{item.description}</p> 
                <p>{item.price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>CPU related items:</label>
              {CPU != null && CPU.map((item) =>               
              <div>
                <img className={styles.image} src={item.pictureURL} />
                <p>{item.description}</p> 
                <p>{item.price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>PC System related items:</label>
              {PCSystem != null && PCSystem.map((item) =>               
              <div>
                <img className={styles.image} src={item.pictureURL} />
                <p>{item.description}</p> 
                <p>{item.price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Peripherals related items:</label>
              {peripherals != null && peripherals.map((item) =>               
              <div>
                <img className={styles.image} src={item.pictureURL} />
                <p>{item.description}</p> 
                <p>{item.price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>PSU related items:</label>
              {PSU != null && PSU.map((item) =>               
              <div>
                <img className={styles.image} src={item.pictureURL} />
                <p>{item.description}</p> 
                <p>{item.price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Graphics card related items:</label>
              {VGA != null && VGA.map((item) => 
              <div>
                <img className={styles.image} src={item.pictureURL} />
                <p>{item.description}</p> 
                <p>{item.price} <FaShekelSign /></p> 
              </div>)}
              <label className={styles.title}>Total deal sum:{total}<FaShekelSign /></label>
            </div>
            
            <div className={styles.buttonsArea}>
                {props.forCustomer == null ? <Button onClick={createBuildHandler} variant="success">Create build</Button>
                :<Button onClick={createBuildHandler} variant="success">Add build to Cart</Button>}
                <Button onClick={cancelCreateHandler} style={{marginTop: "2vh"}} variant="outline-danger">Cancel</Button>
            </div>
            
        </>
    );
}

export default ReviewContent;