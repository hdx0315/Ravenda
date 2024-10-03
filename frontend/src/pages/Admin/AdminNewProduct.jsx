

// AdminNewProduct.jsx

import React, { useState } from 'react';
//import {  } from 'firebase/storage';
import { imageDB, getStorage, ref, uploadBytesResumable, getDownloadURL } from '../../../../backend/firebase/firebase-config';


function AdminNewProduct() {
    const [txt, setTxt] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [newArrival, setNewArrival] = useState(false);
    const [hotDeal, setHotDeal] = useState(false);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [selectedImg, setSelectedImg] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [imgURL, setImgURL] = useState('');

    const handleImageSelection = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImg(file);
            const imageRef = ref(imageDB, `${file.name}`);
            const uploadTask = uploadBytesResumable(imageRef, file);

            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progressPercentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progressPercentage);
                },
                (error) => {
                    console.error("Upload error:", error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImgURL(downloadURL);
                        setUploading(false);
                    });
                }
            );

            setUploading(true);
        }
    };

    const handleSubmit = async () => {
        const data = {
            title: txt,
            image: imgURL,
            price: Number(price),
            category,
            newArrival,
            hotDeal,
            colors,
            sizes,
        };

        console.log(data);

        const token = localStorage.getItem('token'); // or wherever you store your token
        const response = await fetch('http://localhost:3000/api/v1/admin/newProduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Include the token here
          },
            body: JSON.stringify(data),
        });

            if (response.ok) {setTxt('');
              setSelectedImg(null);
              setImgURL('');
              setPrice('');
              setCategory('');
              setNewArrival(false);
              setHotDeal(false);
              setColors([]);
              setSizes([]);
              setProgress(0); // Reset progress bar
              setUploading(false);
              setSelectedImg(null)
              alert('Successfully uploaded!');
        } else {
            alert("Failed to submit data");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Admin Upload</h2>

                {/* Text Input */}
                <div className="mb-4">
                    <label htmlFor="text-input" className="block text-lg font-medium text-gray-700 mb-2">Enter Text</label>
                    <input
                        type="text"
                        id="text-input"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={txt}
                        onChange={(e) => setTxt(e.target.value)}
                        placeholder="Enter some text..."
                    />
                </div>

                {/* Price Input */}
                <div className="mb-4">
                    <label htmlFor="price-input" className="block text-lg font-medium text-gray-700 mb-2">Price</label>
                    <input
                        type="number"
                        id="price-input"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter the price..."
                    />
                </div>

                {/* Category Input */}
                <div className="mb-4">
                    <label htmlFor="category-input" className="block text-lg font-medium text-gray-700 mb-2">Category</label>
                    <input
                        type="text"
                        id="category-input"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Enter the category..."
                    />
                </div>

                {/* New Arrival Checkbox */}
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={newArrival}
                            onChange={() => setNewArrival(!newArrival)}
                        />
                        New Arrival
                    </label>
                </div>

                {/* Hot Deal Checkbox */}
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={hotDeal}
                            onChange={() => setHotDeal(!hotDeal)}
                        />
                        Hot Deal
                    </label>
                </div>

                {/* Colors Input */}
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Colors (comma separated)</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={colors.join(', ')}
                        onChange={(e) => setColors(e.target.value.split(',').map(color => color.trim()))}
                        placeholder="Enter colors..."
                    />
                </div>

                {/* Sizes Input */}
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Sizes (comma separated)</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={sizes.join(', ')}
                        onChange={(e) => setSizes(e.target.value.split(',').map(size => size.trim()))}
                        placeholder="Enter sizes..."
                    />
                </div>

                {/* Image Selection */}
                <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Select Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageSelection}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
                    />
                </div>

                {/* Image Preview */}
                {imgURL && (
                    <div className="mb-4">
                        <p className="text-lg text-gray-700 mb-2">Image Preview:</p>
                        <img src={imgURL} alt="Preview" className="w-full h-auto rounded-lg shadow-md mb-2" />
                    </div>
                )}

                {/* Upload Progress Bar */}
                {uploading && (
                    <div className="mb-4">
                        <p className="text-lg text-gray-700 mb-2">Uploading: {progress}%</p>
                        <div className="w-full bg-gray-200 rounded-full">
                            <div className="bg-primary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition duration-300"
                    disabled={uploading || !imgURL}
                >
                    Submit
                </button>
            </div>
        </div>
    );

}

export default AdminNewProduct