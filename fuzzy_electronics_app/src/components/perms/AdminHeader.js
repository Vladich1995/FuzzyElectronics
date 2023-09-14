import styles from './AdminHeader.module.css';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useAuth } from '../Contexts/AuthContext';
import { useEffect, useState } from 'react';

const AdminHeader = (props) => {
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
    navigate("/adminaccount");
  }


  const homeHandler = () => {
    if( user != null) {
      navigate('/admin');
    }
    else{
      navigate('/');
    }
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
            <Nav>
              <Nav.Link onClick={homeHandler}><span className={`${styles.navItem} ${styles.logoNavItem}`}>FuzzyElectronics</span></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </>
    );
}

export default AdminHeader;