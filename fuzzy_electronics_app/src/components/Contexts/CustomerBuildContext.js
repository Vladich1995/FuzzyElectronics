import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';


const CustomerBuildContext = createContext();

export function CustomerBuildProvider({ children }) {

  const [stage, setStage] = useState(() => {
    const storedStage = localStorage.getItem('stage') || sessionStorage.getItem('stage');
    return storedStage ? JSON.parse(storedStage) : 1;
  })

  const [cases, setCases] = useState(() => {
    const storedCases = localStorage.getItem('customerBuildCases') || sessionStorage.getItem('customerBuildCases');
    return storedCases ? JSON.parse(storedCases) : [];
  });

  const [capacity, setCapacity] = useState(() => {
    const storedCapacity = localStorage.getItem('customerBuildCapacity') || sessionStorage.getItem('customerBuildCapacity');
    return storedCapacity ? JSON.parse(storedCapacity) : [];
  });

  const [CPU, setCPU] = useState(() => {
    const storedCPU = localStorage.getItem('customerBuildCPU') || sessionStorage.getItem('customerBuildCPU');
    return storedCPU ? JSON.parse(storedCPU) : [];
  });

  const [MB, setMB] = useState(() => {
    const storedMB = localStorage.getItem('customerBuildMB') || sessionStorage.getItem('customerBuildMB');
    return storedMB ? JSON.parse(storedMB) : [];
  });

  const [memory, setMemory] = useState(() => {
    const storedMemory = localStorage.getItem('customerBuildMemory') || sessionStorage.getItem('customerBuildMemory');
    return storedMemory ? JSON.parse(storedMemory) : [];
  });

  const [PCSystem, setPCSystem] = useState(() => {
    const storedPCSystem = localStorage.getItem('customerBuildPCSystem') || sessionStorage.getItem('customerBuildPCSystem');
    return storedPCSystem ? JSON.parse(storedPCSystem) : [];
  });

  const [peripherals, setPeripherals] = useState(() => {
    const storedPeripherals = localStorage.getItem('customerBuildPeripherals') || sessionStorage.getItem('customerBuildPeripherals');
    return storedPeripherals ? JSON.parse(storedPeripherals) : [];
  });

  const [PSU, setPSU] = useState(() => {
    const storedPSU = localStorage.getItem('customerBuildPSU') || sessionStorage.getItem('customerBuildPSU');
    return storedPSU ? JSON.parse(storedPSU) : [];
  });

  const [VGA, setVGA] = useState(() => {
    const storedVGA = localStorage.getItem('customerBuildVGA') || sessionStorage.getItem('customerBuildVGA');
    return storedVGA ? JSON.parse(storedVGA) : [];
  });



  const getCustomerCases = () => {
    return cases;
  }

  const addCustomerCase = (item) => {
    setCases((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('customerBuildCases', JSON.stringify(updatedList));
        sessionStorage.setItem('customerBuildCases', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getCustomerCapacity = () => {
    return capacity;
  }

  const addCustomerCapacity= (item) => {
    setCapacity((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('customerBuildCapacity', JSON.stringify(updatedList));
        sessionStorage.setItem('customerBuildCapacity', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getCustomerCPU = () => {
    return CPU;
  }

  const addCustomerCPU= (item) => {
    setCPU((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('customerBuildCPU', JSON.stringify(updatedList));
        sessionStorage.setItem('customerBuildCPU', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getCustomerMB = () => {
    return MB;
  }

  const addCustomerMB= (item) => {
    setMB((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('customerBuildMB', JSON.stringify(updatedList));
        sessionStorage.setItem('customerBuildMB', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getCustomerMemory = () => {
    return memory;
  }

  const addCustomerMemory= (item) => {
    setMemory((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('customerBuildMemory', JSON.stringify(updatedList));
        sessionStorage.setItem('customerBuildMemory', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getCustomerPCSystem = () => {
    return PCSystem;
  }

  const addCustomerPCSystem= (item) => {
    setPCSystem((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('customerBuildPCSystem', JSON.stringify(updatedList));
        sessionStorage.setItem('customerBuildPCSystem', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getCustomerPeripherals = () => {
    return peripherals;
  }

  const addCustomerPeripherals= (item) => {
    setPeripherals((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('customerBuildPeripherals', JSON.stringify(updatedList));
        sessionStorage.setItem('customerBuildPeripherals', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getCustomerPSU = () => {
    return PSU;
  }

  const addCustomerPSU= (item) => {
    setPSU((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('customerBuildPSU', JSON.stringify(updatedList));
        sessionStorage.setItem('customerBuildPSU', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getCustomerVGA = () => {
    return VGA;
  }

  const addCustomerVGA = (item) => {
    setVGA((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('customerBuildVGA', JSON.stringify(updatedList));
        sessionStorage.setItem('customerBuildVGA', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getStage = () => {
    return stage;
  }

  const addStage = () => {
    setStage(() => {
      const updatedStage = stage + 1;
      localStorage.setItem('stage', JSON.stringify(updatedStage));
      sessionStorage.setItem('stage', JSON.stringify(updatedStage));
      return updatedStage;
    })
  }

  const removeCustomerData = () => {

    localStorage.removeItem('customerBuildCases');
    sessionStorage.removeItem('customerBuildCases');

    localStorage.removeItem('customerBuildCapacity');
    sessionStorage.removeItem('customerBuildCapacity');

    localStorage.removeItem('customerBuildMB');
    sessionStorage.removeItem('customerBuildMB');

    localStorage.removeItem('customerBuildCPU');
    sessionStorage.removeItem('customerBuildCPU');

    localStorage.removeItem('customerBuildMemory');
    sessionStorage.removeItem('customerBuildMemory');

    localStorage.removeItem('customerBuildPCSystem');
    sessionStorage.removeItem('customerBuildPCSystem');

    localStorage.removeItem('customerBuildPeripherals');
    sessionStorage.removeItem('customerBuildPeripherals');

    localStorage.removeItem('customerBuildPSU');
    sessionStorage.removeItem('customerBuildPSU');

    localStorage.removeItem('customerBuildVGA');
    sessionStorage.removeItem('customerBuildVGA');

    localStorage.removeItem('stage');
    sessionStorage.removeItem('stage');
  }


  



  return (
    <CustomerBuildContext.Provider value={{ 
        getStage, addStage, 
        getCustomerCases, addCustomerCase,
        getCustomerCapacity, addCustomerCapacity,
        getCustomerMB, addCustomerMB, 
        getCustomerMemory, addCustomerMemory, 
        getCustomerCPU, addCustomerCPU,
        getCustomerPCSystem, addCustomerPCSystem,
        getCustomerPeripherals, addCustomerPeripherals,
        getCustomerPSU, addCustomerPSU,
        getCustomerVGA, addCustomerVGA,
        removeCustomerData }}>
      {children}
    </CustomerBuildContext.Provider>
  );
}

export function useCustomerBuild() {
  return useContext(CustomerBuildContext);
}
