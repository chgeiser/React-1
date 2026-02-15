import { createContext, useState } from "react";
import { pizzaCart} from "../src/components/data/pizzas.js"
import axios from "axios";


const CartContext = createContext(); 


const CartProvider=({children}) => {

   const [cart, setCart] = useState(
    pizzaCart.map(p => ({ ...p, cantidad: 1 }))
  );



 /*   const addToCart = (pizzas)=>{
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
        */

     const incrementar = (id) => {
    setCart(cart =>
      cart.map(p =>
        p.id === id
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      )
    );
  };

  const decrementar = (id) => {
    setCart(cart =>
      cart.map(p =>
        p.id === id
          ? { ...p, cantidad: Math.max(1, p.cantidad - 1) }
          : p
      )
    );
  };

    const calcularTotal = ()=>{
        return cart.reduce((acc, p) => acc + p.price * p.cantidad, 0);
    }

    const PagarPedido = async ()=>{
        const response = await axios.post("http://localhost:5000/api/checkouts", {})
        console.log(response)

        if(!response){
          alert('pago realizado con exito')
        }
    }

    return(
        <CartContext.Provider value={{cart, PagarPedido, incrementar, decrementar, calcularTotal}}>
             {children}
        </CartContext.Provider>
    
)

}

export {CartContext, CartProvider}
