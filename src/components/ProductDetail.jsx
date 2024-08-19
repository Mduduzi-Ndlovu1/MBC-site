import React from 'react';
import { useParams } from 'react-router-dom';
import { productCategories, gasWaterHeaters } from '../utils';
import './ProductDetail.css'; // Ensure to create appropriate styles

const ProductDetail = () => {
  const { categoryId, subCategoryId } = useParams();
  
  // Find the selected category and subcategory
  const category = productCategories.find(cat => cat.id === categoryId);
  const subCategory = category?.subCategories.find(sub => sub.id === subCategoryId);

  // Retrieve the selected product details
  const product = subCategory?.productImages[0]; // Assuming one product per subcategory for simplicity

  // Find the image set for the selected product
  const productImages = gasWaterHeaters.find(gas => Object.values(gas).includes(product?.img));
  const productImageSet = productImages ? Object.values(productImageSet).find(set => Object.values(set).includes(product?.img)) : null;

  return (
    <div className='product-detail'>
      <div className='product-detail-container'>
        <div className='product-image-gallery'>
          <div className='main-image'>
            <img src={product?.img} alt={product?.desc} />
          </div>
          <div className='thumbnail-images'>
            {productImageSet && Object.keys(productImageSet).map((key, index) => (
              <img
                key={index}
                src={productImageSet[key]}
                alt={`${product?.desc} ${key}`}
                className='thumbnail'
              />
            ))}
          </div>
        </div>
        <div className='product-info'>
          <h1>{product?.desc}</h1>
          <p>Here you can add more detailed information about the product.</p>
          <table>
            <tbody>
              <tr>
                <td>Feature 1</td>
                <td>Value 1</td>
              </tr>
              <tr>
                <td>Feature 2</td>
                <td>Value 2</td>
              </tr>
              <tr>
                <td>Feature 3</td>
                <td>Value 3</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          <button className='add-to-cart'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
