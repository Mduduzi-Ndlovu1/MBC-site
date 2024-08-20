import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productCategories } from '../utils';
import './ProductDetail.css';
import Navbar from './Navbar';

const ProductDetail = () => {
  const { categoryId, subCategoryId } = useParams();
  
  // Find the selected category and subcategory
  const category = productCategories.find(cat => cat.id === categoryId);
  const subCategory = category?.subCategories.find(sub => sub.id === subCategoryId);

  // Retrieve the selected product details
  const product = subCategory?.productImages[0];

  // Handle state for the main image
  const [mainImage, setMainImage] = useState(product?.img);

  // Handle state for showing content sections
  const [showFeatures, setShowFeatures] = useState(true);

  // Check if the product is found before accessing images
  const productImageSet = product?.otherImgs ? Object.values(product.otherImgs) : [];

  return (
    <>
      <Navbar />
      <div className='product-detail mt-[5rem]'>
        <div className='product-detail-container'>
          <div className='product-image-gallery'>
            <div className='main-image'>
              <img src={mainImage} alt={product?.desc} />
            </div>
            <div className='thumbnail-images'>
              {productImageSet.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product?.desc} ${index + 1}`}
                  className='thumbnail'
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
          <div className='product-info'>
            <h1>{product?.desc}</h1>
            <p>Product Description: {product?.desc}</p>
            <h2>Specifications</h2>
            <div className='specifications'>
              <div className='specification'>
                <h3>Size</h3>
                <div className='size-box'>{product?.size}</div>
              </div>
              <div className='specification'>
                <h3>Color</h3>
                <div className='color-box'>
                  {product?.color.map((c, index) => (
                    <div key={index} className='color' style={{ backgroundColor: c }}>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className='toggle-sections'>
            <button onClick={() => setShowFeatures(true)}>Features & Performance</button>
            <button onClick={() => setShowFeatures(false)}>Product Parameters</button>
          </div>
          {showFeatures && (
            <div className='features-performance'>
              {product?.features.map((feature, index) => (
                <div key={index} className='feature'>
                  {feature.img && <img src={feature.img} alt={feature.header} className='feature-image' />}
                  <div className='feature-text'>
                    <h3>{feature.header}</h3>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!showFeatures && (
            <div className='product-parameters'>
              {/* The table for Product Parameters will be added here later */}
            </div>
          )}
    </>
  );
};

export default ProductDetail;
