import { useState, useEffect } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import { useCart } from '../Contexts/CartContext'

const CartItem = (props) => {
    const { addProduct, removeProduct } = useCart();
    const [amount, setAmount] = useState("");

    useEffect(() => {
        setAmount(props.product.amount);
    }, [])


    const amountChangeHandler = (e) => {
        const newAmount = e.target.value;
        if(newAmount > amount){
            addProduct(props.product.product)
        }
        else{
            removeProduct(props.product.product.makatMorLevi)
        }
        setAmount(newAmount);
    }

    return (
        <MDBCard className="rounded-3 mb-4">
            <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage className="rounded-3" fluid
                        src={props.product.product.pictureURL}
                        alt={props.product.product.brand} />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                        <p className="lead fw-normal mb-2">{props.product.product.brand}</p>
                        <p className="lead fw-normal mb-2">{props.product.product.model}</p>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="2"
                        className="d-flex align-items-center justify-content-around">
                        <MDBInput min={0} value={amount} type="number" size="sm" onChange={amountChangeHandler} />
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                        <MDBTypography tag="h5" className="mb-0">
                        <p className="lead fw-normal mb-2">{props.product.product.price}</p>
                        </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                        <a href="#!" className="text-danger">
                        <MDBIcon fas icon="trash text-danger" size="lg" />
                        </a>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    );
}

export default CartItem;