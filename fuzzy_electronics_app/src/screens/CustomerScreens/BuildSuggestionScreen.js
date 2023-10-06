import styles from './BuildSuggestionScreen.module.css';
import Header from '../../components/perms/Header';
import QuestionsContent from './Content/QuestionsContent';
import SuggestedBuild from './Content/SuggestedBuild';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useCart } from '../../components/Contexts/CartContext';

const BuildSuggestionScreen = () => {
    const [content, setContent] = useState("questions");
    const [buildType, setBuildType] = useState(null);
    const [build, setBuild] = useState(null);
    const { addProduct } = useCart();

    const handleQuestionComplete = (use, budget) => {
        if(use == "gaming" && budget == "small"){
            setBuildType(0);
        }
        if(use == "office" && budget == "small"){
            setBuildType(1);
        }
        if(use == "design" && budget == "small"){
            setBuildType(2);
        }
        if(use == "gaming" && budget == "medium"){
            setBuildType(3);
        }
        if(use == "office" && budget == "medium"){
            setBuildType(4);
        }
        if(use == "design" && budget == "medium"){
            setBuildType(5);
        }
        if(use == "gaming" && budget == "high"){
            setBuildType(6);
        }
        if(use == "office" && budget == "high"){
            setBuildType(7);
        }
        if(use == "design" && budget == "high"){
            setBuildType(8);
        }
        setContent('suggestion');
    }

    const storeBuild = (build) => {
        setBuild(build);
    }

    const addBuildHandler = () => {
        for (const key in build) {
            if (build.hasOwnProperty(key)) {
              const currentList = build[key];
              // Iterate through the elements of each list
              if(Array.isArray(build[key])){
                for (const item of currentList) {
                    console.log("Item: ", item)
                    addProduct(item, 'build');
                  }
              }
            }
          }
    }


    return (
        <div style={{backgroundColor: 'black', height: '100vh'}}>
            <Header />
            <div className={styles.content}>
                {content == 'questions' && <QuestionsContent onComplete={handleQuestionComplete} />}
                {(content == 'suggestion' && buildType != null) && <SuggestedBuild buildType={buildType} storeBuild={storeBuild}  />}
            </div>
            {buildType != null && <div className={styles.buttonArea}>
                <Button onClick={addBuildHandler} variant="outline-primary">Add to cart</Button>
            </div>}
        </div>
    );
}

export default BuildSuggestionScreen;