import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './CustomerProgressBar.module.css';

const CustomerProgressBar = (props) => {
    return (
        <ProgressBar>
            <div>
                <ProgressBar className={styles.borders} striped variant={props.casesComplete} label="Select Cases" now={100} max={100}  animated={true} />
            </div>
            <div>
                <ProgressBar className={styles.borders} striped variant={props.capacityComplete} label="Select Hard disk" now={100} max={100}  animated={true} />
            </div>
            <div>
                <ProgressBar className={styles.borders} striped variant={props.MBComplete} label="Select Motherboard" now={100} max={100}  animated={true} />
            </div>
            <div>
                <ProgressBar className={styles.borders} striped variant={props.CPUComplete} label="Select CPU" now={100} max={100}  animated={true} />
            </div>
            <div>
                <ProgressBar className={styles.borders} striped variant={props.VGAComplete} label="Select Graphics card" now={100} max={100}  animated={true} />
            </div>
            <div>
                <ProgressBar className={styles.borders} striped variant={props.PCSystemComplete} label="Select PC System" now={100} max={100}  animated={true} />
            </div>
            <div>
                <ProgressBar className={styles.borders} striped variant={props.memoryComplete} label="Select RAM" now={100} max={100}  animated={true} />
            </div>
            <div>
                <ProgressBar className={styles.borders} striped variant={props.PSUComplete} label="Select PSU" now={100} max={100}  animated={true} />
            </div>
            <div>
                <ProgressBar className={styles.borders} striped variant={props.peripheralsComplete} label="Select Peripherals" now={100} max={100}  animated={true} />
            </div>
            <div>
                <ProgressBar className={styles.borders} striped variant={props.reviewComplete} label="Review" now={100} max={100}  animated={true} />
            </div>
        </ProgressBar>
      );
}

export default CustomerProgressBar;