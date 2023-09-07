import { useState } from 'react';
import styles from './SignUpScreen.module.css';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';
import Header from '../../components/perms/Header';
import { useAuth } from '../../components/Contexts/AuthContext';

const SignUpScreen = () => {
  const [FnameBox, setFnameBox] = useState("");
  const [LnameBox, setLnameBox] = useState("");
  const [EmailBox, setEmailBox] = useState("");
  const [PasswordBox, setPasswordBox] = useState("");
  const [PhoneBox, setPhoneBox] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { setUser } = useAuth();

  const changeFnameHandler = (e) => {
    setFnameBox(e.target.value);
    console.log(FnameBox)
  }

  const changeLnameHandler = (e) => {
    setLnameBox(e.target.value);
  }

  const changeEmailHandler = (e) => {
    setEmailBox(e.target.value);
  }

  const changePasswordHandler = (e) => {
    setPasswordBox(e.target.value);
  }

  const changePhoneHandler = (e) => {
    setPhoneBox(e.target.value);
  }

  const changeCheckboxHandler = (e) => {
    setRememberMe(e.target.checked);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
          const response = await fetch('https://gatewayapiserv.azurewebsites.net/CustomersAPI/api/v1/Customers/Create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Fname: FnameBox,
              Lname: LnameBox,
              Email: EmailBox,
              Password: PasswordBox,
              PhoneNumber: PhoneBox
            }),
          });
          if(response.status == 200){
            const responseData = await response.json();
            console.log(responseData);
            setUser(responseData); 
            if (rememberMe) {
                localStorage.setItem('user', JSON.stringify(responseData)); // Store user data only if "Remember me" is checked
            }
          }
          else if(response.status == 400){
            alert("There is already user with this email")
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
                <CDBCardBody className="mx-4">
                <form onSubmit={handleSubmit}>
                  <div className="text-center mt-4 mb-2">
                    <p className="h4">Sign up</p>
                  </div>
                  <div className="form-flex-row mb-n4">
                    <div className="col">
                      <CDBInput material placeholder="First name" type="text" onChange={changeFnameHandler} />
                    </div>
                    <div className="col">
                      <CDBInput material placeholder="Last name" type="text" onChange={changeLnameHandler} />
                    </div>
                  </div>
                  <CDBInput material placeholder="E-mail" type="email" onChange={changeEmailHandler} />
                  <CDBInput material placeholder="Password" type="password" onChange={changePasswordHandler} />
                  <CDBInput material placeholder="Phone number" type="tel" onChange={changePhoneHandler} />
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <CDBInput type="Checkbox" onChange={changeCheckboxHandler} />
                    <p className="m-1">Remember me</p>
                  </div>
                  <CDBBtn type="submit" color="dark" className="btn-block my-3 mx-0">
                    Sign up
                  </CDBBtn>
                  <p className="text-center">or sign up with</p>
                  <div className="flex-row mb-3 d-flex justify-content-center">
                    <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
                      <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
                      <CDBIcon fab icon="google" />
                    </CDBBtn>
                    <CDBBtn color="white" className="m-0 outline-btn">
                      <CDBIcon icon="envelope" />
                    </CDBBtn>
                  </div>
                  <p className="text-center m-0">
                    Already have an account?{' '}
                    <CDBLink className="d-inline p-0" to="/signin">
                    <span className={styles.textCustomColor}>Sign In</span>
                    </CDBLink>
                  </p>
                  <hr />
                  <p className="text-center">
                    By clicking <em>Sign up</em> you agree to our{' '}
                    <CDBLink className="d-inline p-0" to="#">
                    <span className={styles.textCustomColor}>terms of service</span>
                    </CDBLink>
                  </p>
                  </form>
                </CDBCardBody>
              </CDBCard>
            </CDBContainer>
          </div>
    </div>
  );
}

export default SignUpScreen;