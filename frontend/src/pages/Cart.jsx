// frontend/src/pages/Cart.jsx

import React, { useEffect } from 'react';
import useCartStore from '../store/useCartStore';
import NavBar from '../components/NavBar';

export default function Cart() {
  const { cart, total, removeFromCart, clearCart } = useCartStore();

  useEffect(() => {
    console.log('Cart state in Cart tab:', cart);
  }, [cart]);

  return (
    <div className="container mx-auto max-w-4xl font-main">
      <NavBar />
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 pt-20 border-b border-gray-200">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
        </div>
        <div className="p-6 font-bold">
          {cart.length === 0 ? (
            <p className="text-lg text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="space-y-8">
              {cart.map(item => (
                <div key={item._id + item.selectedColor + item.selectedSize} className="flex flex-row justify-center items-start gap-4 pb-4 border-b">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      {item.selectedColor}, {item.selectedSize}
                    </p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex flex-col justify-center items-center sm:flex-row sm:items-center gap-2">
                    <p className="font-semibold">Rs.{item.price * item.quantity}.00</p>
                    <button
                      className="bg-red-400 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
                      onClick={() => removeFromCart(item._id, item.selectedColor, item.selectedSize)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="p-6 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-lg font-semibold">Total: Rs.{total}.00</p>
            <button
              className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              onClick={clearCart}
              aria-label="Clear the cart"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
