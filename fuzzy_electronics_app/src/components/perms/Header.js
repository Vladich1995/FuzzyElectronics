import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useAuth } from '../Contexts/AuthContext';
import { useEffect, useState } from 'react';

const Header = (props) => {
  const [user, assignUser] = useState(null);
  const { setUser, getUser} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getUser();
    assignUser(userData);
  }, [])


  const logoutHandler = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    navigate('/');
  }

  const accountDetailsHandler = () => {
    navigate("/account");
  }

  const cartHandler = () => {
    navigate("/cart");
  }

  const homeHandler = () => {
    if( user != null) {
      navigate('/home');
    }
    else{
      navigate('/');
    }
  }

  const suggestBuildHandler = () => {
    navigate('/suggest');
  }

  const selfBuildHandler = () => {
    navigate ('/selfBuild');
  }

  return (
      <>
        <Navbar bg="dark" data-bs-theme="dark" className={styles.customNavbar}>
          <Container fluid>
            <Nav className="me-auto">
              {user == null ? 
              <Nav.Link href="/signin" className="ms-auto"><span className={styles.navItem}>התחבר</span></Nav.Link>
              :
              <Nav.Link className="ms-auto"><span className={styles.navItem}>
              <DropdownButton
                id="dropdown-item-button"
                title="חשבון"
                variant="dark" // Set the variant to dark
              >
            <Dropdown.Item className={styles.dropDownItem}><span onClick={accountDetailsHandler} className={styles.navItem}>איזור אישי</span></Dropdown.Item>
            <Dropdown.Item onClick={logoutHandler} className={styles.dropDownItem}>התנתק</Dropdown.Item>
          </DropdownButton></span></Nav.Link>}
            </Nav>
            <Nav className="me-3">
              <Nav.Link onClick={cartHandler} ><span className={styles.navItem}><FaShoppingCart size={"2vh"} /></span></Nav.Link>
            </Nav>
            <Nav className="me-3">
              <Nav.Link><span className={styles.navItem}>
              <DropdownButton
                id="dropdown-item-button"
                title="בנה מפרט"
                variant="dark" // Set the variant to dark
              >
            <Dropdown.Item onClick={suggestBuildHandler} className={styles.dropDownItem}>היעזר בנו</Dropdown.Item>
            <Dropdown.Item onClick={selfBuildHandler} className={styles.dropDownItem}>אסתדר לבד</Dropdown.Item>
          </DropdownButton></span>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link><span className={`${styles.navItem} me-3`}>אודות</span></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={homeHandler}><span className={`${styles.navItem} ${styles.logoNavItem}`}>FuzzyElectronics</span></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </>
    );
}

export default Header;