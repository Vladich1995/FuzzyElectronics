import { useState } from 'react';
import styles from './SignInScreen.module.css';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';
import Header from '../../components/perms/Header';
import { useAuth } from '../../components/Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignInScreen = () => {
    const [EmailBox, setEmailBox] = useState("");
    const [PasswordBox, setPasswordBox] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const changeEmailHandler = (e) => {
        setEmailBox(e.target.value);
    }
    
    const changePasswordHandler = (e) => {
        setPasswordBox(e.target.value);
    }

    const changeCheckboxHandler = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
              const response = await fetch('https://gatewayapiserv.azurewebsites.net/CustomersAPI/api/v1/Customers/Login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  Email: EmailBox,
                  Password: PasswordBox,
                }),
              });
              if(response.status == 200){
                const responseData = await response.json();
                console.log(responseData);
                setUser(responseData); 
                sessionStorage.setItem('user', JSON.stringify(responseData));
                if (rememberMe) {
                    localStorage.setItem('user', JSON.stringify(responseData)); 
                }
                if(responseData.email != "alex@gmail.com"){
                    navigate("/home")
                }
                else {
                    navigate("/admin")
                }
              }
              else if(response.status == 400){
                alert("Wrong email or password")
              }
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div style={{ overflow: 'hidden', height: '100vh' }}>
            <Header />
            <div className="d-flex justify-content-center align-items-center vh-100">
                <CDBContainer>
                    <CDBCard style={{ width: '30rem' }} className="mx-auto">
                        <div style={{ background: 'black' }} className="text-center text-white">
                            <p className="h5 mt-2 py-4 font-weight-bold">Sign in</p>
                        </div>
                        <CDBCardBody className="mx-4">
                        <form onSubmit={handleSubmit}>
                        <CDBInput label="Email" type="email" style={{ '::placeholder': { color: 'grey' } }} onChange={changeEmailHandler} />
                        <CDBInput label="Password" type="password" style={{ '::placeholder': { color: 'grey' } }} onChange={changePasswordHandler} />
                        <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center">
                            <CDBInput type="Checkbox" onChange={changeCheckboxHandler} />
                            <p className="m-1">Remember me</p>
                            <CDBLink to="#" className="m-3"><span className={styles.textCustomColor}>Forgot Password?</span></CDBLink>
                        </div>
                        <CDBBtn color="dark" outline className="btn-block my-3 mx-0" type="submit">
                            <span >Sign in</span>
                        </CDBBtn>
                        <p className="text-center">
                            Not a member?{' '}
                            <CDBLink className="d-inline p-0" to="/signup">
                                <span className={styles.textCustomColor}>Register</span>
                            </CDBLink>
                        </p>
                        <p className="text-center"> or sign in with</p>
                        <div className="flex-row my-3 d-flex justify-content-center">
                            <CDBBtn color="white" className="m-0 outline-btn">
                                <CDBIcon fab icon="facebook-f" />
                            </CDBBtn>
                            <CDBBtn color="white" className="m-0 outline-btn">
                                <CDBIcon fab icon="google" />
                            </CDBBtn>
                            <CDBBtn color="white" className="m-0 outline-btn">
                                <CDBIcon icon="envelope" />
                            </CDBBtn>
                        </div>
                        </form>
                        </CDBCardBody>
                    </CDBCard>
                </CDBContainer>
            </div>
        </div>
    );
}

export default SignInScreen;