import React, { createContext, useContext, useReducer, useState } from 'react'
import { genericReducer } from '../GenericReducer'

const CartContext = createContext()

export default function CartProvider({ children }) {
  const [cart, setCart] = useReducer(genericReducer, [])
  const [address, setAddress] = useState('')

  return (
    <CartContext.Provider value={{ cart, setCart, address, setAddress }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const { cart, setCart, address, setAddress } = useContext(CartContext)
  return { cart, setCart, address, setAddress }
}
