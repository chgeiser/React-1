import { createContext, useState } from "react";


const CartContext = createContext(); 


const CartProvider=({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (pizzas)=>{
        const index = cart.findIndex((p) => p.id === pizzas.id);

    if (index !== -1) {
        const newCart = [...cart];
        newCart[index] = {
            ...newCart[index],
            quantity: newCart[index].quantity + 1
        };
        setCart(newCart);
    } else {
        setCart([...cart, { ...pizzas, quantity: 1 }]);
    }
    }

    const removeFromCart = (id)=>{
        setCart(cart.filter((item)=>item.id !== id));
    }

    const calcularTotal = ()=>{
        return cart.reduce((total, item)=>total + item.price * item.quantity, 0)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, calcularTotal}}>
             {children}
        </CartContext.Provider>
    
)

}

export {CartContext, CartProvider}
