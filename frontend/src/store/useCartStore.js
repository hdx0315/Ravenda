import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      total: 0,

      // Add item to cart
      addToCart: (product, quantity = 1) => set((state) => {
        const existingProduct = state.cart.find(item => 
          item._id === product._id && 
          item.selectedColor === product.selectedColor && 
          item.selectedSize === product.selectedSize
        );
        if (existingProduct) {
          return {
            cart: state.cart.map(item =>
              item._id === product._id && 
              item.selectedColor === product.selectedColor && 
              item.selectedSize === product.selectedSize
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
            total: state.total + product.price * quantity,
          };
        }
        return {
          cart: [...state.cart, { ...product, quantity }],
          total: state.total + product.price * quantity,
        };
      }),

      // Remove item from cart
      removeFromCart: (productId, selectedColor, selectedSize) => set((state) => {
        const productToRemove = state.cart.find(item => 
          item._id === productId && 
          item.selectedColor === selectedColor && 
          item.selectedSize === selectedSize
        );

        if (!productToRemove) return state;

        return {
          cart: state.cart.filter(item => 
            !(item._id === productId && 
              item.selectedColor === selectedColor && 
              item.selectedSize === selectedSize)
          ),
          total: state.total - (productToRemove.price * productToRemove.quantity),
        };
      }),

      // Clear the cart
      clearCart: () => set({ cart: [], total: 0 }),
    }),
    { name: 'cart-storage' }
  )
);

export default useCartStore;