import { useState } from 'react';
import styles from './UpdateLoginContent.module.css';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';
import { useAuth } from '../../components/Contexts/AuthContext';

const UpdateLoginContent = () => {
    const [PasswordBox, setPasswordBox] = useState(null);
    const [PhoneBox, setPhoneBox] = useState(null);
    const {user} = useAuth();

  const changePasswordHandler = (e) => {
    setPasswordBox(e.target.value);
  }

  const changePhoneHandler = (e) => {
    setPhoneBox(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
          const response = await fetch(`https://gatewayapiserv.azurewebsites.net/CustomersAPI/api/v1/Customers/${user != null && user.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Password: PasswordBox,
              PhoneNumber: PhoneBox
            }),
          });
          if(response.status == 200){
            const responseData = await response.json();
            console.log(responseData);
          }
          else if(response.status == 400){
            alert("There is already user with this email")
          }
    } catch (error) {
      console.log(error);
    }
  }

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <CDBInput material style={{width: '30vw'}} placeholder="New Password" type="password" onChange={changePasswordHandler} />
                <CDBInput material style={{width: '30vw'}} placeholder="New Phone number" type="tel" onChange={changePhoneHandler} />
                <CDBBtn type="submit" color="dark" className="m-0" style={{ boxShadow: 'none' }}>
                    עדכן
                </CDBBtn>
            </form>
        </div>
    );
}

export default UpdateLoginContent;