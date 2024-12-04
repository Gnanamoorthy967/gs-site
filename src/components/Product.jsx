import React, { useState, useEffect } from "react";
import './product.css';
import Loader from "./loader";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                console.log('data from api:', data);
                setProducts(data.products);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

  
    // Filter products based on the search term and category
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' || product.category === selectedCategory)
    );

    const uniqueCategories = Array.from(new Set(products.map(product => product.category)));

    return (
        <div className="products">
            <div className="producthead">
                <h1 className="h1">Product Page</h1>
                {/* <span>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span> */}
                <div>
                    <label htmlFor="searchInput">Search products:</label>
                    <input
                        type="text"
                        id="searchInput"
                        size={40}
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="categorySelect">Filter by category:</label>
                    <select
                        id="categorySelect"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {uniqueCategories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div></div>

            {loading ? (
                // <div>
                //     <p>Loading plz wait.......</p>

                // </div>
                <div className="loader">
                    <Loader />
                </div>

            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="productcontainer">
                    {Array.isArray(filteredProducts) && filteredProducts.map(product => (
                        <div class="polaroid">
                            <img className="image" src={product.thumbnail} alt="Norther Lights" style={{ width: '100%' }} />
                            <div class="container">
                                <h2>{product.title}</h2>
                                <p>{product.price}$</p>
                                <p>{product.description}</p>
                                <button className="buynowbtn">Buy now</button>
                               
                              
                            </div>
                           
                        </div>
                    ))}
                    
                </div>
                
            )}
        </div>
    );
};

export default ProductPage;

