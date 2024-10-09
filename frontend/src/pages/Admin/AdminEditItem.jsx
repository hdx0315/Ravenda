

// frontend/src/pages/admin/AdminEditItem.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { imageDB, getStorage, ref, uploadBytesResumable, getDownloadURL  } from '../../../../backend/firebase/firebase-config';
import AdminNavbar from '../../components/Admin/AdminNavbar';

import { useNavigate } from 'react-router-dom';

function AdminEditItem() {
    
    const navigate = useNavigate();
    const { id } = useParams();
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

    // Fetch existing product data based on the id
    useEffect(() => {
        const fetchProductData = async () => {
            
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3000/api/v1/admin/editItem/${id}`, { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}` 
                },
            // body: JSON.stringify(data),
            });

            if (!response.ok) {
                console.log(response)
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        
                
            const product = await response.json();

            console.log('Fetched product:', product);

            // Set state with fetched data
            setTxt(product.title);
            setPrice(product.price);
            setCategory(product.category);
            setNewArrival(product.newArrival);
            setHotDeal(product.hotDeal);
            setColors(product.colors);
            setSizes(product.sizes);
            setImgURL(product.image);
        };

        fetchProductData();
    }, [id]);

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

    const handleUpdate = async () => {
        
        if (!txt || !price || !category) {
            alert("Please fill in all required fields.");
            return;
        }
    
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
    
        const token = localStorage.getItem('token'); 
        try {
            const response = await fetch(`http://localhost:3000/api/v1/admin/editItem/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    
            alert('Successfully updated!'); 
            navigate('/admin/editItem');

        } catch (error) {
            alert("Failed to update data");
            console.error("Failed to update data:", error);
        }
    };
    
    

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">

            <AdminNavbar/>
        
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">

                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Admin Edit Product
                </h2>

                {/* Text Input */}
                <div className="mb-4">
                    
                    <label htmlFor="text-input" className="block text-lg font-medium text-gray-700 mb-2">
                        Product Title
                    </label>

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
                    <label htmlFor="price-input" className="block text-lg font-medium text-gray-700 mb-2">
                        Price
                    </label>

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
                    <label htmlFor="category-input" className="block text-lg font-medium text-gray-700 mb-2">
                        Category
                    </label>

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
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Colors (comma separated)
                    </label>

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
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Sizes (comma separated)
                    </label>

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
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Select Image
                    </label>

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
                        <p className="text-lg text-gray-700 mb-2">
                            Image Preview:
                        </p>
                        <img src={imgURL} alt="Preview" className="w-full h-auto rounded-lg shadow-md mb-2" />
                    </div>
                )}

                {/* Upload Progress Bar */}
                {uploading && (
                    <div className="mb-4">
                        <p className="text-lg text-gray-700 mb-2">
                            Uploading: {progress}%
                        </p>
                        <div className="w-full bg-gray-200 rounded-full">
                            <div className="bg-primary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                )}

                {/* Update Button */}
                <button
                    onClick={handleUpdate}
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600"
                >
                    Update
                </button>
            </div>
        </div>
    );
}

export default AdminEditItem;
