

// AdminEditItem.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminEdit = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:3000/api/v1/admin/editItem', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                console.log('Fetched products:', data);
                
                if (Array.isArray(data)) {
                    setProducts(data);
                } else {
                    setProducts([]);
                }
            } catch (error) {
                setError('Failed to fetch products');
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleEditClicks = (productId) => {
        navigate(`/admin/editItem/${productId}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Edit Products</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="border p-2">Image</th>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Category</th>
                        <th className="border p-2">New Arrival</th>
                        <th className="border p-2">Hot Deal</th>
                        <th className="border p-2">Colors</th>
                        <th className="border p-2">Sizes</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product._id}>
                                <td className="border p-2">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-16 h-16 object-cover"
                                    />
                                </td>
                                <td className="border p-2">{product.title}</td>
                                <td className="border p-2">${product.price}</td>
                                <td className="border p-2">{product.category}</td>
                                <td className="border p-2">
                                    {product.newArrival ? 'Yes' : 'No'}
                                </td>
                                <td className="border p-2">
                                    {product.hotDeal ? 'Yes' : 'No'}
                                </td>
                                <td className="border p-2">
                                    {product.colors.join(', ')}
                                </td>
                                <td className="border p-2">
                                    {product.sizes.join(', ')}
                                </td>
                                <td className="border p-2">
                                    <button
                                        className="bg-blue-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-600"
                                        onClick={() => handleEditClicks(product._id)} // Pass the product ID
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" className="text-center p-4">
                                No products available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AdminEdit;
