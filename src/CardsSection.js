import './styles.scss';
import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';


export default function CardsSection() {
    const [productData, setProductData] = useState([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na solicitação');
          }
          return response.json();
        })
        .then(data => {
          setProductData(data);
        })
        .catch(error => {
          console.error('Erro:', error);
        });
    }, []);

    return (
      <div className='container pt-5'>
        <div className='g-2 row row-cols-1 row-cols-md-2 row-cols-lg-4 align-items-center'>
          {productData.map(product => (
            <Link to={`/product/${encodeURIComponent(product.image)}/${encodeURIComponent(product.title)}/${encodeURIComponent(product.description)}`} style={{ textDecoration: 'none' }}>           
              <div key={product.id} className='pt-5 col d-flex justify-content-center'>
                <div className="card align-items-center" style={{ width: '250px', height:'400px' }}>
                  <img src={product.image} className="card-img-top card-img p-3 "  alt={product.title}/>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">R$: {product.price}</p>
                    <p className="card-text">{product.category}</p>
                  </div>
                </div>
              </div></Link>

          ))}
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      </div>
    );
  }