import styles from './Header.module.css';
import { useState } from 'react';
import { useAuth } from './contexts/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";

const Header = (props) => {
    const { authUser } = useAuth();
    const { logout } = useAuth();
    const loginHandler = () => {
        props.onOpen();
    }

    const accountManagementHandler = () => {
        alert("manage account")
    }

    const logoutHandler = () => {
        logout();
    }

    const openCartHandler = () => {
        props.onOpenCart();
    }


    return (
        <nav className="navbar navbar-expand-lg bg-black fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {!authUser ? <button className="nav-link active text-white" aria-current="page" onClick={loginHandler} >התחברות</button>
                            :<li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 פעולות בחשבון
                            </a>
                            <ul className="dropdown-menu">
                                <li className={styles.ddItem}><a className="dropdown-item" style={{cursor:"pointer"}} onClick={logoutHandler}> התנתק</a></li>
                            </ul>
                        </li>}
                        
                        </li>
                        {(authUser && authUser.email!="alex@gmail.com") && <li className="nav-item"><button className="nav-link active text-white" aria-current="page" onClick={openCartHandler} ><FaShoppingCart/></button></li>}
                    </ul>
                    <ul className={`navbar-nav ml-auto ${styles.customLinks}`}>
                        {((authUser && authUser.email!="alex@gmail.com") || !authUser) && <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                בנה מפרט
                            </a>
                            <ul className="dropdown-menu">
                                <li className={styles.ddItem}><a className="dropdown-item" href="#">הרכיבו לי</a></li>
                                <li className={styles.ddItem}><a className="dropdown-item" href="/buildByYourself">אסתדר בעצמי</a></li>
                            </ul>
                        </li>}
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">אודות</a>
                        </li>
                    </ul>
                    <a className="navbar-brand text-white" href="/">Fuzzy Electronics</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;