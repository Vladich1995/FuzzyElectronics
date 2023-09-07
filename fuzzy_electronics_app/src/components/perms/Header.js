import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useAuth } from '../Contexts/AuthContext';

const Header = (props) => {
  const {user, setUser} = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  }

  const accountDetailsHandler = () => {
    navigate("/account");
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
              <Nav.Link ><span className={styles.navItem}><FaShoppingCart size={"2vh"} /></span></Nav.Link>
            </Nav>
            <Nav className="me-3">
              <Nav.Link><span className={styles.navItem}>
              <DropdownButton
                id="dropdown-item-button"
                title="בנה מפרט"
                variant="dark" // Set the variant to dark
              >
            <Dropdown.Item className={styles.dropDownItem}>היעזר בנו</Dropdown.Item>
            <Dropdown.Item className={styles.dropDownItem}>אסתדר לבד</Dropdown.Item>
          </DropdownButton></span>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link><span className={`${styles.navItem} me-3`}>אודות</span></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/"><span className={`${styles.navItem} ${styles.logoNavItem}`}>FuzzyElectronics</span></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </>
    );
}

export default Header;