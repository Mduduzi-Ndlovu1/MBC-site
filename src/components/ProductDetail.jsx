import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productCategories } from '../utils';
import './ProductDetail.css'; // Ensure to create appropriate styles
import Navbar from './Navbar';
import Button from './Button';

const ProductDetail = () => {
  const { categoryId, subCategoryId } = useParams();
  
  const category = productCategories.find(cat => cat.id === categoryId);
  const subCategory = category?.subCategories.find(sub => sub.id === subCategoryId);

  const product = subCategory?.productImages[0] || {};
  const [mainImage, setMainImage] = useState(product?.img || '');

  const [showFeatures, setShowFeatures] = useState(true);

  const productImageSet = product?.otherImgs ? Object.values(product.otherImgs) : [];
  const featureContent = product?.featureContent || [];
  const productParameters = product?.productParameters || { models: [], parameters: [] };

  return (
    <>
      
      <section className='product-detail reveal mt-[5rem]'>
        <div className='product-detail-container reveal'>
          <div className='product-image-gallery reveal'>
            <div className='main-image reveal'>
              <img src={mainImage} alt={product?.desc || 'Product Image'} />
            </div>
            <div className='thumbnail-images reveal'>
              {productImageSet.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product?.desc} ${index + 1}`}
                  className='thumbnail reveal'
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
          <div className='product-info reveal'>
            <h1>{product?.desc || 'No description available'}</h1>
            <h2>Product Description:</h2>
            <p>{product?.description || 'No description available'}</p>
            <h2>Specifications</h2>
            <table className='specifications-table reveal'>
              <tbody>
                {product?.specifications && Object.entries(product.specifications).map(([key, value], index) => (
                  <tr key={index}>
                    
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2>Size</h2>
            <div className='size-options reveal'>
              {product?.sizes?.map((size, index) => (
                <div key={index} className='size-box reveal'>{size}</div>
              ))}
            </div>
            <h2>Color</h2>
            <div className='color-options reveal'>
              {product?.colors?.map((color, index) => (
                <div key={index} className='color-box reveal'>{color}</div>
              ))}
            </div>
            <Button name={"Request Quote"} path={'/contact'} classname={"btn reveal"} />
          </div>
        </div>
      </section>
      <div className='toggle-sections reveal'>
        <button onClick={() => setShowFeatures(true)} className={`toggle-sections-btn reveal ${showFeatures ? 'active' : ''}`}>Features & Performance</button>
        <button onClick={() => setShowFeatures(false)} className={`toggle-sections-btn reveal ${!showFeatures ? 'active' : ''}`}>Product Parameters</button>
      </div>
      {showFeatures && (
        <section className='features-performance reveal'>
          {featureContent.map(item => (
            <div key={item.id} className='feature-item reveal'>
              <img src={item.imageSrc} alt={item.Heading || 'Feature Image'} />
              <div>
                <h3>{item.Heading}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </section>
      )}
      {!showFeatures && (
        <section className='product-parameters reveal'>
          <table className='parameter-table reveal'>
            <thead>
              <tr>
                <th>Model</th>
                {productParameters.models.map((model, index) => (
                  <th key={index}>{model}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productParameters.parameters.map((param, index) => (
                <tr key={index}>
                  <td>{param.label}</td>
                  {param.values.map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};

export default ProductDetail;

