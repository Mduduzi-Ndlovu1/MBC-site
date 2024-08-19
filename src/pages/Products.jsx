import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProductPage.css';
import { productCategories } from '../utils';

const Products = () => {
  // Initialize state with default values
  const [selectedCategory, setSelectedCategory] = useState("Force Flue");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  // Find the default subcategory for "Force Flue" on initial render
  useEffect(() => {
    const defaultCategoryData = productCategories.find(cat => cat.id === selectedCategory);
    if (defaultCategoryData) {
      const defaultSubCategory = defaultCategoryData.subCategories.find(sub => sub.id === "Digital");
      setSelectedSubCategory(defaultSubCategory);
    }
  }, [selectedCategory]);

  // Function to handle category selection
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(null); // Reset subcategory selection when category changes
  };

  // Function to handle subcategory selection
  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  // Find the selected category's data
  const selectedCategoryData = productCategories.find(cat => cat.id === selectedCategory);

  return (
    <>
      <Navbar />
      <div className='productCategory'>
        {productCategories.map(category => (
          <button
            key={category.id}
            className={`product_category_btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.id}
          </button>
        ))}
      </div>

      {/* Display subcategories based on the selected category */}
      {selectedCategory && selectedCategoryData && (
        <div className='categorySection'>
          <div className='subCategoryList'>
            {selectedCategoryData.subCategories.map(subCategory => (
              <div key={subCategory.id} className='subCategory'>
                <img
                  src={subCategory.image}
                  alt={subCategory.name}
                  onClick={() => handleSubCategoryClick(subCategory)}
                  style={{ cursor: 'pointer' }}
                />
                <h3>{subCategory.name}</h3>
              </div>
            ))}
          </div>

          {/* Display products based on the selected subcategory */}
          {selectedSubCategory && (
            <div className='productsSection'>
              <h2>Products in {selectedSubCategory.name}</h2>
              <div className='products'>
                {selectedSubCategory.productImages.map(product => (
                  <div key={product.id} className='product'>
                    <img src={product.img} alt={product.desc} />
                    <p>{product.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Products;
