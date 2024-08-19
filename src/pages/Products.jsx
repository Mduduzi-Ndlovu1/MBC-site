import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProductPage.css';
import { productCategories } from '../utils';
import Button from '../components/Button';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Force Flue");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const defaultCategoryData = productCategories.find(cat => cat.id === selectedCategory);
    if (defaultCategoryData) {
      const defaultSubCategory = defaultCategoryData.subCategories.find(sub => sub.id === "Digital");
      setSelectedSubCategory(defaultSubCategory);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(null);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

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

          {selectedSubCategory && (
            <div className='productsSection'>
              <h2>Products in {selectedSubCategory.name}</h2>
              <div className='products'>
                {selectedSubCategory.productImages.map(product => (
                  <div key={product.id} className='product'>
                    <img src={product.img} alt={product.desc} />
                    <p className='mb-4 h-[4rem]'>{product.desc}</p>
                    <Button 
                      name="Learn More" 
                      path={`/products/${selectedCategory}/${selectedSubCategory.id}`} 
                      classname="btn-clear" 
                    />
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
