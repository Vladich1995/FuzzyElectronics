import styles from './CartScreen.module.css';
import Header from '../components/perms/Header';
import { useCart } from '../components/Contexts/CartContext';
import { useState, useEffect } from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import { FaShekelSign } from "react-icons/fa";
import CartItem from '../components/items/CartItem';

const CartScreen = () => {
    const { getCart } = useCart();
    const [productsList, setProductsList] = useState([]);
    const [cartPrice, setCartPrice] = useState(0);

    useEffect(() => {
        const products = getCart();
        console.log(products)
        setProductsList(products);
    }, [])

    useEffect(() => {
        let price = 0;
        for(let i = 0; i < productsList.length; i++ ){
            price = price + productsList[i].amount * productsList[i].product.price;
            setCartPrice(price);
        }
    }, [productsList])


    const subPrice = (price) => {
        setCartPrice(cartPrice - price);
    }

    const addPrice = (price) => {
        setCartPrice(cartPrice + parseInt(price));
    }

    const placeOrderHandler = () => {
        
    }

    return (
        <>
            <Header />
            <section className="h-100" style={{ backgroundColor: "#eee", display:"flex" }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                                Single items
                            </MDBTypography>
                        </div>
                        {(productsList != null && productsList.length > 0) && productsList.map((item)=> item.type == "single" && <CartItem key={item.product.makatMorLevi} product={item} onAdd={addPrice} onSub={subPrice}  />)}
                    </MDBCol>
                    <MDBCol md="10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                                Build items
                            </MDBTypography>
                        </div>
                        {(productsList != null && productsList.length > 0) && productsList.map((item)=> item.type == "build" && <CartItem key={item.product.makatMorLevi} product={item} onAdd={addPrice} onSub={subPrice}  />)}
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBCol md="4" className="py-5 h-100">
                    <MDBCard className="mb-4">
                        <MDBCardHeader>
                            <MDBTypography tag="h5" className="mb-0">
                            Summary
                            </MDBTypography>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBListGroup flush>
                                <MDBListGroupItem
                                    className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Products
                                    <span>{cartPrice}<FaShekelSign /></span>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                    Estimated confirmation time:
                                    <span>1 Day</span>
                                </MDBListGroupItem>
                                <MDBListGroupItem
                                    className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                    <strong>Total amount</strong>
                                    </div>
                                    <span>
                                    <strong>{cartPrice}<FaShekelSign /></strong>
                                    </span>
                                </MDBListGroupItem>
                            </MDBListGroup>

                            <MDBBtn onClick={placeOrderHandler} block size="lg">
                             Place Order
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </section>
        </>
    );
}

export default CartScreen;