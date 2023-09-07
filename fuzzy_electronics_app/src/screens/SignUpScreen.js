import styles from './SignUpScreen.module.css';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';
import Header from '../components/perms/Header';

const SignUpScreen = () => {
    return (
        <div style={{ overflow: 'hidden', height: '100vh' }}>
            <Header />
            <div className="d-flex justify-content-center align-items-center vh-100">
            <CDBContainer>
  <CDBCard style={{ width: '30rem' }} className="mx-auto">
    <CDBCardBody className="mx-4">
      <div className="text-center mt-4 mb-2">
        <p className="h4">Sign up</p>
      </div>
      <div className="form-flex-row mb-n4">
        <div className="col">
          <CDBInput material placeholder="First name" type="text" />
        </div>
        <div className="col">
          <CDBInput material placeholder="Last name" type="text" />
        </div>
      </div>
      <CDBInput material placeholder="E-mail" type="email" />
      <p className="text-muted text-center small mt-n4">At least 8 characters and 1 digit</p>
      <CDBInput material placeholder="Password" type="password" />
      <CDBInput material placeholder="Phone number" type="text" />
      <p className="text-muted text-center small mt-n4">
        Optional - for two-step authentication
      </p>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <CDBInput type="Checkbox" />
        <p className="m-1">Remember me</p>
      </div>
      <CDBBtn color="dark" className="btn-block my-3 mx-0">
        Sign up
      </CDBBtn>
      <p className="text-center">or sign up with</p>
      <div className="flex-row mb-3 d-flex justify-content-center">
        <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
          <CDBIcon fab icon="facebook-f" />
        </CDBBtn>
        <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
          <CDBIcon fab icon="google-plus-g" />
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
    </CDBCardBody>
  </CDBCard>
</CDBContainer>
</div>
      </div>
    );
}

export default SignUpScreen;