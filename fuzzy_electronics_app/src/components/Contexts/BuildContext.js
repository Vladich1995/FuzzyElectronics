import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';


const BuildContext = createContext();

export function BuildProvider({ children }) {

  const [stage, setStage] = useState(() => {
    const storedStage = localStorage.getItem('stage') || sessionStorage.getItem('stage');
    return storedStage ? JSON.parse(storedStage) : 1;
  })

  const [buildType, setBuildType] = useState(() => {
    const storedType = localStorage.getItem('buildType') || sessionStorage.getItem('buildType');
    return storedType ? JSON.parse(storedType) : null;
  })

  const [cases, setCases] = useState(() => {
    const storedCases = localStorage.getItem('buildCases') || sessionStorage.getItem('buildCases');
    return storedCases ? JSON.parse(storedCases) : [];
  });

  const [capacity, setCapacity] = useState(() => {
    const storedCapacity = localStorage.getItem('buildCapacity') || sessionStorage.getItem('buildCapacity');
    return storedCapacity ? JSON.parse(storedCapacity) : [];
  });

  const [CPU, setCPU] = useState(() => {
    const storedCPU = localStorage.getItem('buildCPU') || sessionStorage.getItem('buildCPU');
    return storedCPU ? JSON.parse(storedCPU) : [];
  });

  const [MB, setMB] = useState(() => {
    const storedMB = localStorage.getItem('buildMB') || sessionStorage.getItem('buildMB');
    return storedMB ? JSON.parse(storedMB) : [];
  });

  const [memory, setMemory] = useState(() => {
    const storedMemory = localStorage.getItem('buildMemory') || sessionStorage.getItem('buildMemory');
    return storedMemory ? JSON.parse(storedMemory) : [];
  });

  const [PCSystem, setPCSystem] = useState(() => {
    const storedPCSystem = localStorage.getItem('buildPCSystem') || sessionStorage.getItem('buildPCSystem');
    return storedPCSystem ? JSON.parse(storedPCSystem) : [];
  });

  const [peripherals, setPeripherals] = useState(() => {
    const storedPeripherals = localStorage.getItem('buildPeripherals') || sessionStorage.getItem('buildPeripherals');
    return storedPeripherals ? JSON.parse(storedPeripherals) : [];
  });

  const [PSU, setPSU] = useState(() => {
    const storedPSU = localStorage.getItem('buildPSU') || sessionStorage.getItem('buildPSU');
    return storedPSU ? JSON.parse(storedPSU) : [];
  });

  const [VGA, setVGA] = useState(() => {
    const storedVGA = localStorage.getItem('buildVGA') || sessionStorage.getItem('buildVGA');
    return storedVGA ? JSON.parse(storedVGA) : [];
  });


  const getBuildType = () => {
    return buildType;
  }

  const addBuildType = (type) => {
    setBuildType(() => {
      localStorage.setItem('buildType', JSON.stringify(type));
      sessionStorage.setItem('buildCType', JSON.stringify(type));
      return type;
    })
  }

  const getCases = () => {
    return cases;
  }

  const addCase = (item) => {
    setCases((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('buildCases', JSON.stringify(updatedList));
        sessionStorage.setItem('buildCases', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getCapacity = () => {
    return capacity;
  }

  const addCapacity= (item) => {
    setCapacity((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('buildCapacity', JSON.stringify(updatedList));
        sessionStorage.setItem('buildCapacity', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getCPU = () => {
    return CPU;
  }

  const addCPU= (item) => {
    setCPU((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('buildCPU', JSON.stringify(updatedList));
        sessionStorage.setItem('buildCPU', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getMB = () => {
    return MB;
  }

  const addMB= (item) => {
    setMB((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('buildMB', JSON.stringify(updatedList));
        sessionStorage.setItem('buildMB', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getMemory = () => {
    return memory;
  }

  const addMemory= (item) => {
    setMemory((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('buildMemory', JSON.stringify(updatedList));
        sessionStorage.setItem('buildMemory', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getPCSystem = () => {
    return PCSystem;
  }

  const addPCSystem= (item) => {
    setPCSystem((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('buildPCSystem', JSON.stringify(updatedList));
        sessionStorage.setItem('buildPCSystem', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getPeripherals = () => {
    return peripherals;
  }

  const addPeripherals= (item) => {
    setPeripherals((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('buildPeripherals', JSON.stringify(updatedList));
        sessionStorage.setItem('buildPeripherals', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getPSU = () => {
    return PSU;
  }

  const addPSU= (item) => {
    setPSU((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('buildPSU', JSON.stringify(updatedList));
        sessionStorage.setItem('buildPSU', JSON.stringify(updatedList));
        return [...prevList, item];
    })
  }

  const getVGA = () => {
    return VGA;
  }

  const addVGA = (item) => {
    setVGA((prevList) => {
        const updatedList = [...prevList, item];
        localStorage.setItem('buildVGA', JSON.stringify(updatedList));
        sessionStorage.setItem('buildVGA', JSON.stringify(updatedList));
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

  const removeData = () => {
    localStorage.removeItem('buildType');
    sessionStorage.removeItem('buildType');

    localStorage.removeItem('buildCases');
    sessionStorage.removeItem('buildCases');

    localStorage.removeItem('buildCapacity');
    sessionStorage.removeItem('buildCapacity');

    localStorage.removeItem('buildMB');
    sessionStorage.removeItem('buildMB');

    localStorage.removeItem('buildCPU');
    sessionStorage.removeItem('buildCPU');

    localStorage.removeItem('buildMemory');
    sessionStorage.removeItem('buildMemory');

    localStorage.removeItem('buildPCSystem');
    sessionStorage.removeItem('buildPCSystem');

    localStorage.removeItem('buildPeripherals');
    sessionStorage.removeItem('buildPeripherals');

    localStorage.removeItem('buildPSU');
    sessionStorage.removeItem('buildPSU');

    localStorage.removeItem('buildVGA');
    sessionStorage.removeItem('buildVGA');

    localStorage.removeItem('stage');
    sessionStorage.removeItem('stage');
  }


  



  return (
    <BuildContext.Provider value={{ 
        getStage, addStage, 
        getBuildType, addBuildType,
        getCases, addCase,
        getCapacity, addCapacity,
        getMB, addMB, 
        getMemory, addMemory, 
        getCPU, addCPU,
        getPCSystem, addPCSystem,
        getPeripherals, addPeripherals,
        getPSU, addPSU,
        getVGA, addVGA,
        removeData }}>
      {children}
    </BuildContext.Provider>
  );
}

export function useBuild() {
  return useContext(BuildContext);
}
