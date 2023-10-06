import styles from './QuestionsContent.module.css';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { FaShekelSign } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const QuestionsContent = (props) => {
    const smallBudget = "<3000";
    const mediumBudget = "3000-7000";
    const highBudget = "<7000"

    const [use, setUse] = useState(null);
    const [budget, setBudget] = useState(null);
    const [designChecked, setDesignChecked] = useState(false);
    const [officeChecked, setOfficeChecked] = useState(false);
    const [gamingChecked, setGamingChecked] = useState(false);
    const [smallChecked, setSmallChecked] = useState(false);
    const [mediumChecked, setMediumChecked] = useState(false);
    const [highChecked, setHighChecked] = useState(false);

    useEffect(() => {
        setUse(()=>{
            return designChecked ? "design" :
            officeChecked ? "office" :
            gamingChecked && "gaming";
        })

        setBudget(()=>{
            return smallChecked ? "small" :
            mediumChecked ? "medium" :
            highChecked && "high";
        })
    }, [use,budget])

    const handleGamingChecked = (e) => {
        setGamingChecked(true);
        setOfficeChecked(false);
        setDesignChecked(false);
        purposeHandler(e.target.value);
      };
    
      const handleOfficeChecked = (e) => {
        setGamingChecked(false);
        setOfficeChecked(true);
        setDesignChecked(false);
        purposeHandler(e.target.value);
      };
    
      const handleDesignChecked = (e) => {
        setGamingChecked(false);
        setOfficeChecked(false);
        setDesignChecked(true);
        purposeHandler(e.target.value);
      };

    const handleSmallChecked = (e) => {
        setSmallChecked(true);
        setMediumChecked(false);
        setHighChecked(false);
        budgetHandler(e.target.value);
      };
    
      const handleMediumChecked = (e) => {
        setSmallChecked(false);
        setMediumChecked(true);
        setHighChecked(false);
        budgetHandler(e.target.value);
      };
    
      const handleHighChecked = (e) => {
        setSmallChecked(false);
        setMediumChecked(false);
        setHighChecked(true);
        budgetHandler(e.target.value);
      };


    const purposeHandler = (value) => {
        setUse(value);
    }

    const budgetHandler = (value) => {
        setBudget(value);
    }

    const continueHandler = () => {
        props.onComplete(use, budget);
    }

    return (
        <div className={styles.container}>
            <div className={styles.questionContainer}>
                <label className={styles.question}>What is the main use going to be?</label>
                <div className={`${styles.buttonsArea} mb-2`}>
                <ToggleButton
                    id="toggle-check1"
                    type="checkbox"
                    variant="outline-primary"
                    checked={gamingChecked}
                    value="1"
                    size="lg"
                    onChange={handleGamingChecked}
                >
                    Gaming
                </ToggleButton>
                <ToggleButton
                    id="toggle-check2"
                    type="checkbox"
                    variant="outline-warning"
                    checked={officeChecked}
                    value="1"
                    size="lg"
                    onChange={handleOfficeChecked}
                >
                    Office
                </ToggleButton>
                <ToggleButton
                    id="toggle-check3"
                    type="checkbox"
                    variant="outline-danger"
                    checked={designChecked}
                    value="1"
                    size="lg"
                    onChange={handleDesignChecked}
                >
                    Design
                </ToggleButton>
                </div>
            </div>
            <div className={styles.questionContainer}>
                <label className={styles.question}>Is there a budget?</label>
                <div className={`${styles.buttonsArea} mb-2`}>
                <ToggleButton
                    id="toggle-check4"
                    type="checkbox"
                    variant="outline-primary"
                    checked={smallChecked}
                    value="1"
                    size="lg"
                    onChange={handleSmallChecked}
                >
                    {smallBudget} <FaShekelSign />
                </ToggleButton>
                <ToggleButton
                    id="toggle-check5"
                    type="checkbox"
                    variant="outline-warning"
                    checked={mediumChecked}
                    value="1"
                    size="lg"
                    onChange={handleMediumChecked}
                >
                    {mediumBudget} <FaShekelSign />
                </ToggleButton>
                <ToggleButton
                    id="toggle-check6"
                    type="checkbox"
                    variant="outline-danger"
                    checked={highChecked}
                    value="1"
                    size="lg"
                    onChange={handleHighChecked}
                >
                    {highBudget} <FaShekelSign />
                </ToggleButton>
                </div>
            </div>
            <div className={styles.continueButton}>
                {(use!=null && budget!=null) && <Button onClick={continueHandler} variant="outline-success" size='lg'>Find a build for me</Button>}
            </div>
        </div>
    )
}

export default QuestionsContent;