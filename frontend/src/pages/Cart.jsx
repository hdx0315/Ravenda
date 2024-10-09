import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table generation
import useCartStore from '../store/useCartStore';
import NavBar from '../components/NavBar';
import { FiTrash2 } from "react-icons/fi";

import Swal from 'sweetalert2'


import { pdfDB, getStorage, ref, uploadBytesResumable, getDownloadURL } from '../../../backend/firebase/firebase-config'

export default function Cart() {
  const { cart, total, removeFromCart, clearCart } = useCartStore();

  // State for customer details
  const [customerName, setCustomerName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [pdf, setPDF] = useState();
  const [pdfURL, setPdfURL] = useState('')

  useEffect(() => {
    console.log('Cart state in Cart tab:', cart);
  }, [cart]);

  const generatePDF = async () => {
    if (!cart.length || !customerName || !telephone || !address) {
      Swal.fire('Error', 'Please ensure the cart is not empty and all details are filled out.', 'error');
      return;
    }
    
  
    const doc = new jsPDF();
    
    // Title and customer info
    doc.setFontSize(20);
    doc.text('RAVENDA', 20, 20);
    doc.text('Order Receipt', 20, 30);
    doc.setFontSize(14);
    doc.text(`Customer Name: ${customerName}`, 20, 50);
    doc.text(`Telephone: ${telephone}`, 20, 60);
    doc.text(`Address: ${address}`, 20, 70);
  
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
      startY: 80,
    });
  
    // Total amount
    doc.text(`Total: Rs.${total}.00`, 20, doc.lastAutoTable.finalY + 10);
  
    // Convert the document to Blob
    const pdfBlob = doc.output('blob');
    setPDF(pdfBlob);
  
    // Upload the PDF and wait for the URL
    const pdfURL = await uploadPdfFirebase(pdfBlob);
  
    // Now upload order to Mongo with the correct PDF URL
    await uploadOrderMongo(pdfURL);

    doc.save('Order_reciept'+telephone)
  
    Swal.fire('Order Placed!', 'Your receipt has been uploaded and order has been placed.', 'success');
  };
  

  const uploadPdfFirebase = (pdfBlob) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(); // Get Firebase storage instance
      const pdfRef = ref(storage, `order_receipt_${telephone}.pdf`);
      const uploadTask = uploadBytesResumable(pdfRef, pdfBlob);
      
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progressPercentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log('Upload is ' + progressPercentage + '% done');
        },
        (error) => {
          console.error('Upload error:', error);
          Swal.fire('Error', 'There was an error uploading the PDF.', 'error');
          reject(error); // Reject the promise on error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPdfURL(downloadURL);
            resolve(downloadURL); // Resolve the promise with the download URL
          });
        }
      );
    });
  };
  
  const uploadOrderMongo = async (pdfURL) => {
    const data = {
      userName: customerName,
      telephoneNumber: telephone,
      address: address,
      products: cart,
      pdfURL: pdfURL // Pass the correct URL here
    };
  
    console.log('Upload order data', data);
    
  //  const token = localStorage.getItem('token');
  //  console.log('token', token);
  
    const response = await fetch('http://localhost:3000/api/v1/admin/createOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      Swal.fire("Order placed successfully", "", "success");
    } else {
      Swal.fire("Failed to place order", "", "error");
    }
  };

  const handleCheckout = () => {
    setShowForm(true); // Show the customer information form
  };

  const handleProceed = (e) => {
    e.preventDefault();
    if (!customerName || !telephone || !address) {
      Swal.fire("Please fill in all fields", "", "error");
      return;
    }
    if (!/^\d{10}$/.test(telephone)) {
      Swal.fire("Please enter a valid 10-digit telephone number", "", "error");
      return;
    }
    setSubmitted(true);
    setShowForm(false);

    Swal.fire({
      title: 'Details Submitted!',
      text: 'You can now place your order.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };
  

  const handleEditDetails = () => {
    setShowForm(true); // Show the form again for editing
    setSubmitted(false); // Reset the submitted state
  };

  const handleRemove = (id, color, size) => {
    Swal.fire({
      title: "Do you want to remove this item ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Remove",
      denyButtonText: `Keep`,
      icon:"question",
      
      confirmButtonColor: "#f00",
      denyButtonColor: "#038f28",

    }).then((result) => {
      
      if (result.isConfirmed) {
        removeFromCart(id, color, size)
        Swal.fire("Removed!", "", "success");

      } else if (result.isDenied) {
        Swal.fire("Kept ", "", "success");
      }
    });
  }

  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure you want to clear your cart?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Clear",
      denyButtonText: `Cancel`,
      icon: "question",
      confirmButtonColor: "#f00",
      denyButtonColor: "#038f28",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();  // Clear the cart if the user confirms
        Swal.fire("Cart cleared!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cart not cleared", "", "info");
      }
    });
  };
  

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl font-main">
      <NavBar />
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-8 sm:mt-16">
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
                    <div className='flex flex-col'>
                      <p className="font-normal">
                        {item.price} * {item.quantity}
                      </p>
                      <p className="font-semibold tracking-wider">
                        Rs . {item.price * item.quantity}.00
                      </p>
                    </div>
                    <button
                      className=" text-white p-2 rounded hover:bg-red-100 transition-colors"
                      onClick={() => handleRemove(item._id, item.selectedColor, item.selectedSize)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      <FiTrash2 color='red' size={24} className='hover:text-white'/>
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
              className=" text-black px-4 py-2 rounded hover:bg-red-200 transition-colors border-2 border-gray-300"
              onClick={()=> handleClearCart()}
              aria-label="Clear the cart"
            >
              Clear Cart
            </button>
            <button
              className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition-colors"
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
