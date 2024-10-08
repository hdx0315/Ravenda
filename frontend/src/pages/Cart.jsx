import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table generation
import useCartStore from '../store/useCartStore';
import NavBar from '../components/NavBar';

export default function Cart() {
  const { cart, total, removeFromCart, clearCart } = useCartStore();

  // State for customer details
  const [customerName, setCustomerName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log('Cart state in Cart tab:', cart);
  }, [cart]);

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.text('Order Receipt', 20, 20);

    // Customer Information
    doc.setFontSize(14);
    doc.text(`Customer Name: ${customerName}`, 20, 40);
    doc.text(`Telephone: ${telephone}`, 20, 50);
    doc.text(`Address: ${address}`, 20, 60);
    
    // Adding cart items as a table
    doc.autoTable({
      head: [['Item', 'Color', 'Size', 'Quantity', 'Price']],
      body: cart.map(item => [
        item.title,
        item.selectedColor,
        item.selectedSize,
        item.quantity,
        `Rs.${item.price * item.quantity}.00`,
      ]),
      startY: 70, // Starting position for the table
    });

    // Total amount
    doc.text(`Total: Rs.${total}.00`, 20, doc.lastAutoTable.finalY + 10);

    // Save the PDF
    doc.save('order_receipt.pdf');
  };

  const handleCheckout = () => {
    setShowForm(true); // Show the customer information form
  };

  const handleProceed = (e) => {
    e.preventDefault();
    setSubmitted(true); // Mark the form as submitted
    setShowForm(false); // Hide the form after submitting
  };

  const handleEditDetails = () => {
    setShowForm(true); // Show the form again for editing
    setSubmitted(false); // Reset the submitted state
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl font-main">
      <NavBar />
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
        </div>
        <div className="p-6">
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
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
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
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
              onClick={clearCart}
              aria-label="Clear the cart"
            >
              Clear Cart
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={handleCheckout}
              aria-label="Proceed to checkout"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {/* Checkout Form */}
      {showForm && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Enter Delivery Information</h3>
          <form onSubmit={handleProceed} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Telephone</label>
              <input
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Display Customer Details after Submission */}
      {submitted && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Delivery Information</h3>
          <p><strong>Name:</strong> {customerName}</p>
          <p><strong>Telephone:</strong> {telephone}</p>
          <p><strong>Address:</strong> {address}</p>
          <button
            className="m-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            onClick={handleEditDetails}
          >
            EDIT DETAILS
          </button>
          <p className="mt-4 text-sm text-gray-600">THIS DETAILS ARE CORRECT AND PROCEED TO PLACE ORDER</p>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 m-2"
            onClick={generatePDF}
          >
            PLACE ORDER
          </button>
        </div>
      )}
    </div>
  );
}
