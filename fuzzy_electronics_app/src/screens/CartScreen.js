import styles from './CartScreen.module.css';
import Header from '../components/perms/Header';
import { useCart } from '../components/Contexts/CartContext';
import { useState, useEffect } from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import CartItem from '../components/items/CartItem';

const CartScreen = () => {
    const { getCart } = useCart();
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        const products = getCart();
        setProductsList(products);
    }, [])

    return (
        <>
            <Header />
            <section className="h-100" style={{ backgroundColor: "#eee" }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                                Shopping Cart
                            </MDBTypography>
                        </div>
                        {(productsList != null && productsList.length > 0) && productsList.map((item)=> <CartItem key={item.product.makatMorLevi} product={item} />)}
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
}

export default CartScreen;