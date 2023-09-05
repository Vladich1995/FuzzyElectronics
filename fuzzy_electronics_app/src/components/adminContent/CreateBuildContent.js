import { useSearchParams } from 'react-router-dom';
import styles from './CreateBuildContent.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../cards/ProductCard';
import ProductForBuild from '../cards/ProductForBuild';

const CreateBuildContent = (props) => {
    const [showProductCard, setShowProductCard] = useState(null);
    const [openReview, setOpenReview] = useState(false);
    const[casesList, setCasesList] = useState(null);
    const[mbList, setMBList] = useState(null);
    const[memoryList, setMemoryList] = useState(null);
    const[cpuList, setCPUList] = useState(null);
    const[vgaList, setVGAList] = useState(null);
    const[pcsystemList, setPCSystemList] = useState(null);
    const[psuList, setPSUList] = useState(null);
    const[capacityList, setCapacityList] = useState(null);
    const[peripheralsList, setPeripheralsList] = useState(null);
    const[fullBuild, setFullBuild] = useState({
        cases: [],
        mb: null,
        memory: null,
        cpu: [],
        vga: null,
        pcsystem: null,
        psu: null,
        capacity: null,
        peripherals: []
    });

    const [listToShow, setListToShow] = useState(casesList);

    useEffect(() => {
        const fetchLists = async () => {
            const responseCases = await axios.get(`https://localhost:7192/data/getProductsByCollection?collectionName=CasesCollection`);
            setCasesList(responseCases.data);
            const responseMB = await axios.get(`https://localhost:7192/data/getProductsByCollection?collectionName=MBCollection`);
            setMBList(responseMB.data);
            const responseMemory = await axios.get(`https://localhost:7192/data/getProductsByCollection?collectionName=MemoryCollection`);
            setMemoryList(responseMemory.data);
            const responseCPU = await axios.get(`https://localhost:7192/data/getProductsByCollection?collectionName=CPUCollection`);
            setCPUList(responseCPU.data);
            const responseVGA = await axios.get(`https://localhost:7192/data/getProductsByCollection?collectionName=VGACollection`);
            setVGAList(responseVGA.data);
            const responsePCSystem = await axios.get(`https://localhost:7192/data/getProductsByCollection?collectionName=PCSystemCollection`);
            setPCSystemList(responsePCSystem.data);
            const responsePSU = await axios.get(`https://localhost:7192/data/getProductsByCollection?collectionName=PSUCollection`);
            setPSUList(responsePSU.data);
            const responseCapacity= await axios.get(`https://localhost:7192/data/getProductsByCollection?collectionName=CapacityCollection`);
            setCapacityList(responseCapacity.data);
            const responsePeripherals = await axios.get(`https://localhost:7192/data/getProductsByCollection?collectionName=PeripheralsCollection`);
            setPeripheralsList(responsePeripherals.data);
        }
        fetchLists();
    }, [])

    const selectProductHandler = (product) => {
        setShowProductCard(product);
    }

    const dissmissProductHandler = () => {
        setShowProductCard(null);
    }

    const selectReviewHandler = () => {
        setListToShow(null);
        setShowProductCard(null);
        setOpenReview(true);
    }

    const addToBuildHandler = (product) => {
        switch(listToShow.name){
            case 'cases':
                setFullBuild(prevBuild => {
                    const updatedCasesList = [...prevBuild.cases];
                    updatedCasesList.push(product);
                    return {
                      ...prevBuild,
                      cases: updatedCasesList
                    };
                  });
                  break;
            case 'mb':
                setFullBuild(prevBuild => ({
                    ...prevBuild,
                    mb: product
                    }));
                    break;     
            case 'memory':
                setFullBuild(prevBuild => ({
                    ...prevBuild,
                    memory: product
                    }));
                    break;
            case 'cpu':
                setFullBuild(prevBuild => {
                    const updatedCPUList = [...prevBuild.cpu];
                    updatedCPUList.push(product);
                    return {
                      ...prevBuild,
                      cpu: updatedCPUList
                    };
                  });
                    break;
            case 'vga':
                setFullBuild(prevBuild => ({
                    ...prevBuild,
                    vga: product
                    }));
                    break;
            case 'pcsystem':
                setFullBuild(prevBuild => ({
                    ...prevBuild,
                    pcsystem: product
                    }));
                    break;
            case 'psu':
                setFullBuild(prevBuild => ({
                    ...prevBuild,
                    psu: product
                    }));
                    break;
            case 'capacity':
                setFullBuild(prevBuild => ({
                    ...prevBuild,
                    capacity: product
                    }));
                    break;
            case 'peripherals':
                setFullBuild(prevBuild => {
                    const updatedPeripheralsList = [...prevBuild.peripherals];
                    updatedPeripheralsList.push(product);
                    return {
                      ...prevBuild,
                      peripherals: updatedPeripheralsList
                    };
                  });
                    break;
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.progressTab}>
                <div className={`${styles.progressItem} ${fullBuild.cases.length > 0 ? styles.filled : styles.unfilled}`} onClick={() => setListToShow({list: casesList, name: 'cases'})}>Cases</div>
                <div className={`${styles.progressItem} ${fullBuild.mb ? styles.filled : styles.unfilled}`} onClick={() => setListToShow({list: mbList, name: 'mb'})}>MotherBoards</div>
                <div className={`${styles.progressItem} ${fullBuild.memory ? styles.filled : styles.unfilled}`} onClick={() => setListToShow({list: memoryList, name: 'memory'})}>Memory</div>
                <div className={`${styles.progressItem} ${fullBuild.cpu.length > 0 ? styles.filled : styles.unfilled}`} onClick={() => setListToShow({list: cpuList, name: 'cpu'})}>CPU</div>
                <div className={`${styles.progressItem} ${fullBuild.pcsystem ? styles.filled : styles.unfilled}`} onClick={() => setListToShow({list: pcsystemList, name: 'pcsystem'})}>PC Systems</div>
                <div className={`${styles.progressItem} ${fullBuild.vga ? styles.filled : styles.unfilled}`} onClick={() => setListToShow({list: vgaList, name: 'vga'})}>VGA</div>
                <div className={`${styles.progressItem} ${fullBuild.psu ? styles.filled : styles.unfilled}`} onClick={() => setListToShow({list: psuList, name: 'psu'})}>PSU</div>
                <div className={`${styles.progressItem} ${fullBuild.capacity ? styles.filled : styles.unfilled}`} onClick={() => setListToShow({list: capacityList, name: 'capacity'})}>Capacity</div>
                <div className={`${styles.progressItem} ${fullBuild.peripherals.length > 0 ? styles.filled : styles.unfilled}`} onClick={() => setListToShow({list: peripheralsList, name: 'peripherals'})}>Peripherals</div>
                <div className={`${styles.progressItem} ${styles.lastProgressItem} ${styles.unfilled}`}>Review</div>
            </div>
            {listToShow != null && <div className={styles.productsLayout}>
                {(listToShow.list).map(item => <ProductCard product={item} onSelect={selectProductHandler} />)}
            </div>}
            {showProductCard != null && <ProductForBuild product={showProductCard} onClose={dissmissProductHandler} onAdd={addToBuildHandler} />}
        </div>
    );
}

export default CreateBuildContent;