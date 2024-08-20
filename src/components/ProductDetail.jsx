import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productCategories } from '../utils';
import './ProductDetail.css'; // Ensure to create appropriate styles
import Navbar from './Navbar';
import Button from './Button';

const ProductDetail = () => {
  const { categoryId, subCategoryId } = useParams();
  
  // Find the selected category and subcategory
  const category = productCategories.find(cat => cat.id === categoryId);
  const subCategory = category?.subCategories.find(sub => sub.id === subCategoryId);

  // Retrieve the selected product details
  const product = subCategory?.productImages[0]; // Assuming one product per subcategory for simplicity

  // Handle state for the main image
  const [mainImage, setMainImage] = useState(product?.img);

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
                  onClick={() => setMainImage(img)} // Update main image on click
                />
              ))}
            </div>
          </div>
          <div className='product-info'>
            <h1>{product?.desc}</h1>
            <h2>Product Description:</h2>
            <p>{product?.description}</p>
            
            <h2>Specifications</h2>
            <table>
              <tbody>
                {product?.specifications && Object.entries(product.specifications).map(([key, value], index) => (
                  <tr key={index}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2>Size</h2>
            <div className='size-options'>
              {product?.sizes?.map((size, index) => (
                <div key={index} className='size-box'>
                  {size}
                </div>
              ))}
            </div>

            <h2>Color</h2>
            <div className='color-options'>
              {product?.colors?.map((color, index) => (
                <div key={index} className='color-box'>
                  {color}
                </div>
              ))}
            </div>

            <Button name={"Request Quote"} path={'./contact'} classname={"btn"} />
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
