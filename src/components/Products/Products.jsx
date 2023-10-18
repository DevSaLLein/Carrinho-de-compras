import { useState, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';

function Products(){

  let [products, setProducts] = useState([]);


  // Sempre que o que está no segundo parâmetro mudar, será executado
  // o que está no useEffect();
  useEffect(() => {
    fetchProducts('iphone').then((data) => {
      setProducts(data)
    })
  }, []);

  return(
    <section className="products container">
      {
        products.map((product) => {
          <ProductCard key={product.id} data={{product}}/>
        })
      }
    </section>
  );
}

export default Products;