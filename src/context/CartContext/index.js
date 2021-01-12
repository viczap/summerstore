import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [data, setData] = useState({ items: [] });

    const addItem = (item, quantity) => {
        const index = data.items.findIndex((it) => it.product.id === item.id);
        if (index !== -1) {
            const _items = [...data.items];
            _items[index].quantity = _items[index].quantity + quantity;
            setData({
                ...data,
                items: _items,
            });
        } else {
            setData({
                ...data,
                items: [...data.items, { product: item, quantity }],
            });
        }
    };

    const removeItem = (itemId) => {
        const index = data.items.findIndex(
            (item) => item.product.id === itemId
        );
        if (index !== -1) {
            const _items = [...data.items];
            _items.splice(index, 1);
            setData({...data, items : _items});
        }
    };

    const clear = () => {
        data.items = [];
    };

    const isInCart = (itemId) => {
        const isInCart = data.items.find((item) => item.product.id === itemId);
        console.log(`isInCart ${isInCart} for item with id: ${itemId}`);
        return isInCart;
    };

    const cartQuantity = () => {
        return data.items.reduce((acc, item) => acc + item.quantity, 0)
    };

    const totalPrice = () => {
        return data.items.reduce((acc, item) => acc + (item.quantity * item.product.price), 0)
    }

    const isEmpty = () => {
        return data.items.length === 0;
    }

    return (
        <CartContext.Provider
            value={{ data, setData, addItem, removeItem, clear, isInCart, cartQuantity, totalPrice, isEmpty }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
