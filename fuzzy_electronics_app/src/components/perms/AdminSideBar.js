import { useEffect, useState } from 'react';
import {
  MDBIcon,
  MDBCollapse,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { FaUser } from 'react-icons/fa';

const AdminSideBar = (props) => {
  const [builds, setBuilds] = useState(false);
  const [createBuild, setCreateBuild] = useState(false);
  const [waitingOrders, setWaitingOrders] = useState(false);
  const [doneDeals, setDoneDeals] = useState(false);
  const [clients, setClients] = useState(false);

  useEffect(() => {
    switch (props.item){
      case "builds":
        setBuilds(true);
        break;
      case "createBuild":
        setCreateBuild(true);
        break;
      case "waitingOrders":
        setWaitingOrders(true);
        break;
      case "doneDeals":
        setDoneDeals(true);
        break;
      case "clients":
        setClients(true);
        break;
    }
  }, [])
  
    return (
      <>
        <MDBCollapse tag="nav" className="d-lg-block bg-white sidebar">
          <div className="position-sticky">
            <MDBListGroup flush className="mx-3 mt-4">
                <MDBListGroupItem tag='a' href='/admin' action className='border-0 border-bottom rounded' active={builds} >
                  <MDBIcon fas icon="chart-area me-3" />
                  מפרטים קיימים
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' href='/createbuild' action className='border-0 border-bottom rounded' active={createBuild}>
                  <MDBIcon fas icon="lock me-3" />
                  יצירת מפרט
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' href='/waitingorders' action className='border-0 border-bottom rounded' active={waitingOrders}>
                  <MDBIcon fas icon="chart-line me-3" />
                  הזמנות שממתינות לאישור
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' href='donedeals' action className='border-0 border-bottom rounded' active={doneDeals}>
                  <MDBIcon fas icon="chart-pie me-3" />
                  הזמנות שהושלמו
                </MDBListGroupItem>
                <MDBListGroupItem tag='a' href='/clients' action className='border-0 border-bottom rounded' active={clients}>
                    <FaUser />
                    רשימת לקוחות
                </MDBListGroupItem>
            </MDBListGroup>
          </div>
        </MDBCollapse>
      </>
    );
}

export default AdminSideBar;