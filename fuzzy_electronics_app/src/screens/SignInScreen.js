import styles from './SignInScreen.module.css';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';
import Header from '../components/perms/Header';

const SignInScreen = () => {
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
          <CDBInput label="Email" type="email" style={{ '::placeholder': { color: 'grey' } }} />
          <CDBInput label="Password" type="password" style={{ '::placeholder': { color: 'grey' } }} />
          <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center">
            <CDBInput type="Checkbox" />
            <p className="m-1">Remember me</p>
            <CDBLink to="#" className="m-3"><span className={styles.textCustomColor}>Forgot Password?</span></CDBLink>
          </div>
          <CDBBtn color="dark" outline className="btn-block my-3 mx-0">
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
                <CDBIcon fab icon="google-plus-g" />
            </CDBBtn>
          </div>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  </div>
</div>
    );
}

export default SignInScreen;