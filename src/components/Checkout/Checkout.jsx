import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getFireStore, fb } from "../../db";
import ErrorMessage from "../General/ErrorMessage";
import "./Checkout.css";

const Checkout = () => {
    const cartContext = useContext(CartContext);
    const items = cartContext.data.items;
    const db = getFireStore();

    const getEmptyUserData = () => {
        return {
            firstName: "",
            lastName: "",
            email: "",
            confirmEmail: "",
            phone: "",
        };
    };

    const [userData, setUserData] = useState(getEmptyUserData());
    const [orderId, setOrderId] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const getOrderDetails = (items) => {
        return items.map((item) => {
            return {
                productId: item.product.id,
                unitPrice: item.product.price,
                quantity: item.quantity,
            };
        });
    };

    const closeHandler = () => {
        setErrorMessage("");
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        setErrorMessage("");
        if (userData.email !== userData.confirmEmail) {
            const message = "The emails entered are not equals.";
            setErrorMessage(message);
            return;
        }

        db.collection("orders")
            .add({
                userData,
                totalPrice: cartContext.totalPrice(),
                date: fb.firestore.Timestamp.fromDate(new Date()),
                orderDetail: getOrderDetails(items),
                status: 'GENERATED' 
            })
            .then((savedOrder) => {
                console.log(savedOrder);
                setUserData(getEmptyUserData());
                cartContext.clear();
                setOrderId(savedOrder.id);
            })
            .catch((e) => console.log(e));
    };

    const onChangeInputHandler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>

            <ErrorMessage message={errorMessage} closeHandler={closeHandler} />

            {items.length ? (
                <>
                    <h4>Your order detail</h4>
                    <div className="product-items">
                        {items.map((item) => (
                            <div className="product-item" key={item.product.id}>
                                <strong>{item.quantity}</strong> x{" "}
                                {item.product.title}
                            </div>
                        ))}
                    </div>
                    <p>Total: ${cartContext.totalPrice()}</p>

                    <h4>Complete your personal info</h4>
                    <form className="checkout-form" onSubmit={onSubmitHandler}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={userData.firstName}
                            onChange={onChangeInputHandler}
                            required
                        />

                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={userData.lastName}
                            onChange={onChangeInputHandler}
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={userData.email}
                            onChange={onChangeInputHandler}
                            required
                        />

                        <label htmlFor="confirmEmail">Confirm Email</label>
                        <input
                            type="email"
                            name="confirmEmail"
                            id="confirmEmail"
                            value={userData.confirmEmail}
                            onChange={onChangeInputHandler}
                            required
                        />

                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={userData.phone}
                            onChange={onChangeInputHandler}
                            required
                        />
                        <input
                            type="submit"
                            value="Submit"
                            disabled={Object.values(userData).includes("")}
                        />
                    </form>
                </>
            ) : orderId ? (
                <p>
                    Congratulations! Your order code is:{" "}
                    <strong>{orderId}</strong>
                </p>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Checkout;
